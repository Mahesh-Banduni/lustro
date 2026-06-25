"use client";

import Image from "next/image";

const itemList= [
    {name: 'Item 1', imageLink: '/images/about/c1.webp'},
    {name: 'Item 2', imageLink: '/images/about/c2.webp'},
    {name: 'Item 3', imageLink: '/images/about/c3.webp'},
    {name: 'Item 4', imageLink: '/images/about/c4.webp'},
    {name: 'Item 5', imageLink: '/images/about/c5.webp'},
]

export default function FollowSection(){
    return (
        <div className="py-10 sm:py-15 lg:py-25">
            <div className="container mx-auto flex flex-col items-start justify-center px-4 xl:px-4 2xl:px-0">
                <p className="text-neutral-500 text-sm md:text-md font-secondary">Follow Us</p>
                <p className="text-neutral-900 text-xl md:text-2xl font-secondary">@lustrofashion</p>
            </div>
            <div className="overflow-hidden pt-4 sm:pt-6 md:pt-8">
              <div
                className="flex w-max gap-4"
                style={{
                  animation: "marquee 30s linear infinite",
                }}
              >
                {[...itemList, ...itemList].map((item, index) => (
                  <div
                    key={index}
                    className="relative h-[280px] md:h-[350px] w-[200px] md:w-[250px] flex-shrink-0"
                  >
                    <Image
                      src={item.imageLink}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            
              <style jsx>{`
                @keyframes marquee {
                  from {
                    transform: translateX(0);
                  }
                  to {
                    transform: translateX(-50%);
                  }
                }
              `}</style>
            </div>
        </div>
    )
}