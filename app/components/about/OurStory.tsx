"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const text =
  "At Lustrõ, our journey began with a passion for timeless elegance and uncompromising craftsmanship. Inspired by the rich heritage of European design, we set out to create accessories that transcend trends—pieces that become part of your story.";

export default function OurStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const value = Math.min(
        Math.max((vh - rect.top) / (vh + rect.height), 0),
        1
      );

      setProgress(value);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [rotation, setRotation] = useState(0);

useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const vh = window.innerHeight;

    // section is visible
    const isVisible =
        rect.top < vh * 0.8 &&
        rect.bottom > vh * 0.2;

    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;

    if (isVisible) {
      setRotation((prev) => prev + delta * 0.2);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section
      ref={sectionRef}
      className="container h-auto lg:h-screen w-full flex items-center justify-center relative px-4 py-8 sm:py-10 md:py-15 lg:py-0"
    >
      <div className="flex flex-col max-w-md items-center gap-4 sm:gap-6 md:gap-8">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-secondary tracking-tight leading-[1.13]">
          Our Story
        </p>

        <p className="text-[16px] md:text-[18px] font-secondary leading-[1.5] text-center">
          {words.map((word, index) => {
            const revealPoint = index / words.length;
            const isRevealed = progress > revealPoint;

            return (
              <span
                key={index}
                className={`transition-colors duration-300 ${
                  isRevealed ? "text-neutral-800" : "text-neutral-200"
                }`} 
              >
                {word}{" "}
              </span>
            );
          })}
        </p>
      </div>
      <div className="hidden lg:flex absolute w-full h-full mx-auto max-w-6xl">
        <div
         className="absolute left-8 top-8 h-[300px] w-[220px] transition-transform duration-75"
         style={{
           transform: `
             rotate(${30 * progress - rotation * 0.4}deg)
             translateY(${20 * (1 - progress)}px)
           `,
         }}
        >
          <Image src="/images/about/m1.webp" alt='Mission Image 1' fill className="object-cover" />
        </div>
        <div className={`absolute left-8 bottom-8 h-[300px] w-[220px] transition-transform duration-75`}
            style={{
              transform: `
                rotate(${-30 * progress + rotation * 0.4}deg)
                translateY(${20 * (1 - progress)}px)
              `,
            }}
         >
          <Image src="/images/about/m2.webp" alt='Mission Image 2' fill className="object-cover" />
        </div>
        <div className={`absolute right-8 top-8 h-[300px] w-[220px] transition-transform duration-75`}
         style={{
           transform: `
             rotate(${30 * progress - rotation * 0.4}deg)
             translateY(${20 * (1 - progress)}px)
           `,
         }}
         >
          <Image src="/images/about/m3.webp" alt='Mission Image 3' fill className="object-cover" />
        </div>
        <div className={`absolute right-8 bottom-8 h-[300px] w-[220px] transition-transform duration-75`}
            style={{
              transform: `
                rotate(${-30 * progress + rotation * 0.4}deg)
                translateY(${20 * (1 - progress)}px)
              `,
            }}
         >
          <Image src="/images/about/m4.webp" alt='Mission Image 4' fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}