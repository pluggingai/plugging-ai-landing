import { useState, useRef, useEffect } from 'react';
import { motion, type PanInfo } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Database,
  Filter,
  Send,
  Megaphone,
  RotateCcw,
  ShieldCheck,
  Award,
  FileText,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';

interface TaskCard {
  id: number;
  title: string;
  outcome: string;
  body: string;
  replaces: string[];
  saves: string;
  icon: LucideIcon;
}

const TASKS: TaskCard[] = [
  {
    id: 1,
    title: 'TAM Sourcing',
    outcome: 'A ready-to-target account list, not a spreadsheet you build yourself.',
    body: 'Scans firmographic, technographic, and intent data to identify every company in your TAM matching your ICP, then keeps the list continuously updated.',
    replaces: ['Apollo', 'ZoomInfo', 'Cognism'],
    saves: 'Est. $49–$119/seat/mo',
    icon: Database,
  },
  {
    id: 2,
    title: 'ICP Scoring',
    outcome: 'Every sourced account ranked by fit, so outbound targets the right companies first.',
    body: 'Scores accounts against your ideal customer profile using firmographic and intent signals, so no outreach touch is wasted on a bad-fit account.',
    replaces: ['MadKudu'],
    saves: 'Est. $999–$2,000/mo',
    icon: Filter,
  },
  {
    id: 3,
    title: 'Automated Outbound',
    outcome: 'Personalized cold email and LinkedIn outreach running continuously — without an SDR team.',
    body: "Writes and sends multi-channel sequences tailored to each account's signals, manages replies, and books meetings directly onto your calendar.",
    replaces: ['Outreach', 'Salesloft', 'Smartlead'],
    saves: 'Est. $94–$150/seat/mo',
    icon: Send,
  },
  {
    id: 4,
    title: 'Launch Ads',
    outcome: 'Targeted campaigns live across channels, without a media buyer managing them by hand.',
    body: 'Builds and launches ad campaigns against your ICP segments, allocates spend across channels, and continuously optimizes based on performance.',
    replaces: ['Metadata.io', 'AdRoll'],
    saves: 'Varies with ad spend',
    icon: Megaphone,
  },
  {
    id: 5,
    title: 'Closed-Lost Revenue Recovery',
    outcome: 'Revives dead pipeline into booked meetings without a rep lifting a finger.',
    body: 'Scans your CRM for closed-lost deals and cold contacts, pulls deal history and loss reasons, and drafts a re-engagement sequence timed to recent buying signals.',
    replaces: ['Clay', 'Smartlead'],
    saves: 'Est. $220–$280/mo',
    icon: RotateCcw,
  },
  {
    id: 6,
    title: 'CRM Hygiene',
    outcome: 'A clean, trustworthy CRM without a full-time ops hire.',
    body: 'Audits contacts and companies for duplicates, missing fields, and stale records. Every proposed change requires approval before it is applied.',
    replaces: ['Insycle'],
    saves: 'Scales with DB size',
    icon: ShieldCheck,
  },
  {
    id: 7,
    title: 'Lead Qualification',
    outcome: 'Only SQLs reach your calendar — never unqualified noise.',
    body: 'Scores and routes inbound and outbound leads against your ICP in real time, so reps only ever see meetings worth taking.',
    replaces: ['MadKudu'],
    saves: 'Est. $999–$2,000/mo',
    icon: Award,
  },
  {
    id: 8,
    title: 'Meeting Prep',
    outcome: 'Every rep walks in prepared — no manual research required.',
    body: 'Delivers a concise, role-aware brief before each meeting, pulling account history, recent activity, and context from every connected system.',
    replaces: ['Gong'],
    saves: 'Est. $110–$135/seat/mo',
    icon: FileText,
  },
  {
    id: 9,
    title: 'Pipeline Reporting',
    outcome: 'Real-time pipeline visibility without a RevOps analyst pulling reports.',
    body: 'Tracks deal movement, flags stalled or at-risk deals, and surfaces forecast-ready reporting automatically — always current, never a manual export.',
    replaces: ['Clari'],
    saves: 'Est. $100–$120/seat/mo',
    icon: BarChart3,
  },
];

