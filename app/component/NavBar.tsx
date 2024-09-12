"use client"
import {  useState } from 'react'
import { FaBars } from "react-icons/fa6";
import Link from 'next/link.js';
import FloatLinks from './FloatLinks';


export default function NavBar() {
  const [openLinks ,setOpenLinks]=useState(false)

    
  return (
    <div className='bg-black text-white p-7 fixed w-full top-0 left-0 z-40' >
        <div className='container flex justify-between items-center '>
            <div className="text-4xl font-semibold hover:scale-110 transition-all duration-300 cursor-pointer ">
                MS
            </div>
                <div className='md:hidden relative  transition-all duration-700 pr-3'>
                    <FaBars onClick={()=>setOpenLinks(!openLinks)} className=' text-3xl font-semibold cursor-pointer '/>
                        <FloatLinks openLinks={openLinks}/>
                </div>
                <ul className=' items-center gap-7 text-lg font-semibold hidden md:flex'>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/">home</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/">products</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300 cursor-pointer text-xl' >
                        offers
                    </li>
                    <li className='hover:scale-110 transition-all duration-300 cursor-pointer'>
                        contactUs 
                    </li>
                </ul>
        </div>
    </div>
  )
}
