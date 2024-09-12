/* eslint-disable @typescript-eslint/no-explicit-any */
import ShowItem from "../component/ShowItem"




export default async function Page(params:any) {
    const id=params.params.item
    const token=process.env.NEXT_PUBLIC_TOKEN
    const URL=process.env.NEXT_PUBLIC_URL


    const res= await fetch(`${URL}/products/${id}`,{method:"GET",
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json' 
        },
        next:{revalidate:120}
    })
    const product=await res.json()

        return (
          <div className='w-[80%] mx-auto flex justify-center items-center flex-col sm:flex-row gap-7 mt-4 p-4'>

            <ShowItem product={product}/>

          </div> 
        )
}
