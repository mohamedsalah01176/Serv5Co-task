
interface props{
    title:string
}

export default function NoFound({title}:props) {
  return (
    <div className='text-4xl flex justify-center items-center text-red-600 font-semibold'>No Found Product for {title}</div>
  )
}
