import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#0c1018] flex flex-col items-center justify-center px-4 text-center">
      <div className="relative w-40 h-40 mb-6">
        <Image 
          src="/images/global/logo.png" 
          alt="Zest Construction Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-[#F8F8F8] tracking-tight">
        Welcome to Zest development
      </h1>
      <p className="mt-4 text-lg md:text-xl text-[#BFBFBF] font-light italic">
        Building Dreams, One Brick at a Time
      </p>
    </main>
  );
}