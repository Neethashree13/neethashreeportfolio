import {
  Search,
  ClipboardList,
  Code2,
  CheckCircle2,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import { processSteps } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  Search,
  ClipboardList,
  Code2,
  CheckCircle2,
  Rocket,
};

export default function Process() {
  return (
    <section id="process" className="section-padding relative border-t border-ink-900">
      <div className="container-px mx-auto max-w-8xl">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">Work Process</span>
          <h2 className="mt-4 heading-lg text-balance">How I work</h2>
          <p className="mt-4 body-lg">
            A structured approach from understanding your idea to launching a
            working product.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-0">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Search;
            const isLast = i === processSteps.length - 1;
            return (
              <div
                key={step.number}
                className="reveal group relative"
                data-reveal-delay={i * 80}
              >
                <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                  {/* Number + line */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 md:flex-col md:items-start">
                      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-ink-700 bg-ink-900 font-display text-lg font-bold text-accent-400 transition-all duration-300 group-hover:border-accent-500/40 group-hover:bg-accent-500/10">
                        {step.number}
                      </span>
                      {!isLast && (
                        <div className="hidden h-full w-px flex-1 bg-gradient-to-b from-ink-700 to-transparent md:block" />
                      )}
                    </div>
                  </div>

                  {/* Icon + content */}
                  <div className="md:col-span-10 pb-12">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800/60 text-accent-400">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <h3 className="font-display text-xl font-semibold text-ink-50 sm:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
