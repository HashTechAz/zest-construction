export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 space-y-8">
        <div className="w-full h-[500px] bg-slate-100 dark:bg-[#161B22] rounded-[30px] animate-pulse" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <div className="h-[400px] bg-slate-100 dark:bg-[#161B22] rounded-[30px] animate-pulse" />
           <div className="space-y-4">
              <div className="h-10 w-1/2 bg-slate-100 dark:bg-[#161B22] rounded-lg animate-pulse" />
              <div className="h-6 w-full bg-slate-100 dark:bg-[#161B22] rounded-lg animate-pulse" />
              <div className="h-6 w-3/4 bg-slate-100 dark:bg-[#161B22] rounded-lg animate-pulse" />
           </div>
        </div>

      </div>
    </div>
  );
}