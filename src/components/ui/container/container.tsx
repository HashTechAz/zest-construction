
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className, id }: ContainerProps) {
  return (
    <div 
      id={id}
      className={cn(
        "mx-auto w-full max-w-[1400px] px-4 md:px-6",
        className
      )}
    >
      {children}
    </div>
  );
}