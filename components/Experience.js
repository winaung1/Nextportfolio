import React from 'react'
import { ExperienceCards } from './ExperienceCards'
import {
  BriefcaseIcon,
  SearchIcon,
  SupportIcon,
  BadgeCheckIcon

} from '@heroicons/react/outline';
import { Title } from './Title';

export const Experience = ({title, experienceRef}) => {
  return (
    <div ref={experienceRef} className='road pb-10 min-h-screen' id='experience'>
         <Title title={title}/>
      <h2 className='p-2 text-white text-center text-xl md:text-2xl ml-auto mr-auto max-w-2xl'>
       These are my experience timeline to show case as to how long I've worked on these projects.
       Some project takes longer than the other due to the functionalities we are trying to implements.
      </h2>
      <div className='relative w-full md:max-w-3xl mx-auto lg:px-10 lg:w-[1000px] lg:max-w-none'>
      <div className='absolute bg-[#009897] w-[2px] min-h-full lg:left-[531px] lg:block hidden'/>
        <li className='list-none'>
          <ExperienceCards 
            title='Icurus Restuarent' 
            info='Start-Up' 
            description='Working as a co-worker in this project leading the frontend of the website'
            dates='Oct. 2021 - PRESENT'
            Icon={BriefcaseIcon}
            Icon2={BadgeCheckIcon}
          />
        </li>
        <li className='list-none'>
          <ExperienceCards 
            title='KSN' 
            info='Vlunteer' 
            description='I volunteer for Karen Society of Nebraska because they are looking to update
            their website to modern style'
            dates='Jan. 2021 - Feb. 2021'
            Icon={BriefcaseIcon}
            Icon2={BadgeCheckIcon}
          />
        </li>
        <li className='list-none'>
          <ExperienceCards 
            title='Hulu 2.0' 
            info='Side Project'
            description='Simply made this website to pratice fetching api from a movie database.'
            dates='Mar. 2021 - Mar. 2021'
            Icon={SupportIcon}
            Icon2={BadgeCheckIcon}
          />
        </li>
        <li className='list-none'>
          <ExperienceCards 
            title='First Portfolio Website' 
            info='Portfolio'
            description='I worked on this porfolio website when I was first started web development'
            dates='Oct. 2021 - Jan. 2022'
            Icon={SearchIcon}
            Icon2={BadgeCheckIcon}
          />
        </li>
        <li className='list-none'>
          <div className='relative'>
            <ExperienceCards 
            title='Vanderhall' 
            info='Full-time'
            description='I worked at Vanderhall Motor Works, using most PHP, Codeigniter4,
            Mysql and Javascript. I implented a feature that keep track of how many cars
            has been in production.'
            dates='Sep. 2022 - DEC. 2022'
            Icon={SearchIcon}
            Icon2={BadgeCheckIcon}
            />
            <div className='arrow-down absolute left-7 lg:left-[63px]'/>
          </div>
        </li>

      </div>
    </div>
  )
}