import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

const PORTRAIT_URL =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260728_050334_5b076e26-0ce7-4898-b432-d764190e448f.png&w=1280&q=85';

const SERVICES = [
  '/ AI AUTOMATION',
  '/ AI INTEGRATION',
  '/ AI AGENT DEVELOPMENT',
];

export function SectionOne() {
  return (
    <section
      id="overview"
      className="min-h-screen supports-[height:100svh]:min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 md:pb-16"
      aria-label="Hero"
    >
      {/* Top row */}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        {/* Left — service list */}
        <div className="flex flex-col gap-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service} delay={150 + i * 120}>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/90 drop-shadow-md">
                {service}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Right — intro */}
        <Reveal delay={300} className="max-w-xs sm:text-right">
          <p className="text-lg sm:text-xl leading-relaxed text-white drop-shadow-md font-normal">
            We design systems that reason, evolve and collaborate to the way your company operates.
          </p>
        </Reveal>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mt-16 md:mt-0">
        {/* Left */}
        <div className="max-w-2xl">
          {/* Badge */}
          <Reveal delay={150}>
            <div className="border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md font-mono text-[11px] uppercase tracking-[0.15em] mb-5 inline-block text-white">
              We Automate 30+ Businesses
            </div>
          </Reveal>

          {/* H1 */}
          <Reveal delay={280}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg">
              Clear. Precise.
              <br />
              Automated.
            </h1>
          </Reveal>
        </div>

        {/* Right — glass contact card */}
        <Reveal delay={420}>
          <div className="flex items-center gap-4 rounded-xl bg-white/15 p-3 backdrop-blur-md border border-white/15 shadow-lg">
            <img
              src={PORTRAIT_URL}
              alt="Mitha, co-founder of NovaAI"
              className="h-24 w-20 rounded-lg object-cover bg-white/5"
              loading="lazy"
            />
            <div className="flex flex-col gap-1.5 pr-2">
              <span className="text-sm font-medium text-white">
                Talk with Mitha
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                Co-founder of NovaAI
              </span>
              <a
                href="https://cal.com/saif-allah-aziez-7t3xl3/strategy-call"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black hover:bg-white/85 mt-1.5 flex items-center justify-center gap-1 transition-colors duration-300 shadow-sm"
              >
                Book 15-mins call
                <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
