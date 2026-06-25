"use client";
import Image from "next/image";
import { useState } from "react"
import FAQSection from "../shared/FaqSection";

const imageList= [
    {key: 0, order:1, link:'/images/product/ps1.jpeg'},
    {key: 1, order:2, link:'/images/product/ps2.jpg'},
    {key: 2, order:3, link:'/images/product/ps3.png'}
]

const productDetail = {
    category: "Leather Goods",
    name: 'Elegant Burgundy Top-Handle Bag',
    price: 125.4,
    description: 'Elevate your everyday with the Classic Leather Bag from Lustrõ. Designed for those who appreciate refined craftsmanship, this bag features premium full-grain leather, a sleek silhouette, and polished details—perfect for both business and leisure. Each piece is meticulously crafted to ensure durability, elegance, and effortless style.',
    sku: 'LG-102',
    avgRating: 4.5,
    totalReviews: 159,
    color: ['Black', 'Brown', 'Navy'],
    shippingInfo: {title: 'Shipping Information', description: 'Enjoy fast, secure shipping worldwide. All orders are carefully packaged to ensure your watch arrives in perfect condition. For more details on delivery times and our hassle-free return policy, please visit our Shipping & Returns page.'},
    material: {title: 'Material', description: 'Premium stainless steel case and strap, scratch-resistant mineral glass, and precision quartz movement.'},
    clearanceSource: {title: 'Source of Clearance', description: 'All Lustrõ watches are sourced directly from our trusted manufacturing partners and undergo rigorous quality checks before reaching you.'}
}

