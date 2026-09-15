import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-900/85 backdrop-blur-xl border-b border-ink-700/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <button
          onClick={() => handleClick('home')}
          className="font-display text-xl font-bold tracking-tight text-cream-50"
        >
          <span className="text-coral-500">.</span>portfolio
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? 'text-coral-400'
                  : 'text-cream-200/70 hover:text-cream-50'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute inset-0 -z-10 rounded-full bg-coral-500/10" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleClick('contact')}
          className="hidden rounded-full bg-coral-500 px-5 py-2 text-sm font-semibold text-ink-900 transition-all duration-300 hover:bg-coral-400 hover:shadow-lg hover:shadow-coral-500/30 md:block"
        >
          Let's talk
        </button>

        <button
          className="text-cream-100 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-ink-700/60 bg-ink-900/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-coral-500/10 text-coral-400'
                    : 'text-cream-200/80 hover:bg-ink-700/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
