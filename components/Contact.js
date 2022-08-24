import React from 'react'
import { Title } from './Title';
export const Contact = ({title}) => {

  return (
    <div className='home min-h-screen pt-10 p-5' id='contact'>
       <Title title={title}/>
      <form action='POST' data-netlify="true" className='flex flex-col item-center min-h-screen justify-center ml-auto mr-auto max-w-xl text-white font-bold text-2xl'>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className='relative'>
              <input name='first_name'  type="text" id="first_name" className="block bg-transparent rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm border-0 border-b-[3px] appearance-none dark:focus:border-[#009897] focus:outline-none focus:ring-0 focus:border-[#009897] peer" placeholder=" " />
              <label htmlFor="first_name" className="absolute text-xl duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-[#009897] peer-focus:dark:text-[#009897] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">First Name</label>
            </div>
            <div className='relative'>
              <input name='last_name' type="text" id="last_name" className="block bg-transparent rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm  border-0 border-b-[3px] dark:focus:border-[#009897] focus:outline-none focus:ring-0 focus:border-[#009897] peer" placeholder=" " />
              <label htmlFor="last_name" className="absolute text-xl duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-[#009897] peer-focus:dark:text-[#009897] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Last Name</label>
            </div>
            <div className='relative'>
              <input name='phone' type="text" id="phone" className="block bg-transparent rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm border-0 border-b-[3px] appearance-none dark:focus:border-[#009897] focus:outline-none focus:ring-0 focus:border-[#009897] peer" placeholder=" " />
              <label htmlFor="phone" className="absolute text-xl duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-[#009897] peer-focus:dark:text-[#009897] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Phone Number</label>
            </div>
            <div className='relative'>
              <input name='email'  type="email" id="email" className="block bg-transparent rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm border-0 border-b-[3px] appearance-none dark:focus:[#009897] focus:outline-none focus:ring-0 focus:border-[#009897] peer" placeholder=" " />
              <label htmlFor="email" className="absolute text-xl duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-[#009897] peer-focus:dark:text-[#009897] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Email Address</label>
            </div>
            
          
          </div>
          
          <button className="text-[#009897] text-2xl bg-transparent border-[3px] border-[#009897] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>

    </div>
  )
}