import { useEffect, useState } from 'react';

const SECTION_THREE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4';

export function SectionThreeVideo() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;

      const sectionTwoEl = document.getElementById('capabilities');
      const howItWorksEl = document.getElementById('how-it-works') || document.getElementById('gtm-tasks');
      const gtmTasksEl = document.getElementById('gtm-tasks');
      const pricingEl = document.getElementById('pricing');

      if (!sectionTwoEl || !howItWorksEl) return;

      // Fade IN: crossfade from Section 2 into How It Works
      const crossfadeStart = sectionTwoEl.offsetTop + sectionTwoEl.offsetHeight - innerHeight * 0.6;
      const crossfadeEnd = howItWorksEl.offsetTop - innerHeight * 0.2;

      if (crossfadeEnd <= crossfadeStart) return;

      const fadeIn = Math.min(
        Math.max((scrollY - crossfadeStart) / (crossfadeEnd - crossfadeStart), 0),
        1
      );

      // Fade OUT: dissolve as Section 5 (Pricing) enters viewport
      let fadeOut = 1;
      if (pricingEl && gtmTasksEl) {
        const fadeOutStart = gtmTasksEl.offsetTop + gtmTasksEl.offsetHeight - innerHeight * 0.6;
        const fadeOutEnd = pricingEl.offsetTop - innerHeight * 0.2;
        if (fadeOutEnd > fadeOutStart) {
          fadeOut = 1 - Math.min(Math.max((scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart), 0), 1);
        }
      }

      setOpacity(fadeIn * fadeOut);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      style={{ opacity }}
      className="fixed inset-0 z-[3] overflow-hidden pointer-events-none transition-opacity duration-300 ease-out"
      aria-hidden="true"
    >
      {/* Full-viewport background motion video */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        src={SECTION_THREE_VIDEO}
      />

      {/* Atmospheric overlays matching Hero & Section 2 for seamless native styling */}
      <div className="hero-vignette absolute inset-0 opacity-75" />
      <div className="hero-atmosphere absolute inset-0 opacity-60" />
      <div className="hero-noise absolute inset-0 opacity-35" />

      {/* Deep gradient at top and bottom to seamlessly merge with adjacent sections and footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-transparent to-[#0a0a0a]/90" />

      {/* Atmospheric contrast veil ensuring carousel cards & text are 100% visible and punchy */}
      <div className="absolute inset-0 bg-[#0a0a0a]/35 backdrop-blur-[1px]" />
    </div>
  );
}
