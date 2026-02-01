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
      <p className=" tracking-tight mt-4 text-lg md:text-xl text-[#BFBFBF] font-light italic">
        welcome to zest development!
      </p>
      <h1 className="text-3xl md:text-3xl font-bold text-[#F8F8F8]">
        This website is under development!
      </h1>
      <h1 className="mt-3 text-3xl md:text-3xl font-bold text-[#F8F8F8] tracking-tight">
        COMING SOON...
      </h1>
    </main>
  );
}