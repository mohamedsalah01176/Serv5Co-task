
interface props{
    title: string; 
}
export default function Title({title}:props) {
<<<<<<< HEAD
=======

>>>>>>> ec22de1c62b0c1b294def209744749cbaec1ca8f
  return (
    <div className='text-center mt-10 mb-10 relative'>
      <span className=' text-5xl sm:text-7xl  font-bold text-[#eee]'>{title}</span>
      <h1 className='absolute text-3xl sm:text-5xl  font-semibold   top-[25%] left-[50%] translate-x-[-50%]'>{title}</span>
    </div>
  )
}
