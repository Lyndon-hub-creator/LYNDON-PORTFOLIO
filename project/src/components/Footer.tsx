export default function Footer() {
  return (
    <footer className="border-t border-ink-700/50 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <p className="font-display text-sm font-bold text-cream-100">
          <span className="text-coral-500">.</span>portfolio
        </p>
        <p className="text-xs text-cream-200/40">
          &copy; {new Date().getFullYear()} Lyndon Opalla. Designed & built with
          care.
        </p>
      </div>
    </footer>
  );
}
