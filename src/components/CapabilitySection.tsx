import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

const PORTRAIT_URL =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260728_050334_5b076e26-0ce7-4898-b432-d764190e448f.png&w=1280&q=85';

const CAPABILITIES = [
  {
    index: '01',
    title: 'AI Outbound',
    body: 'Cold email, paid ads, and LinkedIn outreach run continuously to put your offer in front of the right ICP at the right time.',
  },
  {
    index: '02',
    title: 'AI Inbound',
    body: 'Programmatic GEO, and AEO combined with LinkedIn content build a compounding pipeline of demand that keeps working even when outbound goes quiet.',
  },
  {
    index: '03',
    title: 'AI RevOps',
    body: 'We automate the complex operational layer that general-purpose agents like Claude Code or Codex struggle with; CRM hygiene, revenue recovery, lead qualification, meeting prep, and pipeline reporting.',
  },
];

export function CapabilitySection() {
  return (
    <section
      id="capabilities"
      className="min-h-screen supports-[height:100svh]:min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 md:pb-16"
      aria-label="Capabilities"
    >
      {/* Top row */}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        {/* Left badge */}
        <Reveal delay={120}>
          <div className="border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md font-mono text-[11px] uppercase tracking-[0.15em] inline-block text-white shadow-sm">
            Designed for modern B2B startups
          </div>
        </Reveal>

        {/* Right copy */}
        <Reveal delay={220} className="max-w-md sm:text-right">
          <p className="text-lg sm:text-xl leading-relaxed text-white drop-shadow-md font-normal">
            Your AI doesn't just automate tasks, it reasons, evolves, and collaborates with your team.
          </p>
        </Reveal>
      </div>

      {/* Bottom area */}
      <div className="flex-1 flex flex-col justify-end gap-12 md:flex-row md:items-end md:justify-between md:gap-16 mt-16 md:mt-0">
        {/* Left column */}
        <div className="max-w-xl">
          {/* H2 */}
          <Reveal delay={180}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-white drop-shadow-lg">
              One OS For All
              <br />
              Growth Objectives
            </h2>
          </Reveal>

          {/* Body */}
          <Reveal delay={320}>
            <p className="mt-6 max-w-lg text-sm sm:text-base text-white/80 drop-shadow-md leading-relaxed font-normal">
              Fully automated sales &amp; marketing with daily support, real accountability, and an AI team that treats your growth like its own. Because it is.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={420}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://cal.com/saif-allah-aziez-7t3xl3/strategy-call"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-medium text-black hover:bg-white/85 flex items-center gap-1.5 transition-colors duration-300 shadow-sm"
              >
                Run Free GTM Audit
                <ChevronRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-5 py-2.5 text-xs sm:text-sm text-white hover:bg-white/20 transition-colors duration-300"
              >
                See How it Works
              </a>
            </div>
          </Reveal>

          {/* Founder Glass Card */}
          <Reveal delay={500} className="mt-10">
            <div className="flex items-center gap-4 rounded-xl bg-white/15 p-3 backdrop-blur-md border border-white/15 shadow-lg max-w-sm">
              <img
                src={PORTRAIT_URL}
                alt="Saif, founder of Plugging AI"
                className="h-20 w-16 rounded-lg object-cover bg-white/5"
                loading="lazy"
              />
              <div className="flex flex-col gap-1 pr-2">
                <span className="text-sm font-medium text-white">
                  Talk with Saif
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                  Founder of Plugging AI
                </span>
                <a
                  href="https://cal.com/saif-allah-aziez-7t3xl3/strategy-call"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium text-black hover:bg-white/85 mt-1 flex items-center justify-center gap-1 transition-colors duration-300 shadow-sm self-start"
                >
                  Book 15-mins call
                  <ChevronRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — frosted capability panel */}
        <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md px-5 sm:px-6 shadow-xl">
          {CAPABILITIES.map((cap, i) => {
            const isLast = i === CAPABILITIES.length - 1;
            return (
              <Reveal key={cap.index} delay={300 + i * 110}>
                <div
                  className={`flex gap-5 py-5 group cursor-pointer ${
                    !isLast ? 'border-b border-white/15' : ''
                  }`}
                >
                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/55 pt-0.5 select-none">
                    {cap.index}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-white transition-colors duration-300">
                        {cap.title}
                      </h3>
                      <ChevronRight className="h-4 w-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                      {cap.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
