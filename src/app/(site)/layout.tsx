import { Suspense } from "react";
import { SuspenseFallback } from "@/components/ui/suspense-fallback";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-dvh bg-background pt-28 pb-20">
          <div className="max-w-[1400px] mx-auto px-6">
            <SuspenseFallback className="w-full h-[500px] rounded-[30px]" />
          </div>
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
