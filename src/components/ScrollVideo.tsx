import { useEffect, useRef, useState } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260729_102822_0e6c87e8-c141-4744-bf32-ad30db296371.mp4';

export function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [hasVideoFrame, setHasVideoFrame] = useState(false);
  const [isCacheReady, setIsCacheReady] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  const framesRef = useRef<ImageBitmap[]>([]);
  const targetProgressRef = useRef(0);
  const smoothedProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isDestroyedRef = useRef(false);

  // 1. Scroll listener: video scrubs smoothly and stops at Section 2
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;

      // Section 2 element (Capability Section)
      const sectionTwoEl = document.getElementById('capabilities');

      let totalScrollable: number;
      if (sectionTwoEl) {
        // Distance to complete Section 2: original movement stops at Section 2
        const sectionTwoEnd = sectionTwoEl.offsetTop + sectionTwoEl.offsetHeight - innerHeight;
        totalScrollable = Math.max(sectionTwoEnd, 1);
      } else {
        const scrollHeight = document.documentElement.scrollHeight;
        totalScrollable = Math.max(scrollHeight - innerHeight, 1);
      }

      // Linear progress capped at 1.0 — frame stops at Section 2
      const progress = Math.min(Math.max(scrollY / totalScrollable, 0), 1);
      targetProgressRef.current = progress;

      // Natural smooth fade-in from hero
      const fadeInStart = 150;
      const fadeInEnd = 650;
      const fadeIn = Math.min(
        Math.max((scrollY - fadeInStart) / (fadeInEnd - fadeInStart), 0),
        1
      );

      // Smooth fade-out into Section 3 (How It Works) as it enters viewport
      const nextSectionEl = document.getElementById('how-it-works') || document.getElementById('gtm-tasks');
      let fadeOut = 1;
      if (nextSectionEl) {
        const fadeOutStart = nextSectionEl.offsetTop - innerHeight * 0.95;
        const fadeOutEnd = nextSectionEl.offsetTop - innerHeight * 0.25;
        if (fadeOutEnd > fadeOutStart) {
          fadeOut = 1 - Math.min(Math.max((scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart), 0), 1);
        }
      }

      setScrollOpacity(fadeIn * fadeOut);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // 2. Offscreen frame extraction
  useEffect(() => {
    isDestroyedRef.current = false;
    let offscreenVideo: HTMLVideoElement | null = document.createElement('video');
    offscreenVideo.src = VIDEO_URL;
    offscreenVideo.crossOrigin = 'anonymous';
    offscreenVideo.muted = true;
    offscreenVideo.playsInline = true;
    offscreenVideo.preload = 'auto';

    const extractFrames = async () => {
      if (!offscreenVideo) return;
      try {
        await new Promise<void>((resolve, reject) => {
          if (!offscreenVideo) return reject();
          if (offscreenVideo.readyState >= 1) return resolve();
          offscreenVideo.onloadedmetadata = () => resolve();
          offscreenVideo.onerror = reject;
        });

        await new Promise((r) => setTimeout(r, 300));
        if (isDestroyedRef.current || !offscreenVideo) return;

        const duration = offscreenVideo.duration || 5;
        const totalFrames = Math.min(Math.max(Math.round(duration * 12), 24), 90);

        const naturalWidth = offscreenVideo.videoWidth || 1920;
        const naturalHeight = offscreenVideo.videoHeight || 1080;
        const targetWidth = Math.min(naturalWidth, 960);
        const targetHeight = Math.round((naturalHeight / naturalWidth) * targetWidth);

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = targetWidth;
        tempCanvas.height = targetHeight;
        const tempCtx = tempCanvas.getContext('2d', { alpha: false });
        if (!tempCtx) return;

        const extracted: ImageBitmap[] = [];

        for (let i = 0; i < totalFrames; i++) {
          if (isDestroyedRef.current || !offscreenVideo) break;
          const targetTime = (i / (totalFrames - 1)) * Math.max(duration - 0.05, 0.1);

          await new Promise<void>((res) => {
            if (!offscreenVideo) return res();
            let isResolved = false;
            const onSeeked = () => {
              if (isResolved) return;
              isResolved = true;
              offscreenVideo?.removeEventListener('seeked', onSeeked);
              res();
            };
            offscreenVideo.addEventListener('seeked', onSeeked);
            offscreenVideo.currentTime = targetTime;
            setTimeout(() => {
              if (!isResolved) {
                isResolved = true;
                offscreenVideo?.removeEventListener('seeked', onSeeked);
                res();
              }
            }, 350);
          });

          if (isDestroyedRef.current || !offscreenVideo) break;

          tempCtx.drawImage(offscreenVideo, 0, 0, targetWidth, targetHeight);
          try {
            const bitmap = await createImageBitmap(tempCanvas);
            extracted.push(bitmap);
          } catch {
            break;
          }
        }

        if (!isDestroyedRef.current && extracted.length >= 10) {
          framesRef.current = extracted;
          setIsCacheReady(true);
        }
      } catch {
        // Fallback to video seek
      } finally {
        if (offscreenVideo) {
          offscreenVideo.src = '';
          offscreenVideo = null;
        }
      }
    };

    extractFrames();

    return () => {
      isDestroyedRef.current = true;
      if (offscreenVideo) {
        offscreenVideo.src = '';
        offscreenVideo = null;
      }
      framesRef.current.forEach((bitmap) => bitmap.close?.());
      framesRef.current = [];
    };
  }, []);

  // 3. Animation loop: lerp smoothing & canvas draw
  useEffect(() => {
    let lastSeekTime = -1;

    const render = () => {
      const target = targetProgressRef.current;
      const current = smoothedProgressRef.current;
      smoothedProgressRef.current += (target - current) * 0.12;
      const progress = smoothedProgressRef.current;

      const canvas = canvasRef.current;
      const video = videoRef.current;

      if (canvas && framesRef.current.length > 0) {
        const ctx = canvas.getContext('2d', { alpha: false });
        if (ctx) {
          const frames = framesRef.current;
          const frameIndex = Math.min(
            frames.length - 1,
            Math.max(0, Math.floor(progress * frames.length))
          );
          const frame = frames[frameIndex];

          if (frame) {
            const cw = canvas.width;
            const ch = canvas.height;
            const iw = frame.width;
            const ih = frame.height;

            const scale = Math.max(cw / iw, ch / ih);
            const nw = iw * scale;
            const nh = ih * scale;
            const nx = (cw - nw) / 2;
            const ny = (ch - nh) / 2;

            ctx.drawImage(frame, nx, ny, nw, nh);
          }
        }
      } else if (video && video.duration) {
        const duration = video.duration || 5;
        const targetTime = progress * Math.max(duration - 0.05, 0.1);
        if (Math.abs(targetTime - lastSeekTime) > 0.04 && !video.seeking) {
          lastSeekTime = targetTime;
          video.currentTime = targetTime;
        }
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isCacheReady]);

  // 4. Handle canvas resizing with DPR
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{ opacity: scrollOpacity }}
      className="fixed inset-0 z-[2] overflow-hidden pointer-events-none transition-opacity duration-300 ease-out"
      aria-hidden="true"
    >
      {/* Direct video fallback */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setHasVideoFrame(true)}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${
          hasVideoFrame && !isCacheReady ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Smooth canvas scrubber */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${
          isCacheReady ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-[#0a0a0a]/70" />
    </div>
  );
}

