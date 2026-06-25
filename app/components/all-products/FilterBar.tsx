"use client";
import { ChevronDown } from "lucide-react"
import { useState } from "react";

const filterList=[
    {name:'Category',items:["Leather Goods","Head Gears","Eyewears","Wrist Watches"]},
    {name:'Price',items:["0$ to 50$","50$ to 50$","100$ to 150$"]},
    {name:'Collections',items:["Top Rated","Best Seller","On Sale","New Arrival"]}
]

export default function FilterBar(){
    const [openCategory, setOpenCategory]=useState<string | null>("Category");
    return(
    <div className="flex p-4 pt-0 w-full flex-col">
        <p className="text-lg text-neutral-900 border-b border-gray-300 p-3 pl-0 font-secondary">Filter</p>
        <div>
        {filterList.map((item,index)=>{
            const isOpen = openCategory === item.name ? true : false;
            return(
            <div key={item.name} className={`last:border-none border-b border-gray-300 p-3 pl-0 ${isOpen && "pb-1" }`}>
                <div className="flex flex-row items-center justify-between cursor-pointer" onClick={()=>{setOpenCategory(isOpen ? null : item.name)}}>
                    <p className="text-neutral-900 text-lg font-secondary">{item.name}</p>
                    <ChevronDown className={`w-4 h-4 text-neutral-900 font-secondary transition-all duration-400 ease-in-out ${isOpen ? "rotate-180":""}`}/>
                </div> 
                    <div
                      className={` flex flex-col gap-1.75 overflow-hidden transition-all duration-800 ease-in-out ${
                        isOpen
                          ? "max-h-96 opacity-100 py-2.25"
                          : "max-h-0 opacity-0 py-0"
                      }`}
                    >
                        {item.items.map((item, index)=>(
                            <label key={item} className="inline-flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 accent-gray-900"></input>
                                <p className="text-neutral-900 text-sm font-secondary">{item}</p>
                            </label>
                        ))}
                    </div>
            </div>
            )
            }
        )}
        </div>
    </div>
    )
}