import { Sparkles, Coffee, MapPin } from 'lucide-react';

export default function About() {
  const tags = ['Designer', 'Editor', 'Creator', 'Storyteller'];

  return (
    <section
      id="about"
      data-section
      className="relative py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Visual side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-800 to-ink-700">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 20%, #f95d33 0%, transparent 50%), radial-gradient(circle at 70% 80%, #e8471c 0%, transparent 50%)',
                }}
              />
              {/* Profile photo */}
              <img
                src="Poolside_portrait_in_the_evening_light.jpg"
                alt="Profile photo"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
                loading="lazy"
              />
              {/* Gradient overlay at bottom for tag readability */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-900 via-ink-900/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex flex-wrap justify-center gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink-600 bg-ink-800/60 px-3 py-1 text-xs font-medium text-cream-200/90 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-ink-600 bg-ink-800/90 p-5 shadow-xl backdrop-blur-sm sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral-500/15 text-coral-400">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-cream-50">
                    
                  </p>
                  <p className="text-xs text-cream-200/60"> </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-coral-400">
              About Me
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-cream-50 sm:text-5xl">
              Turning ideas into visuals that{' '}
              <span className="text-coral-500">stick</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream-200/70">
              I'm a multidisciplinary creative based in the Philippines with a
              love for clean design, punchy edits, and content that actually
              performs. Whether it's a website that needs to look effortless, a
              social feed that needs a personality, or a 30-second clip that
              needs to hook in the first second — I've got it covered.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cream-200/70">
              My approach is simple: understand the brand, keep it real, and
              make every pixel and every frame earn its place.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-cream-200/60">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-coral-400" /> Davao, PH
              </span>
              <span className="flex items-center gap-2">
                <Coffee size={16} className="text-coral-400" /> Fueled by Work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
