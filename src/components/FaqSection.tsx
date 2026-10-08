import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'What makes Plugging AI different from general purpose AI agents?',
    answer:
      'Everyone has access to the same model and tools. Context is the new Moat, we focus on building better harness systems for go to market, to do one job 100x better than any general purpose AI agent; put qualified meetings in your calendar.',
  },
  {
    id: 2,
    question: 'Are there any hidden setup fees or monthly retainers?',
    answer:
      'Zero. You pay for one monthly subscription that covers everything: GTM infrastructure, AI tokens, data enrichment, and tools are fully covered.',
  },
  {
    id: 3,
    question: 'What channels do you use to generate pipeline?',
    answer:
      'Your AI runs a multi-channel outbound strategy including Cold Email, LinkedIn outreach, WhatsApp and Paid LinkedIn Ads.',
  },
  {
    id: 4,
    question: 'Do I need to manage tools?',
    answer:
      'No. We automate your entire top-of-funnel pipeline and RevOps layer (CRM hygiene, lead routing, meeting prep) so you need zero additional SDR headcount or software stack management.',
  },
  {
    id: 5,
    question: 'Am I locked into a long-term contract?',
    answer:
      'No long-term lock-ins. You can pause or cancel your campaigns at any time directly through your Slack/comm channel.',
  },
  {
    id: 6,
    question: 'How do you ensure messaging sounds authentic to my brand?',
    answer:
      'Our AI agents reason through your specific business context to generate personalized sequences, content, and landing pages, matching your brand voice. You can verify everything before we use it.',
  },
  {
    id: 7,
    question: 'How much hands-on time is required from me and my team?',
    answer:
      'Very minimal. Aside from an initial onboarding call, direct Slack access with your GTM Engineer, and monthly review reports, your team only needs to show up and close the qualified meetings booked on their calendars.',
  },
  {
    id: 8,
    question: 'How do you guarantee high data quality for ICP targeting?',
    answer:
      'We integrate with top global B2B data platforms using multi-provider waterfall enrichment, delivering pristine contact accuracy, real-time verification, and maximum global coverage for your target market.',
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative z-10 w-full py-24 sm:py-32"
      aria-label="Frequently Asked Questions"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          {/* Kicker badge */}
          <div className="inline-block border-l-2 border-white bg-white/10 px-3 py-1.5 backdrop-blur-md font-mono text-[11px] uppercase tracking-[0.18em] text-white shadow-sm mb-4">
            FAQ GUIDE
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] tracking-tight text-white drop-shadow-lg">
            FAQ Guide
          </h2>

          <p className="text-sm sm:text-base text-white/70 mt-4 leading-relaxed font-normal">
            Everything you need to know about how Plugging AI automates and scales your GTM pipeline.
          </p>
        </motion.div>

        {/* Accordion List with Liquid Glass Style */}
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ filter: 'blur(8px)', opacity: 0, y: 15 }}
                whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={cn(
                    'liquid-glass bg-[#0a0a0a]/50 backdrop-blur-xl rounded-[1.25rem] border border-white/10 transition-all duration-300 overflow-hidden',
                    isOpen
                      ? 'border-white/25 shadow-[0_0_35px_-8px_rgba(255,255,255,0.12)] bg-[#0a0a0a]/65'
                      : 'hover:border-white/20 hover:bg-[#0a0a0a]/60'
                  )}
                >
                  <button
                    onClick={() => toggleOpen(item.id)}
                    className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs text-white/45 pt-0.5 select-none shrink-0">
                        0{item.id}
                      </span>
                      <span className="text-base sm:text-lg font-medium text-white/95 leading-snug">
                        {item.question}
                      </span>
                    </div>
                    <div
                      className={cn(
                        'w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300',
                        isOpen && 'rotate-180 bg-white/15 border-white/30 text-white'
                      )}
                    >
                      <ChevronDown className="w-4 h-4 text-white/70" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-white/5">
                          <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-white/75 font-normal pl-8">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 sm:mt-20"
        >
          <div className="liquid-glass bg-[#0a0a0a]/50 backdrop-blur-xl rounded-[1.5rem] p-8 sm:p-10 border border-white/10 text-center flex flex-col items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/80">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-normal text-white">
              Have a question not covered here?
            </h3>
            <p className="text-sm text-white/60 max-w-md">
              Speak directly with our founder or run your free GTM audit to see how our AI handles your pipeline.
            </p>
            <div className="mt-2 flex flex-wrap gap-3 justify-center">
              <a
                href="https://cal.com/saif-allah-aziez-7t3xl3/strategy-call"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-black hover:bg-[#d9e8e8] transition-all flex items-center gap-2 shadow-sm"
              >
                Run Free GTM Audit
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
