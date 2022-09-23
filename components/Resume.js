import React from 'react'
import Link from 'next/link'
export const Resume = ({Icon}) => {

  return (
    <div className='group h-24 bg-[#009897] flex gap-x-3 justify-center items-center text-white text-xl'>
      <Link href="/myresume/Win_Aung_Resume_3 (3).pdf">
        <a target="_blank" className='flex items-center' download>
          <h1 className='group-hover:text-gray-300 group-hover:cursor-pointer'>VIEW MY RESUME </h1>
          <Icon className='group-hover:text-gray-300  group-hover:cursor-pointer h-9'/>
        </a>
      </Link>
    </div>
  )
}
