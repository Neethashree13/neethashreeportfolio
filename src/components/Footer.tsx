import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const footerNav = [
  { label: 'Work', to: '/#work' },
  { label: 'Services', to: '/#services' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="container-px mx-auto max-w-8xl">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-900 font-display text-sm font-bold text-accent-400">
                N
              </span>
              <span className="font-display text-base font-semibold tracking-tight text-ink-50">
                NEETHASHREE R S
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              Full-Stack Web & AI Developer. Building web, AI and mobile products from idea to reality.
            </p>
            <a
              href="mailto:neethashree13@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink-300 transition-colors hover:text-accent-400"
            >
              <Mail className="h-4 w-4" />
              neethashree13@gmail.com
            </a>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-ink-500">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-300 transition-colors hover:text-ink-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-ink-500">
              Connect
            </h3>
            <div className="mt-4 flex gap-3">
              {[
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Twitter, label: 'X/Twitter', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 bg-ink-900/60 text-ink-400 transition-all duration-300 hover:border-accent-500 hover:text-accent-400"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
            <Link
              to="/#contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 transition-colors hover:text-ink-50"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink-800 py-8 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Neethashree R S. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
