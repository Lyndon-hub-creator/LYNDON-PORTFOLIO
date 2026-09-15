import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import type { WorkCategory } from '@/components/workData';

interface WorkGalleryProps {
  category: WorkCategory | null;
  onClose: () => void;
}

export default function WorkGallery({ category, onClose }: WorkGalleryProps) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % (category?.gallery.length ?? 1)),
    [category]
  );
  const prev = useCallback(
    () =>
      setIndex(
        (i) => (i - 1 + (category?.gallery.length ?? 1)) % (category?.gallery.length ?? 1)
      ),
    [category]
  );

  useEffect(() => {
    setIndex(0);
    if (category) {
      setRevealed(false);
      const t = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(t);
    }
  }, [category]);

  useEffect(() => {
    if (!category) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [category, onClose, next, prev]);

  if (!category) return null;

  const item = category.gallery[index];

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/95 backdrop-blur-md transition-opacity duration-300 ${
        revealed ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ink-800/80 text-cream-100 transition-all hover:bg-coral-500 hover:text-ink-900"
        aria-label="Close gallery"
      >
        <X size={22} />
      </button>

      {/* Content */}
      <div
        className={`relative mx-auto w-full px-4 sm:px-6 transition-all duration-500 ease-out ${
          category.ratio === 'square'
            ? 'max-w-lg'
            : 'max-w-md sm:max-w-lg'
        } ${revealed ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-coral-400">
            {category.mediaType === 'video' ? 'Video Reel' : 'Gallery'}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold text-cream-50 sm:text-3xl">
            {category.title}
          </h3>
        </div>

        {/* Main viewer */}
        <div className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-800">
          <div className={`relative ${category.ratio === 'square' ? 'aspect-square' : 'aspect-[9/16]'}`}>
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.caption}
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                key={item.src}
                src={item.src}
                poster={item.poster}
                controls
                autoPlay
                className="h-full w-full object-cover"
              />
            )}
            {item.type === 'video' && (
              <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-ink-900/80 px-3 py-1.5 text-xs font-medium text-coral-400 backdrop-blur-sm">
                <Play size={12} fill="currentColor" /> Playing
              </div>
            )}
          </div>

          {/* Navigation arrows */}
          {category.gallery.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-ink-900/80 text-cream-100 backdrop-blur-sm transition-all hover:bg-coral-500 hover:text-ink-900"
                aria-label="Previous"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-ink-900/80 text-cream-100 backdrop-blur-sm transition-all hover:bg-coral-500 hover:text-ink-900"
                aria-label="Next"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Caption + counter */}
        <div className="mt-4 flex items-center justify-between px-1">
          <p className="text-sm text-cream-200/70">{item.caption}</p>
          <p className="text-sm font-medium text-cream-200/50">
            {index + 1} / {category.gallery.length}
          </p>
        </div>

        {/* Thumbnails */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {category.gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                i === index
                  ? 'border-coral-500 opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-90'
              }`}
            >
              <div className={category.ratio === 'square' ? 'h-14 w-14 sm:h-16 sm:w-16' : 'h-16 w-11 sm:h-20 sm:w-14'}>
                <img
                  src={g.type === 'image' ? g.src : g.poster}
                  alt={g.caption}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {g.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-ink-900/40">
                    <Play size={16} className="text-cream-50" fill="currentColor" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
