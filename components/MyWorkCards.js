import {useRef} from 'react'
import { useInView } from "framer-motion";



export const MyWorkCards = ({myText, IconImage, Demo, Code, Title, skills1, skills2, skills3, skills4, skills5}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref}  style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}  className='text-white py-10 px-7 overflow-x-hidden'>
        <img className='pb-5 rounded-lg object-cover w-full border-gray-600' src={IconImage}/>
        <div className='flex justify-between my-4 items-center'>
          <h1 className='font-bold text-2xl md:text-3xl'>{Title}</h1>
          <div className='space-x-2 flex ml-2'>
            <button className='rounded-md border-2 border-[#009897] text-[#009897] p-2 md:px-4 hover:bg-[#009897] hover:text-white'><a href={Demo} target='_blank' rel='noreferrer' className='flex relative'>DEMO</a></button>
            <button className='rounded-md border-2 border-[#009897] text-[#009897] p-2 md:px-4 hover:bg-[#009897]  hover:text-white'><a href={Code} target='_blank' rel='noreferrer' className='flex relative'>CODE</a></button>
          </div>
        </div>
        <p  style={{
      transform: isInView ? "none" : "translateX(200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
    }}  className='text-gray-300 overflow-x-hidden'>{myText}</p>
        <div className='flex flex-wrap gap-y-3 space-x-2 my-4 items-center'>
          <p className='bg-gray-600 px-3 rounded-lg text-gray-400 hover:text-white'>{skills1}</p>
          <p  className='bg-gray-600 px-3 rounded-lg text-gray-400 hover:text-white'>{skills2}</p>
          <p  className='bg-gray-600 px-3 rounded-lg text-gray-400 hover:text-white'>{skills3}</p>
          <p  className='bg-gray-600 px-3 rounded-lg text-gray-400 hover:text-white'>{skills4}</p>
          <p  className='bg-gray-600 px-3 rounded-lg text-gray-400 hover:text-white'>{skills5}</p>
        </div>
    </div>
  )
}
