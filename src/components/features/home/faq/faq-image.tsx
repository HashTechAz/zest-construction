import Image from "next/image";

export function FaqImage() {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[750px] rounded-2xl overflow-hidden">
      <Image
        src="/images/home/faq-illustration.png" 
        alt="Construction FAQ"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain object-center"
      />
    </div>
  );
}