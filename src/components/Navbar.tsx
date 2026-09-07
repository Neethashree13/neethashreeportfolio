import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/#home' },
  { label: 'Work', to: '/#work' },
  { label: 'Services', to: '/#services' },
  { label: 'About', to: '/#about' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Process', to: '/#process' },
  { label: 'Contact', to: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (to: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/' && to.includes('#')) {
      return;
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink-800/80 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto flex h-16 max-w-8xl items-center justify-between md:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5"
          aria-label="Neethashree R S — Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-900 font-display text-sm font-bold text-accent-400 transition-all duration-300 group-hover:border-accent-500 group-hover:text-accent-300">
            N
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-ink-50 md:text-base">
            NEETHASHREE R S
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-300 transition-all duration-300 hover:bg-ink-800/50 hover:text-ink-50"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link to="/#contact" className="hidden btn-primary md:inline-flex">
            Let's Work Together
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 bg-ink-900/60 text-ink-200 transition-colors hover:border-ink-500 hover:text-ink-50 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink-800/60 bg-ink-950/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-px flex flex-col gap-1 py-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink-200 transition-all duration-300 hover:bg-ink-800/50 hover:text-ink-50"
              style={{
                animation: mobileOpen ? `fadeInUp 0.4s ease-out ${i * 60}ms forwards` : undefined,
                opacity: mobileOpen ? 0 : 1,
              }}
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 text-ink-500" />
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            Let's Work Together
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
