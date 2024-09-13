/* eslint-disable prefer-const */
"use client"
import {  useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import Link from 'next/link.js';
import FloatLinks from './FloatLinks';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function NavBar() {
  let [openLinks ,setOpenLinks]=useState(false)
  let [search ,setSearch]=useState<string>('')
  let nav=useRouter()


  function handelSearch(){
        nav.push(`/?str=${search.toLowerCase()}`)
}
    useEffect(()=>{
        handelSearch()
    },[search])

    
  return (
    <div className='bg-black text-white p-7 fixed w-full top-0 left-0 z-40' >
        <div className='container flex justify-between items-center '>
            <div className="text-4xl font-semibold hover:scale-110 transition-all duration-300 cursor-pointer ">
                <Image loading="lazy" src={'/242334105_347602130400080_2242799423246161713_n.jpg'} alt='serv5' width={50} height={50} className='rounded-full'/>
            </div>
            <div className='bg-[#eee] p-2 text-black  flex items-center gap-1 rounded-lg min-w-[200px] md:min-w-[350px]'>
                <input type="text" placeholder={"Search over 10,000 Product"}  className='bg-[#eee] w-[95%] border-none outline-none p-1 input' onChange={(e)=>{ setSearch(e.target.value);handelSearch()}}  />
                <FaSearch/>
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
