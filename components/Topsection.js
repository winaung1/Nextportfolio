import React from 'react'

export const Topsection = () => {
  return (
    <div>
          <div className='top h-[40px] bg-gray-800 rounded-tl-lg rounded-tr-lg text-left flex gap-x-1 items-center justify-between px-2'>
            <div className='buttons flex gap-x-1 items-center justify-start px-2'>
              <button className='bg-red-400 w-3 h-3 rounded-full'></button>
              <button className='bg-green-400 w-3 h-3 rounded-full'></button>
              <button className='bg-blue-400 w-3 h-3 rounded-full'></button>
            </div>
            <p className='italic'>/C:users/desktop/winportfolio</p>
            <p></p>
          </div>
    </div>
  )
}
