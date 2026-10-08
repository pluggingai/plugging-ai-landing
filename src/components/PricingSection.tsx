import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Zap, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function GlassPanel({
  children,
  className,
  glow = true,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        'liquid-glass bg-[#0a0a0a]/50 backdrop-blur-xl rounded-[1.5rem] p-7 sm:p-8 border border-white/10',
        'transition-all duration-300',
        glow && 'hover:border-white/20 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.15)]',
        className
      )}
    >
      {children}
    </div>
  );
}

type Plan = {
  name: string;
  price: string;
  period: string;
  badge?: string;
  tagline: string;
  summaryFeatures: string[];
  detailedFeatures: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Startup',
    price: '$999',
    period: '/month',
    badge: 'Popular for Startups',
    tagline: 'Custom GTM strategy backed by real market data with full omnichannel AI outbound.',
    featured: false,
    summaryFeatures: [
      'Custom GTM strategy backed by real market data',
      'Full Omnichannel AI Outbound',
      'Performance reports',
      'Direct Slack/comms with your team',
    ],
    detailedFeatures: [
      'Custom AI agents & plugins for your context',
      'Unlimited ICP list building & scoring',
      'Unlimited data enrichment (companies, people, contacts)',
      'Unlimited outreach campaigns across email, LinkedIn & WhatsApp',
      'Dedicated cold email infrastructure',
      'AI reply handling & routing',
      'Calendar booking + closer handoff',
      'Performance reports',
      'Pause / cancel anytime',
      'Weekly optimization',
      'AI native CRM',
    ],
  },
  {
    name: 'Growth',
    price: '$2,200',
    period: '/month',
    badge: 'Most Comprehensive',
    tagline: 'Scale with full AI Inbound, account-based ads, and a dedicated GTM engineer.',
    featured: true,
    summaryFeatures: [
      'Everything in Startup',
      'Advanced targeting & enrichment',
      'Full AI Inbound (GEO / AEO)',
      'Dedicated GTM Engineer',
      'Works with our founding team',
    ],
    detailedFeatures: [
      'Account-based campaigns for each segment or account',
      'Unlimited LinkedIn Ad campaigns',
      'Programmatic GEO / AEO',
      'Dedicated GTM engineer',
      'Monthly strategy calls with the founder',
      'Priority routing & custom RevOps workflows',
    ],
  },
];

type ComparisonRow = {
  label: string;
  startup: boolean | string;
  growth: boolean | string;
};

type ComparisonCategory = {
  category: string;
  rows: ComparisonRow[];
};

const comparisonCategories: ComparisonCategory[] = [
  {
    category: 'AI OUTBOUND & INFRASTRUCTURE',
    rows: [
      { label: 'Custom AI agents & plugins for your context', startup: true, growth: true },
      { label: 'Unlimited ICP list building & scoring', startup: true, growth: true },
      { label: 'Unlimited data enrichment (companies, people, contacts)', startup: true, growth: true },
      { label: 'Unlimited outreach across email, LinkedIn & WhatsApp', startup: true, growth: true },
      { label: 'Dedicated cold email infrastructure & deliverability', startup: true, growth: true },
      { label: 'AI reply handling & smart routing', startup: true, growth: true },
      { label: 'Calendar booking + closer handoff', startup: true, growth: true },
    ],
  },
  {
    category: 'AI INBOUND & PAID CHANNELS',
    rows: [
      { label: 'Account-based campaigns for each segment/account', startup: false, growth: true },
      { label: 'Unlimited LinkedIn Ad campaigns', startup: false, growth: true },
      { label: 'Programmatic GEO & AEO (Generative Engine Optimization)', startup: false, growth: true },
      { label: 'Inbound organic demand capture', startup: false, growth: true },
    ],
  },
  {
    category: 'TEAM, REVOPS & SUPPORT',
    rows: [
      { label: 'AI native CRM & pipeline hygiene', startup: true, growth: true },
      { label: 'Weekly performance reports & optimization', startup: true, growth: true },
      { label: 'Direct Slack / comms channel with your team', startup: true, growth: true },
      { label: 'Dedicated GTM Engineer', startup: false, growth: true },
      { label: 'Monthly strategy calls with founder', startup: false, growth: true },
      { label: 'Pause or cancel anytime', startup: true, growth: true },
    ],
  },
];

