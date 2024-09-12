/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState ,useEffect} from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {useRouter} from 'next/navigation';

export default function Pagination({numberItems}:any) {
    const [numSkip,setnumSkip]=useState(0)
    const rout=useRouter()
    useEffect(()=>{
        rout.push(`?numSkip=${numSkip}`)
    },[numSkip,rout])

    const arrayNumbersItem=[]
    let num=0
    for(let i=1; i<=Math.round(numberItems/50);i++){
        arrayNumbersItem.push({i,num})
        num=num+50
    }
 
    return (
        <div className='w-fit h-full mx-auto flex justify-between items-center  gap-2'>
            <div className="text-2xl p-1 font-semibold border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer" onClick={()=>setnumSkip(numSkip-50)}><MdOutlineKeyboardArrowLeft/></div>
            {arrayNumbersItem.map((item,index)=>
                <div key={index} className="text-lg font-semibold py-1 px-2 border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer" onClick={()=>setnumSkip(item.num)} >{item.i}</div>
            )}
            <div className="text-2xl p-1 font-semibold border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer" onClick={()=>setnumSkip(numSkip+50)}><MdOutlineKeyboardArrowRight/></div>
        </div>
    )
}
