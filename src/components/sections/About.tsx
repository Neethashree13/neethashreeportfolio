import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding relative border-t border-ink-900">
      <div className="container-px mx-auto max-w-8xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: label */}
          <div className="lg:col-span-4">
            <div className="reveal sticky top-28">
              <span className="eyebrow">About</span>
              <h2 className="mt-4 heading-md text-balance">
                Hi, I'm Neethashree.
              </h2>
            </div>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-8">
            <div className="reveal space-y-6">
              <p className="text-lg leading-relaxed text-ink-200 sm:text-xl">
                I'm a Full-Stack Web & AI Developer who enjoys turning ideas
                into useful digital products. I work across modern web
                applications, AI-powered experiences, mobile apps, APIs, and
                databases.
              </p>
              <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
                I enjoy building products where frontend experience, backend
                logic and AI capabilities work together as one system. My
                projects range from high-performance web tools like{' '}
                <Link
                  to="/work/cluevra"
                  className="font-medium text-accent-400 underline decoration-accent-500/30 underline-offset-4 transition-colors hover:text-accent-300"
                >
                  Cluevra
                </Link>{' '}
                to creative AI platforms and mobile commerce applications.
              </p>
              <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
                I'm particularly interested in working with founders, startups,
                small businesses and individuals who have an idea that needs to
                become a real product.
              </p>

              {/* Quick facts */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { label: 'Focus', value: 'Full-Stack + AI' },
                  { label: 'Web', value: 'React · TypeScript' },
                  { label: 'Mobile', value: 'Flutter · Dart' },
                  { label: 'AI', value: 'Gemini · AI APIs' },
                  { label: 'Backend', value: 'Node.js · PostgreSQL' },
                  { label: 'Availability', value: 'Freelance Projects' },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-ink-800 bg-ink-900/30 p-4"
                  >
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-500">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink-200">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/#contact" className="btn-primary">
                  Let's Work Together
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
