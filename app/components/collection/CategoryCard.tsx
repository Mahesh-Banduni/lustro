import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  products: number;
  featured?: boolean;
}

export default function CategoryCard({
  title,
  description,
  image,
  products,
  featured = false,
}: CategoryCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
        featured ? "h-[300px] lg:h-[620px]" : "h-[300px]"
      }`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-5 sm:p-7 text-white font-secondary">
        <p className="text-sm md:text-md font-medium opacity-80 mb-2">
          {products} products
        </p>

        <h3
          className={`font-semibold ${
            featured ? "text-4xl" : "text-2xl"
          }`}
        >
          {title}
        </h3>

        <p className="mt-2 pb-2 text-sm md:text-md text-white/80 max-w-xs opacity-100 md:opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-2 font-medium text-sm md:text-md">
          <span>Shop Now</span>

          <ArrowRight
            className="
              w-4 h-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </div>
  );
}