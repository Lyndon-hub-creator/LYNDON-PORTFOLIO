import { Check } from 'lucide-react';
import ToolLogos from '@/components/ToolLogos';

const services = [
  'Social Media Management.',
  'Content Creation',
  'Paid Ads',
  'Website Design',
  'Video Editor',
  'AI Automation',
];

export default function Services() {
  return (
    <section
      id="services"
      data-section
      className="relative border-y border-ink-700/50 bg-ink-800/30 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-coral-400">
            What I Do
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-cream-50 sm:text-5xl text-balance">
            Here's what I can do for you
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <ul className="space-y-5">
            {services.map((s, i) => (
              <li
                key={i}
                className="group flex items-start gap-4 rounded-2xl border border-ink-700/60 bg-ink-800/40 p-5 transition-all duration-300 hover:border-coral-500/40 hover:bg-ink-800/70"
              >
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-coral-500/15 text-coral-400 transition-colors duration-300 group-hover:bg-coral-500 group-hover:text-ink-900">
                  <Check size={16} strokeWidth={3} />
                </span>
                <p className="text-base leading-relaxed text-cream-200/85 sm:text-lg">
                  {s}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-cream-200/40">
            Tools I use every day
          </p>
          <ToolLogos />
        </div>
      </div>
    </section>
  );
}
