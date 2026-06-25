"use client";
import { useState } from "react"

const faqItems = [
  {
    key: 1,
    question: "What materials are used in Lustrõ accessories?",
    answer:
      "We use only the finest, ethically sourced materials—including premium European leather, high-grade metals, and durable textiles. Each material is carefully selected for its quality, longevity, and luxurious feel.",
  },
  {
    key: 2,
    question: "How are Lustrõ accessories made?",
    answer:
      "Every Lustrõ piece is meticulously handcrafted by skilled artisans in Germany, blending traditional techniques with modern innovation to ensure exceptional quality and timeless design.",
  },
  {
    key: 3,
    question: "Where do you source your materials?",
    answer:
      "Our materials are sourced from trusted suppliers who share our commitment to sustainability and ethical practices. We prioritize transparency and traceability in every step of our supply chain.",
  },
  {
    key: 4,
    question: "How should I care for my Lustrõ accessory?",
    answer:
      "To preserve the beauty of your accessory, we recommend storing it in a cool, dry place and cleaning it with a soft cloth. For specific care instructions, please refer to the care guide included with your purchase.",
  },
  {
    key: 5,
    question: "Do Lustrõ products come with a warranty?",
    answer:
      "Yes, all Lustrõ accessories are backed by a two-year warranty covering craftsmanship and material defects. For support or warranty claims, please contact our customer care team.",
  },
  {
    key: 6,
    question: "Are Lustrõ accessories sustainably made?",
    answer:
      "Sustainability is at the core of our brand. We work with responsible suppliers and ethical manufacturing partners to minimize environmental impact while maintaining the highest standards of quality.",
  },
  {
    key: 7,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. Delivery times and shipping costs vary depending on your location and will be calculated during checkout.",
  },
  {
    key: 8,
    question: "Can I return or exchange my purchase?",
    answer:
      "We offer returns and exchanges within 30 days of delivery, provided the item is unused and in its original condition. Please review our return policy for full details.",
  },
  {
    key: 9,
    question: "Are your products handmade?",
    answer:
      "Yes, each Lustrõ accessory is handcrafted with exceptional attention to detail by experienced artisans, ensuring every piece meets our exacting standards.",
  },
  {
    key: 10,
    question: "Can I gift a Lustrõ accessory?",
    answer:
      "Absolutely. Our accessories are beautifully packaged and make excellent gifts for special occasions. Gift packaging options may be available at checkout.",
  },
  {
    key: 11,
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team through our contact page or by email. We’re here to assist with product inquiries, orders, returns, and warranty requests.",
  },
];

type sectionProps = {
  title: string;
}

export default function FAQSection({title}:sectionProps){
    const [activeFAQ, setActiveFAQ]=useState<number>(0);
    return(
        <div className="flex flex-col gap-0 items-center justify-center max-w-sm min-[400px]:max-w-2xl sm:max-w-3xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full">
                <p className="text-3xl md:text-4xl text-center font-primary text-neutral-900 italic tracking-tight pb-4 sm:pb-6 md:pb-8 lg:pb-10 w-full">{title}</p>
                {faqItems.length > 0 && faqItems.map((item)=>(
                    <div key={item.key} onClick={()=>{(activeFAQ === item.key) ? setActiveFAQ(0) : setActiveFAQ(item.key)}} className="border-b border-neutral-200 last:border-none flex flex-col items-start w-full cursor-pointer">
                        <div className="flex w-full justify-between items-center py-3 sm:py-3.25 md:py-3.5">
                            <p className="relative text-neutral-900 text-md sm:text-lg font-secondary w-full">{item.question}</p>
                            <div
                              className={`relative h-3 w-3 transition-transform duration-500 ease-in-out ${
                                activeFAQ === item.key ? "rotate-180" : "rotate-0"
                              }`}
                            >
                              <span className="absolute inset-x-0 top-1/2 h-0.5 right-0 -translate-y-1/2 bg-neutral-700" />
                          
                              <span
                                className={`absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-neutral-700 transition-all duration-500 ease-in-out ${
                                  activeFAQ === item.key ? "scale-y-0" : "scale-y-100"
                                }`}
                              />
                            </div>
                        </div>
                        <div className={`${activeFAQ === item.key ? '':''}`}>
                            {activeFAQ === item.key && <p className="text-neutral-600 text-md sm:text-lg font-secondary -mt-1 pb-3">{item.answer}</p>}
                        </div>
                    </div>
                ))}
            </div>
    )
}