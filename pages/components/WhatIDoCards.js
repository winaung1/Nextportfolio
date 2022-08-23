import React, { useEffect, useState } from 'react'

export const WhatIDoCards = ({WhatIDoTitle, IconWhatIDo, text}) => {
  return (
    <div className="what-cards md:py-4 text-gray-200 px-5 w-[350px] md:w-[300px] lg:w-[400px] lg:text-2xl mx-auto">
      <h1 className="text-xl font-bold mb-2 flex gap-x-3 py-5 items-center">
       <IconWhatIDo className='h-8 border-[1px] py-1 px-4'/>
       {WhatIDoTitle}
      </h1>
      <p>{text}</p>
    </div>
  )
}
