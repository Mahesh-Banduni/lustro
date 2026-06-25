"use client";

import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import { createRef, useEffect, useRef, useState } from "react";
import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";
import './globals.css';

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-primary",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-secondary",
});

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footerRef = createRef<HTMLDivElement>();
  const heroRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <html lang="en">
      <body>
        <div
          className={`${instrumentSerif.variable} ${instrumentSans.variable} product-fonts`}
        >
          <Header visible={visible} />
          <main ref={heroRef}>{children}</main>
          <Footer />
        </div>
    </body>
    </html>
  );
}