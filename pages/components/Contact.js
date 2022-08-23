import React from 'react'
import { Title } from './Title';
export const Contact = ({title}) => {
  return (
    <div className='home min-h-screen pt-10 p-5' id='contact'>
       <Title title={title}/>
      <form className='flex flex-col item-center min-h-screen justify-center ml-auto mr-auto max-w-xl text-white font-bold text-2xl'>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div className='relative'>
              <input type="text" id="first_name" class="block bg-transparent rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm border-0 border-b-[3px] appearance-none dark:focus:border-[#009897] focus:outline-none focus:ring-0 focus:border-[#009897] peer" placeholder=" " />
              <label for="first_name" class="absolute text-xl duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-[#009897] peer-focus:dark:text-[#009897] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">First Name</label>
            </div>
            <div className='relative'>
              <input type="text" id="last_name" class="block bg-transparent rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm  border-0 border-b-[3px] dark:focus:border-[#009897] focus:outline-none focus:ring-0 focus:border-[#009897] peer" placeholder=" " />
              <label for="last_name" class="absolute text-xl duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-[#009897] peer-focus:dark:text-[#009897] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Last Name</label>
            </div>
            <div className='relative'>
              <input type="text" id="phone" class="block bg-transparent rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm border-0 border-b-[3px] appearance-none dark:focus:border-[#009897] focus:outline-none focus:ring-0 focus:border-[#009897] peer" placeholder=" " />
              <label for="phone" class="absolute text-xl duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-[#009897] peer-focus:dark:text-[#009897] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Phone Number</label>
            </div>
            <div className='relative'>
              <input type="email" id="email" class="block bg-transparent rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm border-0 border-b-[3px] appearance-none dark:focus:[#009897] focus:outline-none focus:ring-0 focus:border-[#009897] peer" placeholder=" " />
              <label for="email" class="absolute text-xl duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-[#009897] peer-focus:dark:text-[#009897] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Email Address</label>
            </div>
            
          
          </div>
          
          <button type="submit" class="text-[#009897] text-2xl bg-transparent border-[3px] border-[#009897] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>

    </div>
  )
}
