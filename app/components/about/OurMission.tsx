"use client";

import Image from "next/image";

const imageList = [
    {key: 1, name: "Image 1", link: '/images/about/om1.webp'},
    {key: 2, name: "Image 2", link: '/images/about/om2.webp'},
    {key: 3, name: "Image 3", link: '/images/about/om3.webp'},
]

export default function OurMissionSection(){
    return (
        <div className="relative container h-auto lg:h-115 my-10 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
            <div className="h-full w-full flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-12 xl:gap-40 2xl:gap-60 items-center lg:items-start justify-center lg:justify-between">
                <div className="order-1 md:order-2 lg:order-1 max-w-lg h-full w-full flex flex-col gap-5 items-center lg:items-start justify-center lg:justify-between">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-secondary tracking-tight leading-[1.13] text-center lg:text-start">Our Mission</p>
                    <p className="text-[16px] md:text-[18px] font-secondary leading-[1.5] text-neutral-600 text-center lg:text-start">At Lustrõ, our mission is to celebrate individuality through exceptional craftsmanship. We are dedicated to creating accessories that not only endure, but inspire—uniting classic elegance with a modern sensibility. Every piece is thoughtfully designed and meticulously handcrafted by skilled artisans.</p>
                </div>
                <div className="order-2 md:order-1 lg:order-2 flex flex-row items-start gap-1.5 sm:gap-3 md:gap-5">
                  {imageList.map((item) => (
                    <div
                      key={item.key}
                      className="relative h-[120px] w-[80px] min-[325px]:w-[100px] min-[400px]:w-[120px] sm:h-[150px] sm:w-[150px] md:h-[440px] md:w-[200px] xl:h-[440px] xl:w-[220px] even:mt-5"
                    >
                      <Image
                        src={item.link}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
            </div>
        </div>
    )
}