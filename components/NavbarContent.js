
import { Link } from 'react-scroll'

function NavbarContent({
      setActiveLink,
    }) {
   
  return (
    <div className="fixed text-xl pt-5 text-white top-0 left-0 w-full z-[150] bg-transparent flex items-center justify-around">
          <div>
                <h1>Win Portfolio</h1>
          </div>
        <ul className="flex items-center gap-5">
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