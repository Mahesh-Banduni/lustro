"use client";

import {
  Flower,
  Diamond,
  ShieldCheck,
  Handshake,
  Star,
} from "lucide-react";

import { useState, useRef } from "react";

const promiseList = [
  {
    icon: Flower,
    title: "Sustainability in Style",
    description:
      "We believe fashion and responsibility go hand in hand. Our design philosophy embraces eco-friendly materials and ethical production that respects both people and the planet.",
  },
  {
    icon: Diamond,
    title: "Customer First, Always",
    description:
      "Every detail — from design to delivery — is guided by the needs of our customers. We’re committed to creating experiences that feel personal, seamless, and genuinely cared for.",
  },
  {
    icon: Handshake,
    title: "After-Sales Excellence",
    description:
      "Our relationship doesn’t end at checkout. From product care to ongoing support, we ensure every customer enjoys lasting satisfaction beyond the first purchase.",
  },
  {
    icon: Star,
    title: "Uncompromising Quality",
    description:
      "Each product reflects meticulous craftsmanship and thoughtful design. We aim for pieces that not only look exceptional but stand the test of time.",
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction, Guaranteed",
    description:
      "Your confidence matters most. We strive to make every interaction transparent, reassuring, and fulfilling — because true luxury is peace of mind.",
  },
];

export default function OurPromiseSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselRef = useRef<HTMLDivElement>(null);

const handleScroll = () => {
  if (!carouselRef.current) return;

  const scrollLeft = carouselRef.current.scrollLeft;
  const cardWidth = carouselRef.current.offsetWidth;

  const index = Math.round(scrollLeft / cardWidth);
  setActiveIndex(index);
};
  return (
    <section className="bg-black py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-between">
          
          {/* Left Content */}
          <div className="lg:sticky lg:top-40 w-full max-w-lg flex flex-col gap-4">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-secondary tracking-tight leading-[1.13] text-white">
              Our Promise to{" "}
              <span className="font-primary italic">
                You and the Planet
              </span>
            </p>

            <p className="text-[16px] md:text-[18px] font-secondary text-neutral-100">
              At Lustro, every creation tells a story — of care, quality, and
              conscious design that puts people and purpose first.
            </p>
          </div>

          {/* Right Cards */}
          {/* Mobile / Tablet Carousel */}
          <div className="lg:hidden w-full">
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            >
              {promiseList.map((item, index) => {
                const Icon = item.icon;
              
                return (
                  <div
                    key={index}
                    className="w-full shrink-0 snap-center px-1"
                  >
                    <div className="bg-neutral-900 p-3.5 sm:p-5 rounded-lg flex flex-col gap-4 sm:gap-6 min-h-[220px]">
                      <Icon className="h-6 sm:h-7 md:h-8 w-6 sm:w-7 md:w-8 text-neutral-50" />
              
                      <div className="flex flex-col gap-2 sm:gap-3">
                        <p className="text-lg md:text-xl font-secondary text-neutral-100">
                          {item.title}
                        </p>
              
                        <p className="text-[16px] md:text-lg font-secondary text-neutral-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {promiseList.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    carouselRef.current?.scrollTo({
                      left: index * carouselRef.current.offsetWidth,
                      behavior: "smooth",
                    });
                  }}
                  className={`h-2 w-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-white w-6"
                      : "bg-neutral-600"
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Desktop Scroll List */}
          <div className="hidden lg:flex w-full max-w-xl h-[600px] overflow-y-auto flex-col gap-8 pr-2 scrollbar-hide">
            {promiseList.map((item, index) => {
              const Icon = item.icon;
          
              return (
                <div
                  key={index}
                  className="bg-neutral-900 p-5 flex flex-col gap-8 rounded-lg"
                >
                  <Icon className="h-8 w-8 text-neutral-100" />
              
                  <div className="flex flex-col gap-3">
                    <p className="text-xl font-secondary text-neutral-100">
                      {item.title}
                    </p>
              
                    <p className="text-sm font-secondary text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}