import { Facebook, Instagram, Mail, MessageCircle, ArrowRight } from 'lucide-react';

const socials = [
  {
    name: 'Facebook',
    handle: 'Lyndon Opalla',
    href: 'https://www.facebook.com/lyndonskie.opallaskie',
    icon: Facebook,
    color: '#1877f2',
  },
  {
    name: 'Instagram',
    handle: '@lyndyy07',
    href: 'https://instagram.com/lyndyy07',
    icon: Instagram,
    color: '#e1306c',
  },
  {
    name: 'Gmail',
    handle: 'Lyndonopalla0@gmail.com',
    href: ' ',
    icon: Mail,
    color: '#ea4335',
  },
  {
    name: 'WhatsApp',
    handle: '+63 991 376 3461',
    href: 'https://wa.me/639913763461',
    icon: MessageCircle,
    color: '#25d366',
  },
];

export default function CallToAction() {
  return (
    <section
      id="contact"
      data-section
      className="relative overflow-hidden border-t border-ink-700/50 bg-ink-800/30 py-28 sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-coral-600/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-coral-400">
          Let's Work Together
        </p>
        <h2 className="font-display text-4xl font-bold leading-tight text-cream-50 sm:text-5xl lg:text-6xl text-balance">
          Got a project in mind?
          <br />
          <span className="text-coral-500">Let's make it happen.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream-200/70">
          Whether you need a full brand refresh, a single reel, or someone to
          take your socials off your plate — I'd love to hear about it. Reach
          out on any platform below.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ink-700/60 bg-ink-800/50 p-5 text-left transition-all duration-300 hover:border-coral-500/40 hover:bg-ink-800/80"
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${s.color}1a`, color: s.color }}
                >
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <p className="font-display font-semibold text-cream-50">
                    {s.name}
                  </p>
                  <p className="text-sm text-cream-200/55">{s.handle}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-cream-200/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-coral-400"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
