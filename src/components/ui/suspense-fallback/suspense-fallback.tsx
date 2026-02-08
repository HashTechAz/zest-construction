interface SuspenseFallbackProps {
  /** Optional custom height (e.g. "500px", "h-[400px]") */
  className?: string;
}

/**
 * Ortak Suspense / next/dynamic fallback.
 * Lazy yüklenen component'ler için tek yerde fallback UI.
 */
export function SuspenseFallback({ className }: SuspenseFallbackProps) {
  return (
    <div
      className={
        className ??
        "w-full h-[400px] rounded-[30px] bg-slate-100 dark:bg-[#161B22] animate-pulse"
      }
      aria-hidden
    />
  );
}
