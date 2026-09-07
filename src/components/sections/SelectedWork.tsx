import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectPreview from '@/components/ProjectPreview';

export default function SelectedWork() {
  return (
    <section id="work" className="section-padding relative">
      <div className="container-px mx-auto max-w-8xl">
        {/* Heading */}
        <div className="max-w-3xl reveal">
          <span className="eyebrow">Selected Work</span>
          <h2 className="mt-4 heading-lg text-balance">
            Things I've Built
          </h2>
          <p className="mt-4 body-lg">
            Real products and experiments spanning web, AI, mobile, and
            full-stack development.
          </p>
        </div>

        {/* Project cards */}
        <div className="mt-16 flex flex-col gap-8 md:mt-20 lg:gap-12">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className="reveal group relative overflow-hidden rounded-3xl border border-ink-800 bg-ink-900/30 transition-all duration-500 hover:border-ink-600"
              data-reveal-delay={i * 80}
            >
              <div className="grid lg:grid-cols-2">
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-ink-800 lg:border-b-0 lg:border-r">
                  <ProjectPreview slug={project.slug} name={project.name} />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-medium text-accent-400">
                        {project.number}
                      </span>
                      <span className="h-px flex-1 bg-ink-800" />
                    </div>

                    <h3 className="mt-4 heading-sm">{project.name}</h3>
                    {project.subtitle && (
                      <p className="mt-1 text-sm font-medium text-ink-400">
                        {project.subtitle}
                      </p>
                    )}
                    <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent-400/80">
                      {project.category}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-ink-300 sm:text-base">
                      {project.description}
                    </p>

                    {project.statement && (
                      <p className="mt-3 border-l-2 border-accent-500/40 pl-4 text-sm italic leading-relaxed text-ink-400">
                        {project.statement}
                      </p>
                    )}

                    {/* Tech tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.slice(0, 6).map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 6 && (
                        <span className="tag text-ink-500">
                          +{project.tech.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex items-center gap-4">
                    {project.ctaType === 'external' && project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        {project.ctaLabel}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        to={`/work/${project.slug}`}
                        className="btn-primary"
                      >
                        {project.ctaLabel}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                    {project.status && (
                      <span className="text-xs font-medium text-ink-500">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
