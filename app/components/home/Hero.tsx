import Image from "next/image";
import { RefObject} from "react";

type HeroProps = {
  heroRef: RefObject<HTMLDivElement | null>;
};

export default function Hero({ heroRef }: HeroProps) {
  return (
<div ref={heroRef} className="relative h-screen w-full">
  <Image
    src="/images/product/Hero.png"
    alt="Hero image"
    fill
    priority
    loading="eager"
    className="object-cover hero-image-reveal"
  />

  {/* Heading */}
  <div className="absolute inset-0 flex items-center lg:items-end pb-0 lg:pb-8 justify-center lg:justify-start container mx-auto px-6 md:px-8 lg:px-10">
    <div className="max-w-xl text-5xl md:text-6xl lg:text-7xl text-center lg:text-left">
      <p className="font-secondary tracking-tight leading-[1.13] slide-up text-white">
        Accessories That Define{" "}
        <span className="italic font-primary">
          Signature Style.
        </span>
      </p>
    </div>
  </div>

  {/* Bottom Content */}
  <div className="absolute bottom-8 left-0 right-0 container mx-auto px-6 md:px-8 lg:px-10">
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 text-neutral-200">
      <div />

      <div className="flex flex-col gap-6 max-w-md font-secondary slide-up text-center lg:text-left">
        <p className="text-[18px]">
          Discover accessories crafted to endure, uniting classic elegance with
          modern flair.
        </p>

        <button className="group relative overflow-hidden px-6 py-3 uppercase bg-white">
          <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />

          <span className="relative block transition-all duration-500 group-hover:-translate-y-4 group-hover:opacity-0 text-black">
            Shop Now
          </span>

          <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 translate-y-4 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Explore Collection
          </span>
        </button>
      </div>
    </div>
  </div>
</div>
  );
}