import React from 'react'
import { ExperienceCards } from './ExperienceCards'
import {
  BriefcaseIcon,
  SearchIcon,
  SupportIcon,
  BadgeCheckIcon

} from '@heroicons/react/outline';
import { Title } from './Title';

export const Experience = ({title}) => {
  return (
    <div className='road pb-20' id='experience'>
         <Title title={title}/>
      <h2 className='p-2 text-white text-center text-xl md:text-2xl ml-auto mr-auto max-w-2xl'>
        Thanks to my friend Ndri for letting me work on different projects when I was just starting.
        During our time together we completed many tasks, from easy to difficulty. <br/>
        I put about nine-months of time reworking the website to more modern looking website.
        I have learned a ton of skills while I was working. These are all the project I have touched on,
        for clients, and for business opportunities.
      </h2>
      <div className='relative w-full md:max-w-3xl mx-auto lg:px-10 lg:w-[1000px] lg:max-w-none'>
      <div className='absolute bg-[#009897] w-[2px] min-h-full lg:left-[531px] lg:block hidden'/>
        <li>
          <ExperienceCards 
            title='Icurus Restuarent' 
            info='Start-Up' 
            description='Working as a co-worker in this project leading the frontend of the website'
            dates='2021 - PRESENT'
            Icon={BriefcaseIcon}
            Icon2={BadgeCheckIcon}
          />
        </li>
        <li>
          <ExperienceCards 
            title='KSN' 
            info='Vlunteer' 
            description='I volunteer for Karen Society of Nebraska because they are looking to update
            their website to modern style'
            dates='2021 - 2021'
            Icon={BriefcaseIcon}
            Icon2={BadgeCheckIcon}
          />
        </li>
        <li>
          <ExperienceCards 
            title='Hulu 2.0' 
            info='Side Project'
            description='Simply made this website to pratice fetching api from a movie database.'
            dates='2021 - 2021'
            Icon={SupportIcon}
            Icon2={BadgeCheckIcon}
          />
        </li>
        <li>
          <ExperienceCards 
            title='First Portfolio Website' 
            info='Portfolio'
            description='I worked on this porfolio website when I was first started web development'
            dates='2021 - 2022'
            Icon={SearchIcon}
            Icon2={BadgeCheckIcon}
          />
        </li>
        <li>
          <div className='relative'>
            <ExperienceCards 
            title='Instagram' 
            info='Volunteer'
            description='Working as a co-worker in this project leading the frontend of the website'
            dates='2021 - PRESENT'
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