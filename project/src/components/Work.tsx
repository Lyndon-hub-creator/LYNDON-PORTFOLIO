import { useState } from 'react';
import { ArrowUpRight, Play, ImageIcon } from 'lucide-react';
import WorkGallery from '@/components/WorkGallery';
import { categories, type WorkCategory } from '@/components/workData';

export default function Work() {
  const [active, setActive] = useState<WorkCategory | null>(null);

  return (
    <section id="work" data-section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-coral-400">
            My Work
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-cream-50 sm:text-5xl text-balance">
            What I bring to the table
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-cream-200/55">
            Click any card to explore the full gallery — photos for design work,
            playable videos for short-form edits.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((p) => (
            <button
              key={p.title}
              onClick={() => setActive(p)}
              className="group relative overflow-hidden rounded-3xl border border-ink-700/60 bg-ink-800/40 text-left transition-all duration-500 hover:border-coral-500/40 hover:shadow-2xl hover:shadow-coral-900/20"
            >
              <div className={`relative overflow-hidden ${p.ratio === 'square' ? 'aspect-square' : 'aspect-[9/16]'}`}>
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink-900/80 text-coral-400 backdrop-blur-sm transition-all duration-300 group-hover:bg-coral-500 group-hover:text-ink-900">
                  <ArrowUpRight size={18} />
                </div>
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-ink-900/80 px-3 py-1.5 text-xs font-medium text-cream-100 backdrop-blur-sm">
                  {p.mediaType === 'video' ? (
                    <>
                      <Play size={11} fill="currentColor" className="text-coral-400" />
                      <span className="text-coral-400">{p.gallery.length} videos</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon size={11} className="text-coral-400" />
                      <span className="text-coral-400">{p.gallery.length} photos</span>
                    </>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-cream-50">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-200/65">
                  {p.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink-600 bg-ink-700/40 px-3 py-1 text-xs font-medium text-cream-200/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-coral-400 transition-all duration-300 group-hover:gap-2.5">
                  View {p.mediaType === 'video' ? 'videos' : 'gallery'}
                  <ArrowUpRight size={15} />
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <WorkGallery category={active} onClose={() => setActive(null)} />
    </section>
  );
}
