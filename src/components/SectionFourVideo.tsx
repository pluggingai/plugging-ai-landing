import { useEffect, useState } from 'react';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4';

export function SectionFourVideo() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;

      const sectionThreeEl = document.getElementById('gtm-tasks');
      const pricingEl = document.getElementById('pricing');

      if (!sectionThreeEl || !pricingEl) return;

      // Start crossfading as the user scrolls past Section 3's content towards Pricing
      const crossfadeStart = sectionThreeEl.offsetTop + sectionThreeEl.offsetHeight - innerHeight * 0.6;
      const crossfadeEnd = pricingEl.offsetTop - innerHeight * 0.2;

      if (crossfadeEnd <= crossfadeStart) return;

      const calculatedOpacity = Math.min(
        Math.max((scrollY - crossfadeStart) / (crossfadeEnd - crossfadeStart), 0),
        1
      );

      setOpacity(calculatedOpacity);
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
      className="fixed inset-0 z-[4] overflow-hidden pointer-events-none transition-opacity duration-300 ease-out"
      aria-hidden="true"
    >
      {/* Full-viewport background motion video — Hero video reused for Section 4 */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        src={HERO_VIDEO}
      />

      {/* Atmospheric overlays matching Hero */}
      <div className="hero-vignette absolute inset-0 z-[1] pointer-events-none" />
      <div className="hero-atmosphere absolute inset-0 z-[1] pointer-events-none" />
      <div className="hero-noise absolute inset-0 z-[1] pointer-events-none" />

      {/* Ambient gradient blobs shining through the translucent glass panels */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[140px] pointer-events-none mix-blend-screen" />

      {/* Deep gradient at top and bottom to seamlessly merge with adjacent sections */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#0a0a0a]/90 via-transparent to-[#0a0a0a]/95" />
    </div>
  );
}
