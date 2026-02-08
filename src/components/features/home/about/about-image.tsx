import Image from "next/image";

export function AboutImage() {
  return (
    <div className="relative w-full flex justify-center lg:justify-start">
      <div className="relative w-full max-w-[600px] aspect-square"> 
        <Image
          src="/images/home/about-collage.png" 
          alt="About Zest Construction"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-contain"
        />
      </div>
    </div>
  );
}