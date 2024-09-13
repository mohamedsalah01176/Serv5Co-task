/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "./component/Card"
import NoFound from "./component/NoFound"
import Pagination from "./component/Pagination"
import Title from "./component/Title"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function page(params:any) {
  let token=process.env.NEXT_PUBLIC_TOKEN 
  let URL=process.env.NEXT_PUBLIC_URL
  let numSkipProduct=params.searchParams.numSkip?params.searchParams.numSkip:0
  let searchText=params.searchParams.str?params.searchParams.str:""
  let res=await fetch(`${URL}/products?limit=${searchText !== ""?250:50}&skip=${numSkipProduct}`,{method:"GET",
    headers:{
      'Authorization':`Bearer ${token}`,
      'Content-Type': 'application/json' 
  },
  next:{revalidate:240}//second
  }
  )
  let data=await res.json()
  let products=data.products
  let searchByTitle=products.filter((item:any)=>item.title.toLowerCase().indexOf(searchText) !== -1 )
  let data2=searchByTitle.length >0? searchByTitle:products
  return (
    <div>
      <Title title={"products"}/> 
      {products.length >0?
        <div className='mb-7'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-10 xl:p-20 mt-5 '>
          <Card data={data2}/>
          </div>
          {searchText?
            null
          :
          <Pagination numberItems={data.total}/>
          }
        </div>
      :
      <>
        <NoFound title={searchText}/>
      </>
      
  
       }
    </div>
  
  );
}
