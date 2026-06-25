"use client";

import { Globe, MedalIcon, UsersRound } from "lucide-react";
import Image from "next/image";

const featureList= [
    {icon: Globe, title:"10+ Years Experience"},
    {icon: MedalIcon, title:"15+ Global Awards"},
    {icon: UsersRound, title:"500+ Members Worldwide"},
]

export default function FeatureSection(){
    return (
        <div className="h-auto lg:min-h-[600px] relative">
            <div className="flex gap-4 lg:gap-6 xl:gap-10">
                <div className="hidden lg:block lg:sticky lg:top-20 relative w-1/2 h-[600px]">
                    <Image src='/images/feature/f1.webp' alt='Section Image' fill className="object-cover w-auto h-auto" />
                </div>
                <div className="w-full lg:w-1/2 h-full">
                    <div className="overflow-y-scroll flex flex-col gap-10 scrollbar-hide max-h-[600px] py-10 md:py-12 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-0">
                        <div className="hidden max-w-lg lg:flex flex-col items-center gap-8 justify-center w-full mx-auto">
                            <p className="text-2xl max-w-xs sm:text-3xl md:text-4xl lg:text-[40px] font-secondary tracking-tight leading-[1.13] text-neutral-800 text-center">Hand Made <span className="font-primary italic">From Germany</span></p>
                            <Image src='/images/feature/f2.png' alt='Section Image' width={400} height={400} className="object-cover" />
                            <p className="text-sm max-w-sm font-secondary text-neutral-600 text-center">At Lustrõ, every accessory is a testament to German craftsmanship—where tradition meets innovation. Our artisans meticulously handcraft each piece, ensuring exceptional quality and timeless elegance. From the heart of Germany, we bring you accessories that embody refined sophistication and enduring style. Experience the artistry and precision that define Lustrõ.</p>
                            <a href="/" className="text-center text-neutral-900 underline text-md font-secondary">Explore More</a>
                        </div>
                        <div className="max-w-lg flex flex-col items-center gap-4 sm:gap-5 md:gap-7 lg:gap-8 justify-center w-full mx-auto">
                            <p className="text-2xl max-w-xs sm:text-3xl md:text-4xl lg:text-[40px] font-secondary tracking-tight leading-[1.13] text-neutral-800 text-center">Empowering every <span className="font-primary italic">Unique Voice</span></p>
                            <p className="text-[16px] max-w-sm font-secondary text-neutral-600 text-center">At Lustrõ, we believe true luxury is personal. Our meticulously crafted accessories are designed to celebrate individuality, empowering you to express your unique style with confidence. With over a decade of expertise, global recognition, and a thriving community, we are dedicated to elevating every voice—one timeless piece at a time.</p>
                            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full max-w-sm">
                                {featureList.map((item)=>{
                                    const Icon = item.icon;
                                return(
                                    <div className="bg-gray-100 p-2 sm:p-3 md:p-4 inline-flex gap-2 sm:gap-3 md:gap-4 font-secondary items-center">
                                        <Icon className="w-4 md:w-5 h-4 md:h-5 text-neutral-700" />
                                        <p className="text-sm sm:text-md text-neutral-900">{item.title}</p>
                                    </div>
                                )})}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}