const CARD_WIDTH = 340;
const CARD_GAP = 24; // gap-6 = 24px

export function GtmTasksCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxIndex, setMaxIndex] = useState(TASKS.length - 1);

  // Responsive max index calculation
  useEffect(() => {
    const updateMax = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const visibleCount = Math.max(1, Math.floor(containerWidth / (CARD_WIDTH + CARD_GAP)));
      const newMax = Math.max(0, TASKS.length - visibleCount);
      setMaxIndex(newMax);
      setCurrentIndex((prev) => Math.min(prev, newMax));
    };

    updateMax();
    window.addEventListener('resize', updateMax);
    return () => window.removeEventListener('resize', updateMax);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || velocity < -300) {
      handleNext();
    } else if (offset > 50 || velocity > 300) {
      handlePrev();
    }
  };

  return (
    <section
      id="gtm-tasks"
      className="relative z-10 w-full min-h-screen supports-[height:100svh]:min-h-[100svh] flex flex-col justify-center overflow-hidden"
      aria-label="GTM Agent Tasks"
    >
      {/* Carousel content — centered, above fixed video background */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-20 sm:py-28 md:py-36">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-12">
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* Kicker */}
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-white/55 mb-3 select-none">
              // GTM Agent Tasks
            </p>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-normal leading-[1.14] tracking-tight text-white drop-shadow-lg max-w-2xl">
              Consolidate your tech stack into one platform
            </h2>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mt-4 leading-relaxed font-normal">
              Outbound, Inbound, and RevOps, automated end-to-end -replacing the point tools your team is already paying for.
            </p>
          </motion.div>

          {/* Desktop Nav Arrows */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 self-end"
          >
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-[44px] h-[44px] rounded-full liquid-glass flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:liquid-glass-strong hover:scale-105 active:scale-95 text-white shadow-[0_0_15px_rgba(255,255,255,0.08)]'
              }`}
              aria-label="Previous card"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-[44px] h-[44px] rounded-full liquid-glass flex items-center justify-center transition-all duration-300 ${
                currentIndex >= maxIndex
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:liquid-glass-strong hover:scale-105 active:scale-95 text-white shadow-[0_0_15px_rgba(255,255,255,0.08)]'
              }`}
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </motion.div>
        </div>

        {/* Carousel Track Container */}
        <div ref={containerRef} className="relative w-full overflow-hidden py-4">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            animate={{ x: -currentIndex * (CARD_WIDTH + CARD_GAP) }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="flex items-stretch gap-6 cursor-grab active:cursor-grabbing will-change-transform"
          >
            {TASKS.map((task, i) => {
              const Icon = task.icon;
              return (
                <motion.div
                  key={task.id}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                  whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="liquid-glass bg-[#0a0a0a]/50 backdrop-blur-xl rounded-[1.25rem] p-6 min-h-[400px] w-[340px] flex-shrink-0 flex flex-col justify-between select-none relative group transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,255,255,0.12)] border border-white/10"
                >
                {/* Top Row: Icon + Saves Pill */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-[44px] h-[44px] rounded-xl liquid-glass flex items-center justify-center border border-white/10 group-hover:border-white/25 transition-colors">
                      <Icon className="w-5 h-5 text-white/90 stroke-[1.5]" />
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-mono tracking-wide px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/90 shadow-sm backdrop-blur-sm">
                      {task.saves}
                    </span>
                  </div>

                  {/* Middle Content */}
                  <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-white mt-5">
                    {task.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-white/90 mt-2 leading-snug">
                    {task.outcome}
                  </p>

                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-[32ch] mt-2.5 font-normal">
                    {task.body}
                  </p>
                </div>

                {/* Bottom Row: Replaces + Tool Chips */}
                <div className="pt-6 mt-4 border-t border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 mb-2.5 block">
                    REPLACES
                  </span>

                  <div className="flex flex-wrap gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {task.replaces.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.02] text-[10px] sm:text-[11px] font-mono tracking-wider text-white/85 hover:border-white/30 hover:bg-white/[0.06] transition-all"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => {
          const isActive = currentIndex === dotIndex;
          return (
            <button
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive ? 'w-6 bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          );
        })}
      </div>
      </div>
    </section>
  );
}
