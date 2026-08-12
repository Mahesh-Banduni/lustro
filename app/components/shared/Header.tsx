import { User, Search, Heart, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

type HeaderProps = {
  visible: boolean;
};

const categoryList =[
    {name:'Leather Goods',description:'Elevate your style with meticulously crafted leather pieces where enduring quality meets contemporary elegance.',imageSrc:'/images/product/c1.jpeg'},
    {name:'Head Gear',description:'Elevate your presence with meticulously crafted hats where refined detail meets timeless sophistication.',imageSrc:'/images/product/c2.jpeg'},
    {name:'Eyewear',description:'Elevate your perspective with meticulously designed eyewear where bold innovation meets iconic elegance.',imageSrc:'/images/product/c3.jpeg'},
    {name:'Wrist Watches',description:'Elevate every moment with expertly engineered timepieces where precision meets lasting sophistication.',imageSrc:'/images/product/c4.webp'}
]

export default function Header({ visible }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Shop", link: "/all-products" },
    { name: "Collection", link: "/all-products" },
    { name: "About", link: "/about" },
    { name: "FAQ", link: "/faq" },
    { name: "Contact", link: "/contact" },
  ];

  const textColor = visible ? "text-black" : "text-white";

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 ${
        visible ? "bg-white" : `${mobileOpen ? "bg-black" : "bg-transparent"}`
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between h-20 px-6 sm:px-8 lg:px-10">
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-6 relative">
            {navLinks.map((item) =>
              item.name === "Collection" ? (
                <div key={item.name} className="relative group">
                  <a
                    href={item.link}
                    className={`font-secondary ${textColor} text-base font-medium inline-flex items-center`}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180 font-medium text-base"
                    />
                  </a>
              
                  {/* Dropdown */}
                  <div className="absolute top-full w-[90vw] max-w-[800px] lg:max-w-[1100px] xl:max-w-[1200px] pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white p-3 xl:p-4 shadow-lg rounded-lg w-full">
                      <div className="grid grid-cols-4 gap-3 xl:gap-4 w-full">
                        {categoryList.map((item) => (
                          <div
                            key={item.name}
                            className="relative aspect-[3/5] overflow-hidden group/card"
                          >
                            <Image
                              src={item.imageSrc}
                              alt={item.name}
                              fill
                              className="object-cover transition-transform duration-300 ease-linear group-hover/card:scale-110"
                            />
          
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent" />
                        
                            <div className="px-4 pb-4 absolute bottom-0">
                              <p className="font-primary text-[26px] text-white italic">
                                {item.name}
                              </p>
                        
                              <p className="opacity-0 max-h-0 group-hover/card:opacity-100 group-hover/card:max-h-40 transition-all duration-300 mt-2 font-secondary text-[16px] text-white">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.link}
                  className={`font-secondary ${textColor} text-base font-medium`}
                >
                  {item.name}
                </a>
              )
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className={`cursor-pointer lg:hidden ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex flex-row items-center justify-center gap-2">
          {/* <Image src="/images/logo.png" alt="Lustro" width={16} height={16} className="w-16 h-16" /> */}
            <a
              href="/"
              className={`font-primary italic font-bold text-2xl sm:text-3xl lg:text-[40px] ${textColor}`}
            >
              Lustrõ
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <User className={`${textColor} h-5 w-5 sm:h-6 sm:w-6`} />
            <Search className={`${textColor} h-5 w-5 sm:h-6 sm:w-6`} />
            <Heart className={`${textColor} h-5 w-5 sm:h-6 sm:w-6`} />

            <span className={`${textColor} hidden md:block`}>|</span>

            <a
              href="#"
              className={`hidden sm:block font-secondary ${textColor} text-sm md:text-base font-medium`}
            >
              Cart [0]
            </a>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div
            className={`lg:hidden px-6 ${
              visible ? "bg-white w-full h-[100vh]" : "bg-black/90 backdrop-blur w-full h-[100vh]"
            }`}
          >
            <div className="flex flex-col py-4 space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className={`font-secondary ${textColor} text-lg`}
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#"
                className={`font-secondary ${textColor} text-lg`}
              >
                Cart [0]
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}