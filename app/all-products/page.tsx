"use client";
import FilterBar from "@/app/components/all-products/FilterBar";
import FilterModal from "@/app/components/all-products/FilterModal";
import Hero from "@/app/components/all-products/Hero"
import ProductGrid from "@/app/components/all-products/ProductGrid";
import { useState } from "react";

export default function AllProductsPage() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="py-6 sm:py-9 md:py-12 lg:py-15">
            <Hero isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="flex flex-row pt-4 sm:pt-6 md:pt-9 lg:pt-12 justify-center container px-2 md:px-4 lg:px-5 pb-8 sm:pb-10 md:pb-12 lg:pb-0">
                <div className="min-w-sm p-2 hidden lg:flex items-start">
                    <FilterBar></FilterBar>
                </div>
                <div className="flex lg:hidden">
                    <FilterModal isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <ProductGrid />
                </div>
            </div>
        </div>
    )
}