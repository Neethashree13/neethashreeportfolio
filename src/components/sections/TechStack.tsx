import {
  Monitor,
  Server,
  Database,
  Smartphone,
  Sparkles,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { techStack } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Database,
  Smartphone,
  Sparkles,
  Wrench,
};

export default function TechStack() {
  return (
    <section id="skills" className="section-padding relative border-t border-ink-900">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container-px mx-auto max-w-8xl relative">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">Tech Stack</span>
          <h2 className="mt-4 heading-lg text-balance">
            Tools I build with.
          </h2>
          <p className="mt-4 body-lg">
            A modern toolkit spanning frontend, backend, database, mobile, and
            AI.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {techStack.map((category, i) => {
            const Icon = iconMap[category.icon] ?? Monitor;
            return (
              <div
                key={category.category}
                className="reveal rounded-2xl border border-ink-800 bg-ink-900/30 p-6 transition-all duration-500 hover:border-ink-600"
                data-reveal-delay={i * 60}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 bg-ink-800/50 text-accent-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink-50">
                    {category.category}
                  </h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-ink-700 bg-ink-800/40 px-3 py-1.5 text-sm font-medium text-ink-300 transition-colors hover:border-accent-500/30 hover:text-ink-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
