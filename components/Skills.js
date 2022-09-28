import { useEffect} from 'react'
import { SkillsCard } from './SkillsCard'
import { Title } from './Title'

import {
 CogIcon,
 SearchIcon,
 CheckIcon,
 PaperAirplaneIcon
} from '@heroicons/react/outline';
import { Tools } from './Tools';
import { FaReact, FaHtml5, FaCss3} from 'react-icons/fa';
import Image from 'next/image';


export const Skills = ({title, skillsRef}) => {

  return (
    <div className='h-[900px] bg-gray-800 items-center justify-center gap-x-10 relative' id='skills'>
        <div ref={skillsRef} className=''>
        <Title title={title}/>
          <p className=' w-80 mx-auto flex items-center space-x-2 text-white'><CogIcon className='h-7'/><span className='text-2xl font-bold'>DEVELOPMENT</span></p>
          <div className='mx-auto gap-x-5 w-72 h-72 grid grid-cols-3 md:max-w-sm items-center justify-center mt-2'>
            <SkillsCard skillsTitle={<FaReact/>} animation="animate-spin" background="text-[#61DBFB]"/>
            <SkillsCard skillsTitle={<Image src="/SkillsImagesLogo/axios-removebg-preview(1).png" width={180} height={140} objectFit="cover"/>}/>
            <SkillsCard skillsTitle={<Image src="/SkillsImagesLogo/express-js-tutorial-removebg-preview.png" width={180} height={140} objectFit="cover"/>}/>
            <SkillsCard skillsTitle={<Image src="/SkillsImagesLogo/download-removebg-preview(1).png" width={180} height={140} objectFit="cover"/>}/>
            <SkillsCard skillsTitle={<Image src="/SkillsImagesLogo/node-removebg-preview.png" width={180} height={140} objectFit="cover"/>}/>
            <SkillsCard skillsTitle={<FaHtml5 className='text-[#f06529]'/>}/>
            <SkillsCard skillsTitle={<Image src="/SkillsImagesLogo/download__1_-removebg-preview.png" width={180} height={140} objectFit="cover"/>}/>
            <SkillsCard skillsTitle={<FaCss3 className='text-[#2965f1]'/>}/>
            <SkillsCard skillsTitle={<Image src="/SkillsImagesLogo/images-removebg-preview.png" width={120} height={70} objectFit="contain"/>}/>
          </div>
        </div>
      <div className='flex justify-center space-x-10 pb-20'>
        <div>
          <p className='pt-10 flex items-center space-x-2 text-white'><PaperAirplaneIcon className='h-7'/><span className='text-2xl font-bold'>DESIGN</span></p>
          <div className='pt-2 space-y-5 mt-4 text-white'>
            <Image src="/SkillsImagesLogo/2101px-Adobe_Photoshop_Express_logo.svg-removebg-preview.png" width={80} height={80}/>
          </div>
        </div>
        <div>
          <p className='pt-10  flex justify-center items-center space-x-2 text-white'><SearchIcon className='h-7'/><span className='text-2xl font-bold'>TOOLS</span></p>
          <div className='pt-2 mx-auto space-y-5 mt-4 w-40'>
            <Tools toolsTitle='Git + GitHub' IconTool={CheckIcon}/>
            <Tools toolsTitle='Commandline' IconTool={CheckIcon}/>
            <Tools toolsTitle='Chrome DevTools' IconTool={CheckIcon}/>
          </div>
        </div>
      </div>
      <div className='w-[500px] absolute top-[20%] left-0 h-[50px] bg-[#009897]/10 -skew-y-12 overflow-hidden'></div>
      <div className='w-[400px] absolute top-[30%] left-0 h-[50px] bg-[#F7AB0A]/10 -skew-y-12 overflow-hidden'></div>
      <div className='w-[300px] absolute top-[40%] left-0 h-[50px] bg-[#009897]/10 -skew-y-12 overflow-hidden'></div>
      <div className='w-[200px] absolute top-[50%] left-0 h-[50px] bg-[#F7AB0A]/10 -skew-y-12 overflow-hidden'></div>
      <div className='w-[500px] absolute top-[20%] right-0 h-[50px] bg-[#009897]/10 skew-y-12 overflow-hidden'></div>
      <div className='w-[400px] absolute top-[30%] right-0 h-[50px] bg-[#F7AB0A]/10 skew-y-12 overflow-hidden'></div>
      <div className='w-[300px] absolute top-[40%] right-0 h-[50px] bg-[#009897]/10 skew-y-12 overflow-hidden'></div>
      <div className='w-[200px] absolute top-[50%] right-0 h-[50px] bg-[#F7AB0A]/10 skew-y-12 overflow-hidden'></div>
    </div>
  )
}
