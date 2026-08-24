import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Music2,
  Twitter,
  Youtube,
} from 'lucide-react';
import pluggingAiLogo from '@assets/Adobe_Express_-_file_1787576133928.png';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

const discoverLinks = ['Labs & Workshops', 'DIY Framework', 'Resource Vault', 'Newsletter'];
const missionLinks = ['Our Manifesto', 'Newsroom Hub', 'Join the Team'];
const conciergeLinks = ['Talk To The Founder', 'Ask Our AI'];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3" data-testid={compact ? 'brand-header' : 'brand-footer'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 256 256"
        fill="currentColor"
        aria-hidden="true"
        className={compact ? 'h-5 w-5 text-white' : 'h-6 w-6 text-white'}
      >
        <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
      </svg>
      <span className={compact ? 'text-sm font-medium tracking-[0.24em]' : 'text-base font-medium tracking-[0.18em]'}>
        LUMINA
      </span>
    </div>
  );
}

function PluggingAiLogo({ footer = false }: { footer?: boolean }) {
  return (
    <img
      src={pluggingAiLogo}
      alt="Plugging AI"
      className={`company-logo-crop object-cover object-center ${footer ? 'h-12 w-[11rem]' : 'h-10 w-[9.8rem]'}`}
      data-testid={footer ? 'image-plugging-ai-footer-logo' : 'image-plugging-ai-logo'}
    />
  );
}

function FooterLinkList({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white/90">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href={link === 'Newsletter' ? '#notify' : link === 'Talk To The Founder' ? 'mailto:hello@lumina.studio' : '#footer'}
              className="footer-link group inline-flex items-center gap-1 text-[11px] text-white/58 hover:text-white"
              data-testid={`link-${link.toLowerCase().replaceAll(' ', '-')}`}
            >
              {link}
              <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-70" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="relative flex min-h-[100dvh] w-full flex-col items-center overflow-x-hidden font-sans selection:bg-white/20 selection:text-white">
      <video
        className="fixed inset-0 z-0 h-full w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
      />
      <div className="hero-vignette fixed inset-0 z-[1]" aria-hidden="true" />
      <div className="hero-atmosphere fixed inset-0 z-[2]" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <div className="relative z-10 flex min-h-[100dvh] w-full max-w-7xl flex-1 flex-col px-5 py-5 sm:px-8 md:px-10 lg:px-12">
        <header className="entrance flex items-center justify-between" data-testid="header-navigation">
          <a href="#hero" aria-label="Lumina home" data-testid="link-lumina-home">
            <PluggingAiLogo />
          </a>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/55" data-testid="text-edition">Edition 01</span>
        </header>

        <section id="hero" className="flex flex-1 items-start justify-center pt-[12vh] sm:pt-[14vh] md:pt-[15vh]" aria-labelledby="hero-headline">
          <div className="flex w-full flex-col items-center text-center">
            <h1 id="hero-headline" className="entrance entrance-delay-1 whitespace-normal text-[clamp(1.7rem,4vw,3.8rem)] font-normal leading-[0.98] tracking-[-0.065em] text-white drop-shadow-[0_2px_18px_rgba(13,24,36,0.3)] md:whitespace-nowrap" data-testid="heading-hero">
              Ignore Noise, Keep Thinking<span className="block md:inline"> In Systems</span>
            </h1>
            <p className="entrance entrance-delay-2 mt-6 whitespace-nowrap tracking-[-0.01em] text-white/70 text-[14px]" data-testid="text-hero-description">Deploy Self-Evolving Go-to-Market Systems in 2 Days With Full AI Sovereignty</p>
            <div className="entrance entrance-delay-3 mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@plugging.ai?subject=Book%20a%20call"
                className="inline-flex min-w-[10.5rem] items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#101a26] transition-all duration-300 hover:bg-[#d9e8e8] hover:shadow-[0_12px_40px_rgba(205,228,227,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                data-testid="button-book-call"
              >
                Book A Call
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#footer"
                className="inline-flex min-w-[10.5rem] items-center justify-center gap-3 rounded-full border border-white/35 bg-white/[0.06] px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white/70 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                data-testid="button-diy-framework"
              >
                DIY Framework
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <motion.footer
          id="footer"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 1, delay: 0.4, ease: "easeOut" }}
          className="liquid-glass mt-24 w-full rounded-[1.65rem] p-6 text-white/70 sm:mt-32 sm:p-8 md:mt-48 md:p-9"
          data-testid="footer-lumina"
        >
          <div className="mb-9 grid grid-cols-1 gap-10 md:mb-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <PluggingAiLogo footer />
              <p className="mt-5 max-w-sm text-[11px] leading-[1.65] text-white/62 sm:text-xs" data-testid="text-footer-description">
                We provide plug-and-play autonomous &amp; open-source go-to-market systems that handle growth for B2B Founders.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-7">
              <FooterLinkList title="Discover" links={discoverLinks} />
              <FooterLinkList title="The Mission" links={missionLinks} />
              <FooterLinkList title="Concierge" links={conciergeLinks} />
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/45" data-testid="text-attribution">Curated by @GotInGeorgiG</p>
            <div className="flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/45">Join the Journey:</span>
              <div className="flex items-center gap-3" aria-label="Lumina social links">
                <a href="https://open.spotify.com" target="_blank" rel="noreferrer" aria-label="Lumina on Music" className="text-white/70 transition-colors hover:text-white" data-testid="link-social-music">
                  <Music2 size={16} aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="Lumina on LinkedIn" className="text-white/70 transition-colors hover:text-white" data-testid="link-social-linkedin">
                  <Linkedin size={16} aria-hidden="true" />
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Lumina on X" className="text-white/70 transition-colors hover:text-white" data-testid="link-social-x">
                  <Twitter size={16} aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="Lumina on YouTube" className="text-white/70 transition-colors hover:text-white" data-testid="link-social-youtube">
                  <Youtube size={16} aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Lumina on Instagram" className="text-white/70 transition-colors hover:text-white" data-testid="link-social-instagram">
                  <Instagram size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;