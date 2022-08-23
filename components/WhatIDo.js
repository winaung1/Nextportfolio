import React from 'react'
import { Title } from './Title'
import { WhatIDoCards } from './WhatIDoCards'
import {
 CodeIcon,
 PencilIcon,
 BriefcaseIcon,
 TerminalIcon,

} from '@heroicons/react/outline';
import { Lines } from './Lines';

export const WhatIDo = ({title}) => {
  return (
    <div className='min-h-screen office py-10' id='whatido'>
        <Title title={title}/>
        <div className='relative md:flex md:flex-wrap mx-auto py-10 my-auto max-w-6xl md:px-[83px]'>
          <WhatIDoCards
            WhatIDoTitle='WEB DEVELOPMENT' 
            IconWhatIDo={CodeIcon}
            text="I use HTML with Tailwind css, because it is easier to style
            things without leaving the html tag. I like to make my life easier when I can.
            I do alot of project work with Tailwind css."
          />
          <WhatIDoCards 
            WhatIDoTitle='RESPONSIVE DESIGN' 
            IconWhatIDo={PencilIcon}
            text="Using a website that is not responsive is frustrating for users
            I had the opportunity to use a website that I really want to get informations off of,
            but reading the website is hard, I ended up leaving the site because I would have to zoom in and out."
          />
          <Lines/>
          <WhatIDoCards 
          WhatIDoTitle='ENTREPRENUER' 
          IconWhatIDo={BriefcaseIcon}
          text="Many of the projects I do, I'm working on to work for myself in the comfort of my own house.
          I'm passinoate and woke up everyday to do what needs to be done.
          Coming up with ideas is hard but I'm not afraid to try different things.
          "
          />
          <WhatIDoCards 
          WhatIDoTitle='EXPERIMENTAL DESIGN'  
          IconWhatIDo={TerminalIcon}
          text="Alot of what I do is making different projects and keep on learning to improve my skills.
          So I test out different design and skills set to see what speed and accuracy of the results.
          "
        />

        
        </div>
    </div>
  )
}
