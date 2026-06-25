"use client";
import Image from "next/image";

export default function HeroSection(){
    return (
        <div className="relative h-screen w-full overflow-hidden">
          {/* Background image */}
          <Image
            src="/images/about/hero-bg.webp"
            alt="Background Image"
            fill
            loading="eager"
            className="object-cover hero-image-reveal"
          />

          {/* Blur overlay */}
          <div className="absolute inset-0 backdrop-blur-5xl bg-black/30 z-10" />

          {/* Content */}
          <div className="relative z-20 flex h-full items-center justify-center container mx-auto px-6 md:px-8 lg:px-10">
            <div className="max-w-2xl text-5xl md:text-6xl lg:text-7xl text-center">
              <p className="font-secondary tracking-tight leading-[1.13] slide-up text-white [mask-image:linear-gradient(to_right,rgb(0_0_0_/_0.5)_0%,black_90%,black_100%)]">
                Unveiling the Artistry Behind{" "}
                <span className="italic font-primary">
                  Signature Style.
                </span>
              </p>
            </div>
          </div>
        </div>
    )
}