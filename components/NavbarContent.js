import {useState, useEffect} from 'react';
import { Link } from 'react-scroll'

function NavbarContent({
      setActiveLink,
    }) {
   const [isSet, setIsSet] = useState(false);

   const handleClick = () => {
         setIsSet(current => !current);
   }

   const [clientWindowHeight, setClientWindowHeight] = useState(false);

   const handleScroll = () => {
       setClientWindowHeight(window.scrollY);
       if(window.scrollY > 100){
         setClientWindowHeight(true)
       }
   };
 
   useEffect(() => {
     window.addEventListener("scroll", handleScroll); 
     return () => window.removeEventListener("scroll", handleScroll);
   });
  return (
    <div className={`${clientWindowHeight ? 'bg-[#035959]' : ''} fixed text-xl py-5 text-white top-0 left-0 w-full z-[150] bg-transparent flex items-center justify-between px-5`}>
      {/* <h1 className='absolute -top-96 left-0'>{clientWindowHeight}</h1> */}
       <li className='cursor-pointer list-none hover:text-[#009897]'>
            <Link onClick={() => setActiveLink('home')} to={"home"} smooth={true} duration={1000}><div><span>Win Portfolio</span></div></Link>
      </li>
      <div onClick={handleClick} className="group menu-bar cursor-pointer md:hidden flex justify-between gap-1 transform rotate-[90deg]">
            <div className='bg-white group-hover:bg-[#009897] w-[2px] h-2'></div>
            <div className='bg-white group-hover:bg-[#009897] w-[2px] h-3'></div>
            <div className='bg-white group-hover:bg-[#009897] w-[2px] h-4'></div>
            <div className='bg-white group-hover:bg-[#009897] w-[2px] h-5'></div>
      </div>
        <ul className={`${isSet ? 'fixed top-12 right-10 bg-[#035959] w-40 h-50 px-10 rounded-lg' : 'hidden'} md:flex items-center gap-5`}>
          <li className="cursor-pointer hover:text-[#009897]">
              <Link onClick={() => setActiveLink('home')} to={"home"} smooth={true} duration={1000}><div><span>Home</span></div></Link>
          </li>
           <li className="cursor-pointer hover:text-[#009897]">
              <Link onClick={() => setActiveLink('about')} to={"about"} smooth={true} duration={1000}><div><span>About</span></div></Link>
          </li>
          
          <li className="cursor-pointer hover:text-[#009897]">
                <Link onClick={() => setActiveLink('whatido')} to={"whatido"} smooth={true} duration={1000}><div><span>WhatIDo</span></div></Link>
          </li>
          <li className="cursor-pointer hover:text-[#009897]">
                <Link onClick={() => setActiveLink('skills')} to={"skills"} smooth={true} duration={1000}><div><span>Skills</span></div></Link>
          </li>
          <li className="cursor-pointer hover:text-[#009897]">
                <Link onClick={() => setActiveLink('experience')} to={"experience"} smooth={true} duration={1000}><div><span>Experience</span></div></Link>
          </li>
          <li className="cursor-pointer hover:text-[#009897]">
                <Link onClick={() => setActiveLink('mywork')} to={"mywork"} smooth={true} duration={1000}><div><span>MyWork</span></div></Link>
          </li>
          <li className="cursor-pointer hover:text-[#009897]">
                <Link onClick={() => setActiveLink('contact')} to={"contact"} smooth={true} duration={1000}><div><span>Contact</span></div></Link>
          </li>
        </ul>
    </div>
  )
}

export default NavbarContent