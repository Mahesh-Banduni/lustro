"use client";

import { ArrowRight } from "lucide-react";

const footerLinks = [
  {
    name: "shop",
    items: [
      { label: "All Products", link: "/all-products" },
      { label: "Leather Goods", link: "/all-products" },
      { label: "Eyewears", link: "/all-products" },
      { label: "Wrist Watches", link: "/all-products" },
      { label: "Cap", link: "/all-products" },
    ],
  },
  {
    name: "company",
    items: [
      { label: "About", link: "/about" },
      { label: "Company", link: "/about" },
    ],
  },
  {
    name: "others",
    items: [
      { label: "FAQ", link: "/faq" },
      { label: "Contact Us", link: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 py-10 md:py-14 lg:flex-row lg:items-start lg:justify-between lg:gap-16 xl:gap-24">
          
          {/* Logo */}
          <div className="shrink-0">
            <p className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl italic font-primary text-white">
              Lustro
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 lg:max-w-xl">
            {footerLinks.map((category) => (
              <div
                key={category.name}
                className="flex flex-col gap-3"
              >
                <p className="text-sm uppercase tracking-wide text-gray-300 font-secondary">
                  {category.name}
                </p>

                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.link}
                        className="text-sm text-gray-400 transition-colors hover:text-white font-secondary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="w-full lg:max-w-md xl:max-w-lg">
            <p className="mb-4 text-lg sm:text-xl md:text-2xl text-gray-100 font-secondary">
              Be the first to discover the latest news
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border-b border-gray-500 bg-transparent py-2 pr-8 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none"
              />

              <ArrowRight className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}