import React from 'react'

export const Tools = ({toolsTitle, IconTool}) => {
  return (
    <div className='text-white'>
        <div className='flex items-center space-x-2'>
            <IconTool className='h-5'/>
            <p className='text-[12px]'>{toolsTitle}</p>
        </div>
    </div>
  )
}
