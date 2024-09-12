import Link from 'next/link'

export default function FloatLinks({openLinks}:{openLinks:boolean}) {
    return (
        <div className={`${openLinks?'opacity-1 scale-100':'opacity-0 -order-5 scale-0 -translate-y-52  translate-x-32 '} absolute top-[80px] right-[0%]  bg-black p-5 text-white w-[350px] rounded-lg transition-all duration-700 z-10`}>
            <div className={` absolute  top-[-35px] right-[5%] `} style={{borderWidth:"20px" ,borderStyle:"solid",borderColor:"transparent transparent black transparent"}}></div>
            <ul className=' items-center gap-3 text-lg font-semibold flex flex-col  lg:hidden'>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/home">home</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/products">products</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/about">aboutUs</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/offers">offers</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/blog">blog</Link>
                    </li>
                    <li className='hover:scale-110 transition-all duration-300'>
                        <Link href="/connectUs">contactUs </Link>
                    </li>
                </ul>
        </div>
      )
}
