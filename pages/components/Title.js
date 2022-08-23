import React from 'react'

export const Title = ({title}) => {
  return (
    <div className='pt-5'>
     <h1 className='text-5xl text-center text-bold text-white py-1 pb-10'>{title}</h1>
     <hr className='ml-auto mr-auto w-40 h-1 bg-[#009897] mb-5'/>
    </div>
  )
}
