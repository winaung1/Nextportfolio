import React from 'react'
export const Resume = ({Icon}) => {

  return (
    <div className='group h-24 bg-[#009897] flex gap-x-3 justify-center items-center text-white text-xl'>
        <h1 className='group-hover:text-gray-300 group-hover:cursor-pointer'>VIEW MY RESUME </h1>
        <Icon className='group-hover:text-gray-300  group-hover:cursor-pointer h-9'/>
    </div>
  )
}
