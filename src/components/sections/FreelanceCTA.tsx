import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function FreelanceCTA() {
  return (
    <section className="section-padding relative border-t border-ink-900">
      <div className="container-px mx-auto max-w-8xl">
        <div className="reveal relative overflow-hidden rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-900/60 to-ink-950 px-6 py-16 text-center sm:px-12 md:py-24">
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />
          <div className="pointer-events-none absolute -top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[100px]" />

          <div className="relative">
            <h2 className="heading-lg text-balance mx-auto max-w-3xl">
              Have an idea you want to build?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl body-lg">
              Tell me what you're trying to create. Whether it's a website, web
              application, mobile app or AI-powered product, let's turn the idea
              into something real.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/#contact" className="btn-primary">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/#work" className="btn-secondary">
                View My Work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
