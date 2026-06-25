"use client";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonialList = [
  {
    name: 'Emily Carter',
    post: 'Graphic Designer',
    comment: 'The frames exceeded my expectations. Lightweight, elegant, and perfect for everyday wear.',
    imageLink: '/images/1.webp',
  },
  {
    name: 'Michael Reed',
    post: 'Marketing Manager',
    comment: 'Great craftsmanship and attention to detail. I’ve received so many compliments on my glasses.',
    imageLink: '/images/1.webp',
  },
  {
    name: 'Sophia Bennett',
    post: 'Photographer',
    comment: 'Stylish designs paired with exceptional comfort. I can wear them all day without any discomfort.',
    imageLink: '/images/1.webp',
  },
  {
    name: 'Daniel Foster',
    post: 'Software Engineer',
    comment: 'Premium quality and a perfect fit. The ordering process was smooth from start to finish.',
    imageLink: '/images/1.webp',
  },
  {
    name: 'Olivia Brooks',
    post: 'Fashion Blogger',
    comment: 'A beautiful blend of fashion and functionality. These have quickly become my favorite pair.',
    imageLink: '/images/1.webp',
  },
  {
    name: 'James Turner',
    post: 'Entrepreneur',
    comment: 'Excellent customer service and a product that truly stands out in terms of quality.',
    imageLink: '/images/1.webp',
  },
  {
    name: 'Ava Mitchell',
    post: 'Interior Designer',
    comment: 'The design is modern yet timeless. I’m extremely happy with my purchase.',
    imageLink: '/images/1.webp',
  },
  {
    name: 'William Harris',
    post: 'Business Consultant',
    comment: 'Durable, comfortable, and stylish. Everything I was looking for in premium eyewear.',
    imageLink: '/images/1.webp',
  },
  {
    name: 'Mia Collins',
    post: 'Content Strategist',
    comment: 'The quality is outstanding and the fit feels custom-made. Highly recommended.',
    imageLink: '/images/1.webp',
  },
  {
    name: 'Benjamin Scott',
    post: 'Architect',
    comment: 'Sophisticated design with excellent build quality. Worth every penny.',
    imageLink: '/images/1.webp',
  },
  {
    name: 'Charlotte Evans',
    post: 'Digital Artist',
    comment: 'Beautifully crafted eyewear that perfectly complements my personal style.',
    imageLink: '/images/1.webp',
  },
  {
    name: 'Henry Walker',
    post: 'Project Manager',
    comment: 'A seamless shopping experience and a product that delivers on every promise.',
    imageLink: '/images/1.webp',
  },
  {
    name: 'Grace Parker',
    post: 'Teacher',
    comment: 'Comfortable enough for all-day wear and stylish enough for any occasion.',
    imageLink: '/images/1.webp',
  },
];

export default function Testimonial() {
    return(
        <div className="relative pt-10 md:pt-15 lg:pt-25 pb-10 md:pb-15 lg:pb-25 bg-gray-50 relative overflow-hidden lg:overflow-visible">
            <div className="relative lg:sticky top-0 h-full lg:h-screen z-0 overflow-hidden">
              <div className="relative lg:absolute inset-0 flex items-center lg:items-center justify-center max-w-[300px] sm:max-w-sm md:max-w-2xl mx-auto">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-secondary pb-1 w-full">
                  What <span className="font-primary italic">Lustrõ</span>{" "}
                  Consumers are saying
                </p>
              </div>
            </div>
            <div className="hidden lg:flex container mx-auto justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 overflow-y-scroll no-scrollbar scrollbar-hide">
                    {testimonialList.map((item, index)=>(
                        <div key={index} className="relative flex flex-col max-h-[400px] max-w-[400px] p-4 items-start bg-white opacity-100 lg:odd:opacity-0">
                            <p className="text-gray-900 font-secondary text-xl text-start">"{item.comment}"</p>
                            <div className="flex gap-1 mt-4">{
                                Array.from({length: 5}).map((_, index) => (
                                    <Star
                                        key={index}
                                        className="w-4 h-4 fill-black/70"
                                      />
                                    )
                                )}
                            </div>
                            <div className="mt-6 inline-flex gap-5 w-full h-fit items-center">
                                <div className="relative w-[55px] h-[55px] rounded-sm overflow-hidden">
                                    <Image src={item.imageLink} alt={item.name} fill className="object-cover">
                                    </Image>
                                </div>
                                <div className="flex flex-col gap-1 items-start">
                                    <p className="text-gray-900 font-secondary text-lg">{item.name}</p>
                                    <p className="text-gray-600 font-secondary text-lg">{item.post}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex lg:hidden gap-4 mt-6 sm:mt-8 md:mt-8 lg:mt-10 min-w-0 overflow-hidden animate-testimonial-scroll">
                    {[...testimonialList,...testimonialList].map((item, index)=>(
                        <div key={index} className="relative flex flex-col h-[250px] sm:h-[280px] md:h-[300px] w-[300px] sm:w-[350px] md:w-[400px] p-4 items-start bg-white opacity-100 lg:odd:opacity-0">
                            <p className="text-gray-900 font-secondary text-lg md:text-xl text-start">"{item.comment}"</p>
                            <div className="flex gap-1 mt-4">{
                                Array.from({length: 5}).map((_, index) => (
                                    <Star
                                        key={index}
                                        className="w-4 h-4 fill-black/70"
                                      />
                                    )
                                )}
                            </div>
                            <div className="mt-6 inline-flex gap-3 sm:gap-5 w-full h-fit items-center">
                                <div className="relative w-[55px] h-[55px] rounded-sm overflow-hidden">
                                    <Image src={item.imageLink} alt={item.name} fill className="object-cover">
                                    </Image>
                                </div>
                                <div className="flex flex-col gap-1 items-start">
                                    <p className="text-gray-900 font-secondary text-md sm:text-lg">{item.name}</p>
                                    <p className="text-gray-600 font-secondary text-md sm:text-lg">{item.post}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}