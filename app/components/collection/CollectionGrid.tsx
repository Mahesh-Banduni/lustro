"use client";

import { ArrowUpRight, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Leather Goods",
    products: 48,
    image: "/images/product/c1.jpeg",
    description:
      "Premium handcrafted leather accessories for modern lifestyles.",
    featured: true,
    filter: "Best Selling",
  },
  {
    title: "Head Gear",
    products: 86,
    image: "/images/product/c2.jpeg",
    description:
      "Classic and contemporary headwear crafted for every occasion.",
    filter: "On Sale",
  },
  {
    title: "Eyewear",
    products: 32,
    image: "/images/product/pt1.jpg",
    description:
      "Designer eyewear blending comfort, style, and innovation.",
    filter: "Best Selling",
  },
  {
    title: "Wrist Watches",
    products: 64,
    image: "/images/product/c4.webp",
    description:
      "Precision-engineered timepieces built to elevate every moment.",
    filter: "Top Rated",
  },
  {
    title: "Travel Accessories",
    products: 28,
    image: "/images/product/p3.jpeg",
    description:
      "Refined essentials designed for modern travel and exploration.",
    filter: "Best Selling",
  },
  {
    title: "Footwear",
    products: 24,
    image: "/images/product/p6.jpg",
    description:
      "Luxury footwear crafted for comfort and timeless appeal.",
    filter: "Best Selling",
  },
];

const filterCategories = [
  "All Categories",
  "Top Rated",
  "Best Selling",
  "On Sale",
  "New Arrival",
];

export default function CollectionGrid() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All Categories");

  const filteredCollections = categories.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All Categories" ||
      item.filter === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="flex flex-col gap-6 md:gap-8 lg:gap-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 w-full">
        <div>
          <p className="text-3xl md:text-4xl lg:text-5xl max-w-xl font-secondary tracking-tight text-neutral-800">
            Explore Our <span className="italic font-primary">Categories</span>
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-3 w-full md:w-fit lg:w-auto justify-start md:justify-end">
          {/* Search */}
          <div className="relative w-full sm:w-fit">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />

            <input
              type="text"
              placeholder="Search collections..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                h-9 sm:h-12
                pl-11
                pr-4
                w-full sm:w-fit
                min-w-[220px]
                border
                border-neutral-300
                bg-white
                text-sm md:text-md
                font-secondary
                outline-none
                focus:border-neutral-900
                transition-colors
              "
            />
          </div>

          {/* Category Filter */}
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="
              h-9 sm:h-12
              px-4
              min-w-[220px]
              border
              border-neutral-300
              bg-white
              text-sm md:text-md
              font-secondary
              outline-none
              focus:border-neutral-900
              cursor-pointer
            "
          >
            {filterCategories.map((category) => (
              <option className="bg-gray-50 text-neutral-900 hover:bg-gray-100 text-sm md:text-md cursor-pointer" key={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Collection Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        {filteredCollections.length > 0 ? (
          <>
            {/* Featured Card */}
            {filteredCollections[0] && (
              <div className="lg:col-span-4 lg:row-span-2">
                <CategoryCard 
                  title={filteredCollections[0].title}
                  description={filteredCollections[0].description}
                  image={filteredCollections[0].image}
                  products={filteredCollections[0].products}
                  featured={true}
                />
              </div>
            )}

            {/* Right Column - Remaining Items */}
            {filteredCollections.slice(1).map((category, index) => (
              <div key={index} className="lg:col-span-2">
                <CategoryCard 
                  title={category.title}
                  description={category.description}
                  image={category.image}
                  products={category.products}
                />
              </div>
            ))}
          </>
        ) : (
          <div className="col-span-full text-center py-10 text-neutral-500 font-secondary text-sm md:text-md">
            No categories found
          </div>
        )}
      </div>
    </section>
  );
}