import { Eye, Heart } from "lucide-react"
import Image from "next/image"

const productsList =[
    {name:"Taupe Suede Wide-Brim Hat",price:"60",imageLink:"/images/product/p1.png"},
    {name:"Rose Gold & Mother-of-Pearl Ladies’ Watch",price:"125",imageLink:"/images/product/p2.jpeg"},
    {name:"Ivory White Satchel with Gold Hardware",price:"110",imageLink:"/images/product/p3.jpeg"},
    {name:"Gold Metal Aviator Sunglasses",price:"12",imageLink:"/images/product/p4.jpeg"},
]

export default function ProductGrid(){
    return(
        <>
            {productsList.map((item,index)=>
              (
                <div className="flex flex-col gap-2 relative min-h-[500px] sm:min-h-[700px] w-full">
                    <div className="relative h-[470px] sm:h-[650px] w-full group">
                        <Image src={item.imageLink} alt={item.name} fill className="object-cover"></Image>
                        <div className="absolute p-1.75 sm:p-2 right-0 top-0 cursor-pointer"><Heart className="w-5 h-5 bg-transparent text-neutral-700"></Heart></div>
                        <div className="absolute p-1.75 sm:p-2 bottom-0 cursor-pointer w-full inline-flex gap-2 transition-all duration-400 translate-y-0 sm:translate-y-8 ease-in-out opacity-100 sm:opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                            <div className="flex p-2 sm:p-3 bg-white w-fit items-center justify-center">
                                <Eye className="w-5 sm:w-6 h-4 sm:h-6 text-neutral-900 font-secondary"></Eye>
                            </div>
                            <button className="p-2 sm:p-3 bg-white w-full items-center text-lg md:text-xl text-neutral-900 text-center hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer font-secondary">Add to Cart</button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-2">
                        <p className="text-[15px] sm:text-lg lg:text-xl text-neutral-900 font-secondary">{item.name}</p>
                        <p className="text-[15px] sm:text-lg lg:text-xl text-neutral-900 font-secondary gap-1">$ {" "} {item.price} USD</p>
                    </div>
                </div>
              )
            )}
        </>
    )
}