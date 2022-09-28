
import { Link } from 'react-scroll'

function NavbarContent({
      setActiveLink, 
      activeLink, 
      setHidden, 
      myAboutIsVisible, 
      myHomeIsVisible, 
      myExperienceIsVisible, 
      myWhatidoIsVisible,
      mySkillsIsVisible,
      myWorkIsVisible,
      myContactIsVisible}) {
   
  return (
    <aside className="md:fixed md:right-0 md:top-96 z-50 w-32 fixed top-0 opacity-100 hover:opacity-100" aria-label="Sidebar">
    <div className="overflow-y-auto py-4 text-white px-3  rounded bg-transparent">
        <ul className="space-y-2">
          <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
              <Link onClick={() => setActiveLink('home')} to={"home"} smooth={true} duration={1000} className={myHomeIsVisible ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span className="ml-3 hidden group-hover:block">Home</span></div></Link>
          </li>
           <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
              <Link onClick={() => setActiveLink('about')} to={"about"} smooth={true} duration={1000} className={myAboutIsVisible ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2' ><span className='ml-3 hidden group-hover:block'>About</span></div></Link>
          </li>
          
          <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
                <Link onClick={() => setActiveLink('whatido')} to={"whatido"} smooth={true} duration={1000} className={myWhatidoIsVisible ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span className="ml-3 hidden group-hover:block">WhatIDo</span></div></Link>
          </li>
          <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
                <Link onClick={() => setActiveLink('skills')} to={"skills"} smooth={true} duration={1000} className={mySkillsIsVisible ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span  className="ml-3 hidden group-hover:block">Skills</span></div></Link>
          </li>
          <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
                <Link onClick={() => setActiveLink('experience')} to={"experience"} smooth={true} duration={1000} className={myExperienceIsVisible ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span className="ml-3 hidden group-hover:block">Experience</span></div></Link>
          </li>
          <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
                <Link onClick={() => setActiveLink('mywork')} to={"mywork"} smooth={true} duration={1000} className={myWorkIsVisible ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span className="ml-3 hidden group-hover:block">MyWork</span></div></Link>
          </li>
          <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
                <Link onClick={() => setActiveLink('contact')} to={"contact"} smooth={true} duration={1000} className={myContactIsVisible ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span className="ml-3 hidden group-hover:block">Contact</span></div></Link>
          </li>
        </ul>
    </div>
  </aside>
  )
}

export default NavbarContent