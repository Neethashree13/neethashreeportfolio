import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  PenTool,
  Monitor,
  Sparkles,
  Server,
  Database,
  Rocket,
} from 'lucide-react';

const pipelineSteps = [
  { label: 'IDEA', icon: Lightbulb },
  { label: 'DESIGN', icon: PenTool },
  { label: 'FRONTEND', icon: Monitor },
  { label: 'AI', icon: Sparkles },
  { label: 'BACKEND', icon: Server },
  { label: 'DATABASE', icon: Database },
  { label: 'DEPLOYED', icon: Rocket },
];

const floatingIcons = [
  { icon: Monitor, label: 'Web', className: 'top-[8%] left-[6%]', delay: '0s' },
  { icon: Sparkles, label: 'AI', className: 'top-[14%] right-[8%]', delay: '1s' },
  { icon: Server, label: 'Backend', className: 'bottom-[18%] left-[4%]', delay: '2s' },
  { icon: Database, label: 'Database', className: 'bottom-[10%] right-[6%]', delay: '0.5s' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/95 to-ink-950" />
      <div className="pointer-events-none absolute -top-[20%] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent-700/8 blur-[100px]" />

      {/* Floating icons */}
      {floatingIcons.map((item) => (
        <div
          key={item.label}
          className={`pointer-events-none absolute hidden md:block ${item.className}`}
        >
          <div
            className="flex items-center gap-2 rounded-full border border-ink-700/60 bg-ink-900/40 px-3.5 py-2 backdrop-blur-sm animate-float"
            style={{ animationDelay: item.delay }}
          >
            <item.icon className="h-4 w-4 text-accent-400/70" />
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-ink-400">
              {item.label}
            </span>
          </div>
        </div>
      ))}

      <div className="container-px mx-auto w-full max-w-8xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: text */}
          <div className="lg:col-span-7">
            {/* Status indicator */}
            <div className="flex items-center gap-2.5 opacity-0-init animate-fade-in-down">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-500" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-500" />
              </span>
              <span className="text-xs font-medium tracking-wide text-ink-300">
                Available for freelance projects
              </span>
            </div>

            {/* Eyebrow */}
            <div className="mt-6 opacity-0-init animate-fade-in-down animation-delay-100">
              <span className="eyebrow">Full-Stack Web & AI Developer</span>
            </div>

            {/* Headline */}
            <h1 className="mt-5 heading-xl text-balance opacity-0-init animate-fade-in-up animation-delay-200">
              I build digital products from{' '}
              <span className="gradient-text">idea to reality.</span>
            </h1>

            {/* Supporting text */}
            <p className="mt-6 max-w-xl body-lg opacity-0-init animate-fade-in-up animation-delay-300">
              I design and develop modern web applications, AI-powered products,
              mobile apps, and backend systems that are built to solve real
              problems.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-400 opacity-0-init animate-fade-in-up animation-delay-400 sm:text-base">
              From frontend experience to APIs, databases, AI integrations, and
              deployment — I can take a product from concept to working
              application.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 opacity-0-init animate-fade-in-up animation-delay-500">
              <Link to="/#work" className="btn-primary">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/#contact" className="btn-secondary">
                Let's Work Together
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: pipeline visual */}
          <div className="lg:col-span-5">
            <div className="relative opacity-0-init animate-scale-in animation-delay-500">
              <div className="relative rounded-2xl border border-ink-800 bg-ink-900/30 p-6 backdrop-blur-sm sm:p-8">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                    Product Pipeline
                  </span>
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-ink-600" />
                    <span className="h-2 w-2 rounded-full bg-ink-600" />
                    <span className="h-2 w-2 rounded-full bg-accent-500" />
                  </div>
                </div>

                {/* Pipeline */}
                <div className="flex flex-col gap-2">
                  {pipelineSteps.map((step, i) => (
                    <div key={step.label}>
                      <div
                        className="group flex items-center gap-3 rounded-xl border border-ink-800 bg-ink-950/60 px-4 py-3 transition-all duration-300 hover:border-accent-500/40 hover:bg-ink-900/60"
                        style={{
                          animation: `fadeInUp 0.5s ease-out ${600 + i * 120}ms forwards`,
                          opacity: 0,
                        }}
                      >
                        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-ink-800/80 text-accent-400 transition-colors group-hover:bg-accent-500/10">
                          <step.icon className="h-4.5 w-4.5" />
                        </span>
                        <span className="font-mono text-sm font-medium tracking-wider text-ink-200">
                          {step.label}
                        </span>
                        <span className="ml-auto font-mono text-xs text-ink-600">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      {i < pipelineSteps.length - 1 && (
                        <div className="flex justify-center py-0.5">
                          <div className="h-3 w-px bg-gradient-to-b from-ink-700 to-ink-800" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow */}
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-accent-500/5 blur-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 hidden justify-center md:flex">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-500">
              Scroll
            </span>
            <div className="flex h-9 w-5.5 items-start justify-center rounded-full border border-ink-700 p-1.5">
              <div className="h-1.5 w-1 rounded-full bg-ink-500 animate-scroll-hint" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
