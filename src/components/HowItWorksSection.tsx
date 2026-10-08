import { motion } from 'framer-motion';
import {
  Users,
  Send,
  Sparkles,
  Check,
  Search,
  MessageSquare,
  TrendingUp,
  Shield,
  Layers,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 w-full py-24 sm:py-32"
      aria-label="How It Works"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          {/* Eyebrow badge */}
          <div className="inline-block border-l-2 border-white bg-white/10 px-3 py-1.5 backdrop-blur-md font-mono text-[11px] uppercase tracking-[0.18em] text-white shadow-sm mb-4">
            HOW IT WORKS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] tracking-tight text-white drop-shadow-lg">
            From signals to revenue
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/70 mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
            Your autonomous GTM machine identifies the highest-intent buyers, converts them with precision outreach, and builds a compounding inbound engine.
          </p>
        </motion.div>

        {/* 3-Column Glass Bento Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Bento Card 1: Targeting & Discovery */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 25 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <div className="liquid-glass bg-[#0a0a0a]/50 backdrop-blur-xl rounded-[1.5rem] p-7 sm:p-8 border border-white/10 hover:border-white/20 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.12)] transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                      STEP 01
                    </span>
                    <span className="text-white/20 select-none">/</span>
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/80">
                      IDENTIFY
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/80">
                    <Search className="w-4 h-4" />
                  </div>
                </div>

                {/* Simulated UI Glass Widget: Intent & ICP Radar */}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 mb-6 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs mb-2.5">
                    <span className="font-mono text-white/60 uppercase tracking-wider text-[10px]">
                      ICP Fit Radar
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      98% Fit Score
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-white/70">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-white/50" />
                      Ready to decide now
                    </span>
                    <span className="text-white/40 font-mono text-[10px]">24/7 Scan</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-normal text-white leading-snug">
                  Customers already looking for what you sell
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Your agents work 24/7 to find companies and people that fit your ICP and are ready to decide now.
                </p>
              </div>

              {/* Bullets */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                    <Check className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                    <span>Finds customers, distributors, partners, and more</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                    <Check className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                    <span>Best fits are ranked automatically</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                    <Check className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                    <span>Personalized outreach is written for all of them</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Outreach & Replies */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 25 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <div className="liquid-glass bg-[#0a0a0a]/50 backdrop-blur-xl rounded-[1.5rem] p-7 sm:p-8 border border-white/15 shadow-[0_0_40px_-10px_rgba(255,255,255,0.12)] hover:border-white/25 transition-all duration-300 flex flex-col justify-between h-full bg-[#0a0a0a]/65">
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                      STEP 02
                    </span>
                    <span className="text-white/20 select-none">/</span>
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-white font-medium">
                      ENGAGE
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/25 bg-white/10 flex items-center justify-center text-white">
                    <Send className="w-4 h-4" />
                  </div>
                </div>

                {/* Simulated UI Glass Widget: Multi-channel Outreach Draft */}
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 mb-6 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-white/60" />
                      <span className="font-mono text-white/80 text-[11px]">Email + LinkedIn + Social</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] text-white/60 font-mono">
                      <Shield className="w-3 h-3 text-white/50" />
                      Permission Gate
                    </span>
                  </div>
                  <p className="text-[11px] text-white/60 italic border-l border-white/20 pl-2 mt-1">
                    "Tailored specifically to their tech-stack &amp; recent hiring moves..."
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-normal text-white leading-snug">
                  Outreach that gets replies
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  We write messages personalized to each person, across the channels where they actually respond.
                </p>
              </div>

              {/* Bullets */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                    <Check className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                    <span>Email, LinkedIn, and social media platforms</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                    <Check className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                    <span>Written uniquely to each person's context</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                    <Check className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                    <span className="font-medium text-white">Nothing sends without your permission</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Inbound & Audience Building */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 25 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <div className="liquid-glass bg-[#0a0a0a]/50 backdrop-blur-xl rounded-[1.5rem] p-7 sm:p-8 border border-white/10 hover:border-white/20 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.12)] transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                      STEP 03
                    </span>
                    <span className="text-white/20 select-none">/</span>
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/80">
                      COMPOUND
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/80">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Simulated UI Glass Widget: GEO / AEO & Trend Engine */}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 mb-6 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-white/60 uppercase tracking-wider text-[10px]">
                      Engine Optimization
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-white font-mono bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
                      <Layers className="w-3 h-3 text-white/70" />
                      GEO / AEO Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-white/70">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-white/50" />
                      Adapts to performance numbers
                    </span>
                    <span className="text-white/40 font-mono text-[10px]">Full Funnel</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-normal text-white leading-snug">
                  Content that builds your audience
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Content that works across the whole funnel. Some content gets you known, some start conversations, some book customers. Plugging AI runs the mix, and adapts it to what your numbers say.
                </p>
              </div>

              {/* Bullets */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                    <Check className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                    <span>Programmatic SEO / GEO / AEO</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                    <Check className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                    <span>Content created for your brand &amp; opinions</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                    <Check className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                    <span>Studies trends, competing content, and strategy</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
