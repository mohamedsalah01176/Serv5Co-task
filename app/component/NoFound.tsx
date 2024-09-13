<<<<<<< HEAD
=======

>>>>>>> ec22de1c62b0c1b294def209744749cbaec1ca8f
interface props{
    title:string
}

export default function NoFound({title}:props) {
  return (
    <div className='text-4xl flex justify-center items-center text-red-600 font-semibold'>No Found Product for {title}</div>
  )
}
