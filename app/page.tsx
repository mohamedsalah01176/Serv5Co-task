import Card from "./component/Card"
import NoFound from "./component/NoFound"
import Pagination from "./component/Pagination"
import Title from "./component/Title"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function page(params:any) {
  const token=process.env.NEXT_PUBLIC_TOKEN 
  const URL=process.env.NEXT_PUBLIC_URL
  const numSkipProduct=params.searchParams.numSkip?params.searchParams.numSkip:0
  const res=await fetch(`${URL}/products?limit=50&skip=${numSkipProduct}`,{method:"GET",
    headers:{
      'Authorization':`Bearer ${token}`,
      'Content-Type': 'application/json' 
  },
  next:{revalidate:120}//second
  }
  )
  const data=await res.json()
  const products=data.products
  return (
    <div>
      <Title title={"products"}/>
      {products.length >0?
        <div className='mb-7'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-10 xl:p-20 mt-5 '>
          <Card data={products}/>
          </div>
          <Pagination numberItems={data.total}/>
        </div>
      :
      <>
        <NoFound title={'product Search'}/>
      </>
  
       }
    </div>
  
  );
}
