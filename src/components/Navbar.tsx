import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import pluggingAiLogo from '@assets/Adobe_Express_-_file_1787576133928.png';

const navItems = [
  { label: 'Our Product', href: '#capabilities' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 py-3.5 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 ${
          isScrolled
            ? 'liquid-glass bg-[#080d14]/80 backdrop-blur-xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
            : 'liquid-glass bg-[#080d14]/50 backdrop-blur-lg border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center group transition-opacity hover:opacity-90 shrink-0"
          aria-label="Plugging AI Home"
        >
          <img
            src={pluggingAiLogo}
            alt="Plugging AI"
            className="company-logo-crop object-cover object-center h-8 sm:h-9 w-[7.8rem] sm:w-[8.8rem]"
          />
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-xs uppercase tracking-[0.14em] font-mono text-white/70 hover:text-white transition-colors duration-200 relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://cal.com/saif-allah-aziez-7t3xl3/strategy-call"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#101a26] transition-all duration-300 hover:bg-[#d9e8e8] hover:shadow-[0_8px_25px_rgba(205,228,227,0.25)]"
          >
            <span>Book A Call</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[4.2rem] inset-x-4 max-w-sm mx-auto rounded-2xl liquid-glass bg-[#080d14]/95 backdrop-blur-2xl border border-white/20 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.8)] z-50 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-3 py-2 rounded-lg text-xs uppercase tracking-[0.14em] font-mono text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10">
              <a
                href="https://cal.com/saif-allah-aziez-7t3xl3/strategy-call"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#101a26]"
              >
                <span>Book A Call</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
