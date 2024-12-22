import Image from "next/image"
import Link from "next/link"
export default function Navbar(){
    return (
        <div className="space-x-2">
            
            <ul className="flex flex-row justify-items-start items-center shadow-md space-x-4 bg-blue-950 text-white">
            <Image src="/PrisimBeauty.jpg" alt="Beauty Prism" width={100} height={100}/>
            <li className="bg-grey-300 hover:text-yellow-800 cursor-pointer text-2xl mx-2">Home</li>
            <li className="bg-grey-300 hover:text-yellow-800 cursor-pointer text-2xl">Contact</li>
            <li className="bg-grey-300 hover:text-yellow-800 cursor-pointer text-2xl">About</li>
            <li className="bg-grey-300 hover:text-yellow-800 cursor-pointer text-2xl">Sign Up</li>
            </ul>
            
     
        </div>
    )
    
}   