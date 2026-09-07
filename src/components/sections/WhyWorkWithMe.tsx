import {
  Layers,
  Sparkles,
  Target,
  FolderGit2,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { whyPoints } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Sparkles,
  Target,
  FolderGit2,
  Workflow,
};

export default function WhyWorkWithMe() {
  return (
    <section className="section-padding relative border-t border-ink-900">
      <div className="container-px mx-auto max-w-8xl">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">Why Work With Me</span>
          <h2 className="mt-4 heading-lg text-balance">
            From frontend to backend, I think about the whole product.
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-5">
          {whyPoints.map((point, i) => {
            const Icon = iconMap[point.icon] ?? Layers;
            return (
              <div
                key={point.number}
                className="reveal group relative flex flex-col bg-ink-950 p-6 transition-all duration-500 hover:bg-ink-900/60"
                data-reveal-delay={i * 60}
              >
                <span className="font-mono text-xs text-accent-400">
                  {point.number}
                </span>
                <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 bg-ink-900 text-accent-400 transition-colors group-hover:border-accent-500/40">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-50">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