export function PricingSection() {
  const calUrl = 'https://cal.com/saif-allah-aziez-7t3xl3/strategy-call';

  return (
    <section
      id="pricing"
      className="relative z-10 w-full min-h-screen flex flex-col justify-center overflow-hidden py-24 sm:py-32"
      aria-label="Pricing"
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
          {/* Kicker badge */}
          <div className="inline-block border-l-2 border-white bg-white/10 px-3 py-1.5 backdrop-blur-md font-mono text-[11px] uppercase tracking-[0.18em] text-white shadow-sm mb-4">
            PRICING
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] tracking-tight text-white drop-shadow-lg">
            Made to grow with you
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
            Fully automated sales and marketing, designed uniquely to B2B startups.
          </p>
        </motion.div>

        {/* Pricing Cards Grid (2 Tiers) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch pt-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full pt-4"
            >
              <GlassPanel
                className={cn(
                  'relative !overflow-visible flex h-full flex-col justify-between p-8 sm:p-10 pt-10 sm:pt-11',
                  plan.featured &&
                    'border-white/25 shadow-[0_0_50px_-10px_rgba(255,255,255,0.18)] bg-[#0a0a0a]/65'
                )}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className={cn(
                      'absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-[0.12em] flex items-center gap-1.5 z-30 whitespace-nowrap',
                      plan.featured
                        ? 'bg-white text-black font-semibold shadow-[0_4px_25px_rgba(255,255,255,0.35)]'
                        : 'border border-white/25 bg-[#0e1624]/95 text-white font-medium shadow-[0_4px_25px_rgba(0,0,0,0.7)] backdrop-blur-md'
                    )}
                  >
                    {plan.featured ? <Sparkles className="w-3.5 h-3.5" /> : <Zap className="w-3.5 h-3.5 text-white/90" />}
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {/* Tier name */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white drop-shadow-md">{plan.name}</h3>
                  </div>

                  {/* Tagline */}
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-base text-white/55 font-mono">{plan.period}</span>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <a
                      href={calUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        'rounded-full px-6 py-3.5 text-xs font-medium uppercase tracking-[0.14em] transition-all w-full text-center flex items-center justify-center gap-2 shadow-sm',
                        plan.featured
                          ? 'bg-white text-black hover:bg-[#d9e8e8] hover:shadow-[0_12px_40px_rgba(205,228,227,0.2)]'
                          : 'border border-white/25 bg-white/10 hover:bg-white/20 text-white'
                      )}
                    >
                      Run Free GTM Audit
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-white/10" />

                  {/* Key highlights */}
                  <div className="mt-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50 mb-3 select-none">
                      // What's included:
                    </p>
                    <ul className="flex flex-col gap-3">
                      {plan.summaryFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-white/90">
                          <Check className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                          <span className="font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Detailed feature bullets */}
                  <div className="mt-6 pt-5 border-t border-white/5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 mb-3 select-none">
                      // Deep capabilities:
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {plan.detailedFeatures.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-xs text-white/65">
                          <span className="text-white/40 select-none">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        {/* Predictable growth banner */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <GlassPanel className="p-6 text-center" glow={false}>
            <p className="text-base font-normal tracking-wide text-white">
              Predictable growth from day 1.
            </p>
            <p className="mt-1 text-xs text-white/60">
              No hidden setup fees. No long-term lock-ins. Pause or cancel your campaigns anytime.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={calUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[10.5rem] items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#101a26] transition-all duration-300 hover:bg-[#d9e8e8] hover:shadow-[0_12px_40px_rgba(205,228,227,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Run Free GTM Audit
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </GlassPanel>
        </motion.div>

        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-24 max-w-5xl mx-auto"
        >
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-white/55 mb-1.5 select-none">
                // Feature Comparison
              </p>
              <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white">
                Plan specifications &amp; capabilities
              </h3>
            </div>
            <p className="text-xs text-white/50 font-mono">
              Comparing Startup vs. Growth
            </p>
          </div>

          <GlassPanel className="overflow-hidden p-0" glow={false}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="py-4 px-6 font-medium text-white/70 w-[50%] text-xs uppercase tracking-[0.12em] font-mono">
                      Feature
                    </th>
                    <th className="py-4 px-6 text-center font-medium text-white w-[25%]">
                      <div className="text-xs uppercase tracking-wider font-mono">Startup</div>
                      <div className="text-xs text-white/50 font-normal mt-0.5">$999 / mo</div>
                    </th>
                    <th className="py-4 px-6 text-center font-medium text-white w-[25%] bg-white/[0.04]">
                      <div className="text-xs uppercase tracking-wider font-mono">Growth</div>
                      <div className="text-xs text-white/50 font-normal mt-0.5">$2,200 / mo</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonCategories.map((cat) => (
                    <Fragment key={cat.category}>
                      <tr className="border-t border-b border-white/10 bg-white/[0.03]">
                        <td
                          colSpan={3}
                          className="py-3 px-6 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60 font-semibold"
                        >
                          {cat.category}
                        </td>
                      </tr>
                      {cat.rows.map((row, rIdx) => {
                        const isEven = rIdx % 2 === 0;
                        return (
                          <tr
                            key={row.label}
                            className={cn(
                              'border-b border-white/5 hover:bg-white/[0.02] transition-colors',
                              isEven ? 'bg-transparent' : 'bg-white/[0.01]'
                            )}
                          >
                            <td className="py-3.5 px-6 text-sm text-white/80 font-normal">
                              {row.label}
                            </td>
                            {/* Startup */}
                            <td className="py-3.5 px-6 text-center">
                              {row.startup ? (
                                <Check className="w-4 h-4 text-white/80 mx-auto stroke-[2]" />
                              ) : (
                                <span className="text-white/20 select-none">—</span>
                              )}
                            </td>
                            {/* Growth */}
                            <td className="py-3.5 px-6 text-center bg-white/[0.04]">
                              {row.growth ? (
                                <Check className="w-4 h-4 text-white mx-auto stroke-[2.5]" />
                              ) : (
                                <span className="text-white/20 select-none">—</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
