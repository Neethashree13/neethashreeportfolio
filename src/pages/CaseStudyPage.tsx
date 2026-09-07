import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Monitor,
  Server,
  Database,
  Smartphone,
  Sparkles,
  Globe,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { getProject, getAdjacentProjects } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ProjectPreview from '@/components/ProjectPreview';

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  useScrollReveal();

  useEffect(() => {
    if (project) {
      document.title = `${project.name} — Neethashree R S`;
    }
    return () => {
      document.title = 'Neethashree R S — Full-Stack Web & AI Developer';
    };
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article className="pt-16 md:pt-20">
      {/* Sticky sub-nav */}
      <div className="sticky top-16 z-40 border-b border-ink-800/60 bg-ink-950/80 backdrop-blur-xl md:top-20">
        <div className="container-px mx-auto flex max-w-8xl items-center justify-between py-3">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-300 transition-colors hover:text-ink-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            <span className="font-mono text-xs text-ink-500">
              {project.number}
            </span>
            <ChevronRight className="h-3 w-3 text-ink-600" />
            <span className="text-sm font-medium text-ink-200">
              {project.name}
            </span>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 transition-colors hover:text-accent-300"
            >
              Visit Live
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-ink-900 py-16 md:py-24">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="pointer-events-none absolute -top-1/3 right-0 h-[400px] w-[500px] rounded-full bg-accent-500/8 blur-[120px]" />
        <div className="container-px mx-auto max-w-8xl relative">
          <div className="reveal">
            <span className="font-mono text-sm font-medium text-accent-400">
              Project {project.number}
            </span>
            <h1 className="mt-3 heading-xl text-balance">{project.name}</h1>
            {project.subtitle && (
              <p className="mt-2 text-lg font-medium text-ink-300">
                {project.subtitle}
              </p>
            )}
            <p className="mt-3 font-mono text-xs uppercase tracking-wider text-accent-400/80">
              {project.category}
            </p>
            <p className="mt-6 max-w-3xl body-lg">{project.description}</p>
            {project.statement && (
              <p className="mt-4 max-w-3xl border-l-2 border-accent-500/40 pl-4 text-base italic leading-relaxed text-ink-400">
                {project.statement}
              </p>
            )}

            {/* Meta */}
            <div className="mt-8 flex flex-wrap gap-6 border-t border-ink-800 pt-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-500">
                  Role
                </p>
                <p className="mt-1 text-sm font-medium text-ink-200">
                  {project.caseStudy.role}
                </p>
              </div>
              {project.status && (
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-500">
                    Status
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink-200">
                    {project.status}
                  </p>
                </div>
              )}
              {project.liveUrl && (
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-500">
                    Website
                  </p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent-400 hover:text-accent-300"
                  >
                    {project.liveUrl.replace('https://', '')}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Preview visual */}
      <div className="border-b border-ink-900 py-12 md:py-16">
        <div className="container-px mx-auto max-w-8xl">
          <div className="reveal overflow-hidden rounded-2xl border border-ink-800">
            <div className="aspect-[16/9]">
              <ProjectPreview slug={project.slug} name={project.name} />
            </div>
          </div>
        </div>
      </div>

      {/* Case study sections */}
      <div className="container-px mx-auto max-w-8xl py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky section nav (desktop) */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-32">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                Contents
              </p>
              <nav className="flex flex-col gap-1">
                {project.caseStudy.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="rounded-lg px-3 py-2 text-sm text-ink-400 transition-colors hover:bg-ink-800/40 hover:text-ink-100"
                  >
                    {section.number && (
                      <span className="mr-2 font-mono text-xs text-accent-400/60">
                        {section.number}
                      </span>
                    )}
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <div className="lg:col-span-9">
            <div className="flex flex-col gap-16 md:gap-20">
              {project.caseStudy.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="reveal scroll-mt-32"
                >
                  <div className="flex items-center gap-3">
                    {section.number && (
                      <span className="font-mono text-sm font-medium text-accent-400">
                        {section.number}
                      </span>
                    )}
                    <span className="h-px flex-1 bg-ink-800" />
                  </div>
                  <h2 className="mt-4 heading-md text-balance">
                    {section.title}
                  </h2>
                  <p className="mt-4 max-w-2xl body-lg">{section.content}</p>

                  {/* Bullets */}
                  {section.bullets && (
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 rounded-lg border border-ink-800 bg-ink-900/30 px-4 py-3"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                          <span className="text-sm text-ink-300">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Architecture visual */}
                  {section.visualType === 'architecture' &&
                    section.architecture && (
                      <ArchitectureDiagram steps={section.architecture} />
                    )}

                  {/* Pipeline visual */}
                  {section.visualType === 'pipeline' &&
                    section.architecture && (
                      <PipelineDiagram steps={section.architecture} />
                    )}

                  {/* Timeline visual */}
                  {section.visualType === 'timeline' &&
                    section.architecture && (
                      <TimelineDiagram steps={section.architecture} />
                    )}

                  {/* Flow visual */}
                  {section.visualType === 'flow' && section.architecture && (
                    <FlowDiagram steps={section.architecture} />
                  )}

                  {/* UI grid visual */}
                  {section.visualType === 'ui-grid' && (
                    <UIGridPlaceholder projectSlug={project.slug} />
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-ink-900 py-16 md:py-20">
        <div className="container-px mx-auto max-w-8xl">
          <div className="reveal flex flex-col items-center justify-between gap-6 rounded-3xl border border-ink-800 bg-ink-900/30 px-6 py-12 text-center sm:px-12 md:flex-row md:text-left">
            <div>
              <h2 className="heading-sm">
                {project.liveUrl
                  ? 'Want to see it in action?'
                  : 'Interested in something like this?'}
              </h2>
              <p className="mt-2 text-sm text-ink-400 sm:text-base">
                {project.liveUrl
                  ? 'Visit the live website to try it yourself.'
                  : "Let's talk about your project."}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit Live Website
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              <Link to="/#contact" className="btn-secondary">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      <div className="border-t border-ink-900">
        <div className="container-px mx-auto max-w-8xl">
          <div className="grid gap-px sm:grid-cols-2">
            {prev ? (
              <Link
                to={`/work/${prev.slug}`}
                className="group flex items-center gap-4 border-r border-ink-800 p-6 transition-colors hover:bg-ink-900/30 sm:p-8"
              >
                <ArrowLeft className="h-5 w-5 text-ink-500 transition-colors group-hover:text-accent-400" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-500">
                    Previous Project
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-ink-100 transition-colors group-hover:text-ink-50">
                    {prev.name}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="hidden p-8 sm:block" />
            )}
            {next && (
              <Link
                to={`/work/${next.slug}`}
                className="group flex items-center justify-end gap-4 p-6 text-right transition-colors hover:bg-ink-900/30 sm:p-8"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-500">
                    Next Project
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-ink-100 transition-colors group-hover:text-ink-50">
                    {next.name}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-ink-500 transition-colors group-hover:text-accent-400" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- Visual diagrams ---------- */

function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="mt-8 rounded-2xl border border-ink-800 bg-ink-900/30 p-6 sm:p-8">
      <div className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <div key={step}>
            <div className="flex items-center gap-3 rounded-xl border border-ink-800 bg-ink-950/60 px-4 py-3">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-ink-800 font-mono text-xs text-accent-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-sm font-medium text-ink-200">
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-0.5">
                <div className="h-4 w-px bg-gradient-to-b from-ink-700 to-ink-800" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PipelineDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="mt-8 rounded-2xl border border-ink-800 bg-ink-900/30 p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-lg border border-ink-700 bg-ink-800/50 px-3 py-2 font-mono text-xs font-medium text-ink-200">
              {step}
            </span>
            {i < steps.length - 1 && (
              <ChevronRight className="h-4 w-4 text-accent-400/60" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="mt-8 rounded-2xl border border-ink-800 bg-ink-900/30 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step} className="relative flex flex-col items-center text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-500/40 bg-ink-900 font-display text-lg font-bold text-accent-400">
              {i + 1}
            </span>
            <span className="mt-3 text-sm font-medium text-ink-200">{step}</span>
            {i < steps.length - 1 && (
              <div className="absolute top-6 left-[60%] hidden h-px w-full bg-gradient-to-r from-accent-500/30 to-transparent sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowDiagram({ steps }: { steps: string[] }) {
  const icons = [Globe, Monitor, Server, Database, Smartphone, Sparkles, Layers];
  return (
    <div className="mt-8 rounded-2xl border border-ink-800 bg-ink-900/30 p-6 sm:p-8">
      <div className="flex flex-col gap-2">
        {steps.map((step, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={step}>
              <div className="flex items-center gap-3 rounded-xl border border-ink-800 bg-ink-950/60 px-4 py-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-ink-800 text-accent-400">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="font-mono text-sm font-medium text-ink-200">
                  {step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <div className="h-3 w-px bg-gradient-to-b from-ink-700 to-ink-800" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function UIGridPlaceholder({ projectSlug }: { projectSlug: string }) {
  const screens =
    projectSlug === 'flashcart-ai'
      ? ['Home', 'Search', 'Cart', 'Checkout', 'Wallet', 'Tracking', 'AI Assistant', 'Orders']
      : projectSlug === 'comicverse-ai'
      ? ['Story', 'Characters', 'Scenes', 'Panels', 'Bubbles', 'Narration', 'Video', 'Export']
      : ['Unscrambler', 'Word Finder', 'Anagrams', 'Results', 'Filters', 'Definitions', 'History', 'FAQ'];

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {screens.map((screen, i) => (
        <div
          key={screen}
          className="relative aspect-[4/3] overflow-hidden rounded-xl border border-ink-800 bg-ink-900/40"
          style={{
            animation: `fadeInUp 0.4s ease-out ${i * 60}ms forwards`,
            opacity: 0,
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <Monitor className="h-6 w-6 text-ink-600" />
            <span className="font-mono text-xs text-ink-500">{screen}</span>
          </div>
          <div className="absolute bottom-2 left-2 font-mono text-[10px] text-ink-600">
            Screenshot
          </div>
        </div>
      ))}
    </div>
  );
}
