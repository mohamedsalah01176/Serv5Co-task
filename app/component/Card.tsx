import { Rating } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FiEye } from "react-icons/fi";



interface item {
  id: number,
    title: string,
    rating: number,
    discountPercentage: number,
    price: number,
    images:[string],
    
}
interface props{
  data: item[]
 }



export default function Card({data}:props) {

  return (
    <>
    {data.map((item:item,index:number)=>
<<<<<<< HEAD
        <div key={index} className=' pt-3 min-h-[400px] text-center  rounded-lg transition2    relative group overflow-hidden '   >
=======
        <div   key={index} className=' pt-3 min-h-[400px] text-center  rounded-lg transition2    relative group overflow-hidden '   >
>>>>>>> ec22de1c62b0c1b294def209744749cbaec1ca8f
        <Link href={`/${item.id}`} className=''>

            <Image width={200} height={200} loading="lazy" className='border border-black rounded-lg  h-[300px] w-full px-5 mx-auto ' src={item.images[0]} alt="product" />
            <div className='flex group-hover:opacity-100 opacity-0 transition-all duration-500   flex-col justify-center items-center gap-1 absolute top-3 left-0 h-[300px] w-full bg-[#00000033] rounded-lg '>
              <p className='text-lg text-white font-semibold   '>VIEW</p>
              <FiEye className='text-3xl text-white'/>
            </div>
            
        </Link>
        <div className='px-4 pt-2 '>
            {item.rating?
            <Rating name="half-rating-read" dir='ltr' className='text-lg' value={item.rating} precision={0.1} readOnly />
            :
            null
            }
            <h2 className='font-semibold'>{item.title}</h2>

            <div className='flex justify-center gap-3 items-center mb-2'>
                <p className=' text-lg font-semibold'>{(item.price-(item.price*(item.discountPercentage/100))).toFixed(2)}</p>
                <p className='line-through text-lg font-semibold text-red-600'>{item.price}</p>
            </div>

        </div>
    </div>
    
    )
    }
    </>
  )
}
