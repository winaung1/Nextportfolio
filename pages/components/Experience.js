import React from 'react'
import { ExperienceCards } from './ExperienceCards'
import {
  BriefcaseIcon,
  HomeIcon,
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
        Thanks to my friend N'dri for letting me work on different projects when I was just starting.
        During our time together we completed many tasks, from easy to difficulty. <br/>
        I put about nine-months of time reworking the website to more modern looking website.
        I've learned a ton of skills while I was working. These are all the project I've touched on,
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
            title='PINAV' 
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
            info='Volunteer'
            description='Working as a co-worker in this project leading the frontend of the website'
            dates='2021 - PRESENT'
            Icon={SupportIcon}
            Icon2={BadgeCheckIcon}
          />
        </li>
        <li>
          <ExperienceCards 
            title='Facebook' 
            info='Volunteer'
            description='Working as a co-worker in this project leading the frontend of the website'
            dates='2021 - PRESENT'
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