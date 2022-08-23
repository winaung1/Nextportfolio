import React from 'react'

export const Bodysection = () => {


  const w = ['{', '}']
  const numbers = [];
  for(let i = 1; i < 22; i++){
    numbers.push(i)
  }

  return (
    <div>
         <div className='body flex gap-x-3 md:gap-x-10 leading-normal p-2  h-[500px] bg-[#030f1e] rounded-bl-lg rounded-br-lg '>
            <div>
              {numbers.map(num => <p>{num}</p>)}
            </div>
            <div className='text-left md:text-lg'>
              <p className='text-gray-700 pb-2 md:pb-4'>/* Welcome to my portfolio website! */</p>
              <h1 className='flex gap-x-2 text-white'><span className='text-[#009897]'>#INTRO</span>{w[0]}</h1>
              <div className='pl-2 py-5 text-white leading-10'>
                <p><span className='text-yellow-500'>Name:</span> Win Aung</p>
                <p><span className='text-yellow-500'>Occupation:</span> Frontend Developer</p>
                <p><span className='text-yellow-500'>Country:</span> Thailand</p>
                <p><span className='text-yellow-500'>Location:</span> SLC, UT</p>
                <p><span className='text-yellow-500'>Interesting Fact:</span> I love to play soccer during my free time, it is the only sport that get me to
                 loose weight without thinking that I'm actually exercising. It is the best!</p>
              </div>
              <h1 className='flex gap-x-2 text-white'> {w[1]}</h1>
              <p></p>
            </div>
          </div>
    </div>
  )
}