export default function ProductDetail(){
    const [activeImage, setActiveImage]=useState<number>(0);
    const [activeDetailHeading, setActiveDetailHeading] = useState<string>("")

    return(
        <div className="container py-10 sm:py-16 md:py-18 lg:py-20 px-6 sm:px-8 lg:px-10 xl:px-6 mx-auto flex flex-col gap-8 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-center justify-center w-full">
            <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 lg:h-[650px] w-full">
                {/* Image Section */}
                <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 w-full lg:w-1/2 lg:h-full">
                   <div className="lg:sticky lg:top-10 relative w-full lg:flex-1 lg:h-full h-[450px] sm:h-[480px] md:h-[520px]">
                     <Image src={imageList[activeImage].link} alt={`Image ${imageList[activeImage].key}`} loading="eager" fill className="object-cover w-full h-full"/>
                   </div>
                   <div className="flex flex-row lg:flex-col gap-2 lg:h-full overflow-x-scroll lg:overflow-y-auto scrollbar-hide">
                        {imageList.map((item)=>(
                            <div key={item.key} onClick={()=>setActiveImage(item.key)} className="w-[110px] h-[110px] relative">
                                <Image src={item.link} alt={`Image ${item.key}`} fill className={`object-cover w-full h-full ${activeImage===item.key ? 'opacity-30':'opacity-100'}`}/>
                            </div>
                        ))}
                   </div>
                </div>

                {/* Product details */}
                <div className="flex flex-col gap-3.5 sm:gap-4 md:gap-4.5 lg:gap-5 w-full lg:w-1/2 overflow-y-hidden lg:overflow-y-scroll scrollbar-hide">
                    {/* Breadcrumb */}
                    <span className="space-x-1 font-secondary text-sm">
                        <a href='/' className="text-neutral-400">Home</a> <span>{'>'}</span> <a href='/' className="text-neutral-400">All Products</a> <span>{'>'}</span> <a href='/' className="text-neutral-800">{productDetail.category}</a>
                    </span>

                    {/* Product Name */}
                    <div className="flex flex-col space-y-2 sm:space-y-3">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-primary italic tracking-tight text-neutral-900">{productDetail.name}</span>
                        <span className="text-lg sm:text-xl font-secondary text-neutral-800">$ {productDetail.price} USD</span>
                    </div>

                    <div className="w-full text-neutral-300"><hr></hr></div>

                    {/* Product Description */}
                    <p className="text-neutral-600 text-[15px] sm:text-md font-secondary">{productDetail.description}</p>

                    {/* Product SKU */}
                    <p className="text-neutral-800 text-[16px] sm:text-md font-secondary items-center flex gap-1"> SKU: <span className="text-neutral-600 text-[15px]">{productDetail.sku}</span></p>

                    {/* Product Color Variant */}
                    <div className="flex flex-col gap-1.5">
                        <p className="text-neutral-900 text-[16px] sm:text-md font-secondary">Color</p>
                        <div className="flex flex-row gap-2 md:gap-2.5 lg:gap-3">
                        {productDetail.color.map((option, index)=>(
                            <p key={option} className="py-1 sm:py-1 lg:py-1.5 px-2 sm:px-3 lg:px-4 text-center text-neutral-900 text-[15px] sm:text-md font-secondary bg-gray-100 border border-gray-300 first:bg-neutral-900 first:text-white">{option}</p>
                            ))
                        }
                        </div>
                    </div>

                    {/* Product Quantity */}
                    <div className="flex flex-col gap-1.5">
                        <p className="text-neutral-900 text-[16px] sm:text-md font-secondary">Quantity</p>
                        <p className="w-fit py-0.5 sm:py-1 lg:py-1.5 px-4 sm:px-6 lg:px-8 text-center text-neutral-900 text-[15px] sm:text-md font-secondary bg-gray-100 border border-gray-300 first:bg-neutral-800 first:text-white">0</p>
                    </div>

                    {/* Cart Button */}
                    <button className="mt-1 w-full text-center py-1.5 sm:py-2 md:py-2.25 lg:py-2.5 px-2.5 sm:px-3 md:px-3.5 lg:px-4 uppercase bg-neutral-900 text-white text-[16px] sm:text-md lg:text-lg font-secondary">
                        Add to Cart
                    </button>

                    {/* Product additional details */}
                    <div className="gap-1 mt-1">
                        <div onClick={()=>setActiveDetailHeading(productDetail.shippingInfo.title)} className="cursor-pointer flex flex-col gap-1.5 py-2 sm:py-2.5 md:py-2.75 lg:py-3 border-b border-neutral-300">
                            <p className="text-neutral-900 text-[16px] sm:text-lg font-secondary">{productDetail.shippingInfo.title}</p>
                            {activeDetailHeading === `${productDetail.shippingInfo.title}` && <p className="text-neutral-600 text-[15px] sm:text-md font-secondary mb-[-2px] sm:mb-[-3px] md:mb-[-4px]">{productDetail.shippingInfo.description}</p>}
                        </div>
                        <div onClick={()=>setActiveDetailHeading(productDetail.material.title)} className="cursor-pointer flex flex-col gap-1.5 py-2 sm:py-2.5 md:py-2.75 lg:py-3 border-b border-neutral-300">
                            <p className="text-neutral-900 text-[16px] sm:text-lg font-secondary">{productDetail.material.title}</p>
                            {activeDetailHeading === `${productDetail.material.title}` && <p className="text-neutral-600 text-[15px] sm:text-md font-secondary mb-[-2px] sm:mb-[-3px] md:mb-[-4px]">{productDetail.material.description}</p>}
                        </div>
                        <div onClick={()=>setActiveDetailHeading(productDetail.clearanceSource.title)} className="cursor-pointer flex flex-col gap-1.5 py-2 sm:py-2.5 md:py-2.75 lg:py-3">
                            <p className="text-neutral-900 text-[16px] sm:text-lg font-secondary">{productDetail.clearanceSource.title}</p>
                            {activeDetailHeading === `${productDetail.clearanceSource.title}` && <p className="text-neutral-600 text-[15px] sm:text-md font-secondary mb-[-2px] sm:mb-[-3px] md:mb-[-4px]">{productDetail.clearanceSource.description}</p>}
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQSection title="Commonly asked question about this" />
        </div>
    )
}