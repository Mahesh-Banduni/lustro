"use client";

import { useEffect } from "react";
import { ChevronDown, X } from "lucide-react"
import { useState } from "react";

type SelectedFilters = {
  Category: string[];
  Price: string[];
  Collections: string[];
};

type FilterCategory = keyof SelectedFilters;

const filterList: {
  name: FilterCategory;
  items: string[];
}[]=[
    {name:'Category',items:["Leather Goods","Head Gears","Eyewears","Wrist Watches"]},
    {name:'Price',items:["0$ to 50$","50$ to 50$","100$ to 150$"]},
    {name:'Collections',items:["Top Rated","Best Seller","On Sale","New Arrival"]}
]

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FilterModal({
  isOpen,
  setIsOpen,
}: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  const [openCategory, setOpenCategory] = useState<keyof SelectedFilters>("Category");
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    Category: [],
    Price: [],
    Collections: [],
  });

  const toggleFilter = (category: keyof SelectedFilters, item: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(item)
        ? prev[category].filter((i) => i !== item)
        : [...prev[category], item],
    }));
  };

  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-xl transition-opacity duration-300 ${
        isOpen
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute bottom-0 left-0 right-0 h-[90vh] rounded-t-2xl bg-white transition-transform duration-600 ease-in-out ${
          isOpen
            ? "translate-y-0"
            : "translate-y-full"
        }`}
      >
        <div className="flex pt-0 w-full flex-col">
            <p className="text-xl sm:text-2xl text-neutral-900 border-b border-gray-300 p-3 min-[400px]:p-4.5 sm:p-6 font-secondary flex justify-between items-center">Filter<X onClick={() => setIsOpen(false)} className="cursor-pointer w-6 h-6 text-gray-700"></X></p>
            {/* <div>
            {filterList.map((item,index)=>{
                const isOpen = openCategory === item.name ? true : false;
                return(
                <div key={item.name} className={`last:border-none border-b border-gray-300 p-2.5 sm:p-4 ${isOpen && "pb-0.25 sm:pb-0.5"} pl-0`}>
                    <div className={`flex flex-row items-center justify-between cursor-pointer ${isOpen && "pb-0.75 sm:pb-1.25"}`} onClick={()=>{setOpenCategory(isOpen ? null : item.name)}}>
                        <p className="text-neutral-900 text-lg sm:text-xl font-secondary">{item.name}</p>
                        <ChevronDown className={`w-4 h-4 text-neutral-900 font-secondary transition-all duration-400 ease-in-out ${isOpen ? "rotate-180":""}`}/>
                    </div> 
                        <div
                          className={` flex flex-col gap-1.25 sm:gap-1.75 overflow-hidden transition-all duration-800 ease-in-out ${
                            isOpen
                              ? "max-h-96 opacity-100 py-1.25 sm:py-2 pl-2"
                              : "max-h-0 opacity-0 py-0"
                          }`}
                        >
                            {item.items.map((item, index)=>(
                                <label key={item} className="inline-flex items-center gap-2 sm:gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 accent-gray-900"></input>
                                    <p className="text-neutral-900 text-md sm:text-lg font-secondary">{item}</p>
                                </label>
                            ))}
                        </div>
                </div>
                )
                }
            )}
            </div> */}
            <div className="inline-flex">
                <div className={`flex flex-col gap-0 items-center justify-start w-3/5 h-fit border-r-1 border-gray-200`}>
                    {filterList.map((item, index)=>{
                        const isOpen = openCategory === item.name ? true : false;
                        return(
                            <div key={item.name} onClick={()=>setOpenCategory(item.name)} className={`cursor-pointer p-2.5 min-[400px]:p-3 sm:p-4 border-y-1 border-gray-200 w-full ${isOpen ? 'bg-gray-50/5':'bg-gray-100'}`}>
                                <p className={`${isOpen ? 'text-neutral-900':'text-neutral-800'} text-md sm:text-lg font-secondary flex justify-between items-center`}>{item.name}<span className="text-neutral-500 text-sm sm:text-md">{selectedFilters[item.name].length > 0 && selectedFilters[item.name].length}</span></p>
                            </div>
                      )
                    })}
                </div>
                <div className="p-3 sm:p-4 w-full h-full">
                    {filterList.map((item, index)=>{
                        const isOpen = openCategory === item.name ? true : false;
                        return(
                        <div className="flex flex-col gap-3">
                            {isOpen && item.items.map((item, index)=>(
                                <label key={item} className="inline-flex items-center gap-2 sm:gap-3 cursor-pointer group">
                                    <input 
                                        checked={selectedFilters[openCategory].includes(item)}
                                        onChange={() => toggleFilter(openCategory, item)} 
                                        type="checkbox" 
                                        className="w-4 h-4 accent-gray-900 cursor-pointer">
                                    </input>
                                    <p className="text-neutral-900 text-md sm:text-lg font-secondary">{item}</p>
                                </label>
                                ))    
                            }
                        </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}