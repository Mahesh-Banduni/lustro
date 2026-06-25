"use client";

import { useRef } from "react";
import Category from "./components/home/Category";
import Hero from "./components/home/Hero";
import Community from "./components/home/Community";
import Testimonial from "./components/home/Testimonial";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <Hero heroRef={heroRef} />
      <Category />
      <Community />
      <Testimonial />
    </div>
  );
}