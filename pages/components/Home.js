import React, { useState } from 'react'
// import './Home.css'
import { Topsection } from './Topsection';
import { Bodysection } from './Bodysection';

export const Home = (props) => {

  return (
    <div className="home relative flex justify-center items-center text-white font-medium  text-sm  py-2.5 text-center min-h-screen w-full" id='home'>
        <div className='text-gray-500'>
         <div>
            <Topsection/>
            <Bodysection />
          </div>
        </div>
    </div>
  )
}

