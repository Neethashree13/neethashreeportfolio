import {
  Globe,
  Layers,
  Sparkles,
  Plug,
  Smartphone,
  Server,
  Database,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  Sparkles,
  Plug,
  Smartphone,
  Server,
  Database,
  RefreshCw,
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative border-t border-ink-900">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container-px mx-auto max-w-8xl relative">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">Services</span>
          <h2 className="mt-4 heading-lg text-balance">
            What I can build for you.
          </h2>
          <p className="mt-4 body-lg">
            From a landing page to a complete AI-powered product, I can work
            across the stack.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <div
                key={service.number}
                className="reveal group relative flex flex-col rounded-2xl border border-ink-800 bg-ink-900/30 p-6 transition-all duration-500 hover:border-accent-500/30 hover:bg-ink-900/60"
                data-reveal-delay={i * 60}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-800/50 text-accent-400 transition-all duration-300 group-hover:border-accent-500/40 group-hover:bg-accent-500/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-ink-600">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-ink-50">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                  {service.description}
                </p>

                {service.items && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-ink-800/60 px-2 py-1 font-mono text-[11px] text-ink-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
