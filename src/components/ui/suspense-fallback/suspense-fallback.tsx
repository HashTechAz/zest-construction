interface SuspenseFallbackProps {
  className?: string;
}

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
