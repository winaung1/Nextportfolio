import React from 'react'

export const MyImage = ({Image}) => {
  return (
    <div className='mx-auto max-w-4xl'>
        <img className='rounded-lg mx-auto h-[400px] w-[600px] object-cover' src={Image}/>
    </div>
  )
}
