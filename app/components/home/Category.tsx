"use client";

import Image from "next/image"

export default function Category(){
    const categoryList =[
        {name:'Leather Goods',description:'Elevate your style with meticulously crafted leather pieces where enduring quality meets contemporary elegance.',imageSrc:'/images/product/c1.jpeg'},
        {name:'Head Gear',description:'Elevate your presence with meticulously crafted hats where refined detail meets timeless sophistication.',imageSrc:'/images/product/c2.jpeg'},
        {name:'Eyewear',description:'Elevate your perspective with meticulously designed eyewear where bold innovation meets iconic elegance.',imageSrc:'/images/product/c3.jpeg'},
        {name:'Wrist Watches',description:'Elevate every moment with expertly engineered timepieces where precision meets lasting sophistication.',imageSrc:'/images/product/c4.webp'}
    ]
    return (
        <div className="container min-w-0 pt-10 md:pt-15 lg:pt-25 px-6 md:px-8 lg:px-10 relative overflow-hidden">
            <p className="text-[28px] sm:text-[32px] md:text-[36px] xl:text-[40px] font-secondary tracking-tight leading-[1.13]">Shop By <span className="italic font-primary">Category</span></p>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <div className="hidden lg:block"></div>
                {
                    categoryList.map((item)=>(
                        <div key={item.name} className="relative aspect-[3/5] overflow-hidden group w-full h-[400px] md:h-full">
                            <Image src={item.imageSrc} alt={item.name} fill className="object-cover w-full h-full group-hover:scale-[1.1] group-hover:duration-300 group-hover:ease-linear">
                            </Image>
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent" />
                            <div className="px-6 pb-6 absolute bottom-0">
                                <p className="font-primary text-[32px] text-white italic">{item.name}</p>
                                <p className="opacity-100 lg:opacity-0 max-h-30 lg:max-h-0 group-hover:opacity-100 group-hover:max-h-24 mt-2 font-secondary group-hover:ease-in-out duration-400 text-[20px] text-white">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* Mobile Carousel */}
            <div className="flex md:hidden gap-4 mt-6 sm:mt-8 min-w-0 overflow-x-auto animate-category-scroll">
              {[...categoryList, ...categoryList].map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="relative flex-shrink-0 w-[280px] h-[400px] aspect-[3/5] overflow-hidden snap-center"
                >
                    <Image src={item.imageSrc} alt={item.name} fill className="object-cover w-full h-full">
                    </Image>
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent" />
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 absolute bottom-0">
                        <p className="font-primary text-[24px] sm:text-[32px] text-white italic">{item.name}</p>
                        <p className="opacity-100 lg:opacity-0 max-h-44 lg:max-h-0 group-hover:opacity-100 group-hover:max-h-24 mt-2 font-secondary group-hover:ease-in-out duration-400 text-[16px] sm:text-[20px] text-neutral-300">{item.description}</p>
                    </div>
                </div>
              ))}
            </div>
          
        </div>
    )
}
