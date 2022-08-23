import React from 'react'
import { Title } from './Title';
import { MyImage } from './MyImage';
export const About = ({title}) => {
  return (
    <div className=' bg-gray-800 px-5 text-lg min-h-screen text-gray-300 pb-10' id='about'>
      <Title title={title}/>
      <div className='lg:flex items-center lg:w-[990px] lg:mx-auto lg:my-40'>

          <p className='pb-5 leading-normal md:px-5 md:text-2xl max-w-4xl ml-auto mr-auto lg:w-[800px]'>
            My name is Win Aung. I am from Thailand refugee camp. 
            I am a self-taught developer. 
            I have worked on many projects to expand my skills as a front-end developer. 
            I work hard everyday regardless, I used to like going out and stuff,
            now I have been obsessed with making websites because I see many opportunities. 
            I work hard because I know I can do great things one day. I can be creative,
            this is the only field that I can play and expand my skills.
          </p>
            <MyImage Image={'/my.jpg'} />
      </div>
    </div>
  )
}