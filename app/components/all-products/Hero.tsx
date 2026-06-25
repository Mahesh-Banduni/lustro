"use client";
import { SlidersHorizontal } from "lucide-react"
import { useState } from "react"

const sortOptions=["Alphabetical (A-Z)","Alphabetical (Z-A)","Recent First","Oldest First","Pricing (High to Low)","Pricing (Low to High)"]
type ModalProps={
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Hero({isOpen, setIsOpen}:ModalProps){
    const [showSortOptions, setShowSortOptions]=useState(false);
    return(
        <div className="relative">
            <div className="container flex flex-row justify-between items-center gap-4 px-2 md:px-4 lg:px-5">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-neutral-700 font-primary italic px-2 lg:px-4">All Products</p>
                <div className="flex flex-row gap-1 sm:gap-2">
                <button onClick={()=>setIsOpen(!isOpen)} className="inline-flex lg:hidden text-md sm:text-lg md:text-xl text-neutral-700 items-center justify-center px-1.5 sm:px-2 cursor-pointer font-secondary">Filters</button>
                <div className="relative">
                    <button onClick={()=>{setShowSortOptions(!showSortOptions)}} className="text-md sm:text-lg md:text-xl text-neutral-700 inline-flex items-center justify-center px-1.5 sm:px-2 cursor-pointer font-secondary">Sort By<SlidersHorizontal className="pl-1.5 sm:pl-2 w-6 sm:w-7 h-6 sm:h-7 text-neutral-700"></SlidersHorizontal></button>
                    {showSortOptions && <div className="absolute right-2 top-10 z-50 w-[60vw] min-[400]:w-[50vw] sm:w-xs bg-white transition-all">
                        <div className="p-1.5 sm:p-2">
                            {sortOptions.map((option)=><p className="text-md sm:text-lg md:text-xl font-primary text-neutral-700 p-1 cursor-pointer font-secondary">{option}</p>)}
                        </div>
                    </div>}
                </div>
                </div>
            </div>
        </div>
    )
}