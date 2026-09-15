import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollNext = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      data-section
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-coral-600/20 blur-3xl animate-pulse-slow" />
        <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-coral-400/10 blur-3xl animate-pulse-slow" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800/60 px-4 py-2 text-xs font-medium tracking-wide text-cream-200/80 opacity-0 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral-500" />
            </span>
            AVAILABLE FOR WORK
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-cream-50 text-balance opacity-0 animate-fade-up sm:text-6xl lg:text-7xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-coral-400 to-coral-600 bg-clip-text text-transparent">
              Lyndon Opalla
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream-200/70 opacity-0 animate-fade-up sm:text-xl"
            style={{ animationDelay: '0.15s' }}
          >
            A creative designer, content creator visuals,
            social media management, and creative short-form videos that get
            people to stop, look, and stay.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group rounded-full bg-coral-500 px-7 py-3.5 text-sm font-semibold text-ink-900 transition-all duration-300 hover:bg-coral-400 hover:shadow-xl hover:shadow-coral-500/30"
            >
              Work with me
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('work')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="rounded-full border border-ink-500 px-7 py-3.5 text-sm font-semibold text-cream-100 transition-all duration-300 hover:border-cream-200/50 hover:bg-ink-800/50"
            >
              View my work
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-200/40 transition-colors hover:text-coral-400"
        aria-label="Scroll down"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </button>
    </section>
  );
}
