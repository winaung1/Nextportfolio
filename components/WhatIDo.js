import {useRef} from 'react'
import { Title } from './Title'
import { WhatIDoCards } from './WhatIDoCards'
import {
 CodeIcon,
 PencilIcon,
 BriefcaseIcon,
 TerminalIcon,

} from '@heroicons/react/outline';
import { Lines } from './Lines';
import { useInView } from "framer-motion";

export const WhatIDo = ({title, whatidoRef}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={whatidoRef} className='min-h-screen office py-10' id='whatido'>
        <Title title={title}/>
        <div className='px-5 relative md:flex md:flex-wrap mx-auto py-10 my-auto max-w-6xl md:px-[83px]'>
          <WhatIDoCards
            ref={ref}
            WhatIDoTitle='WEB DEVELOPMENT' 
            IconWhatIDo={CodeIcon}
            text="
            I use VS code, Tailwind css, Next js, and third party api/packages almost everyday when I'm developing a site or a software.
            I rely heavily on time and accuracy by using something people had already done and tested it through many trails and errors.
            "
            stylea={{
              
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          />
          <WhatIDoCards 
            WhatIDoTitle='RESPONSIVE DESIGN' 
            IconWhatIDo={PencilIcon}
            text="
            Modern day website is not like the decades ago. 
            Things changed. More and more people starting using mobile phone
            almost everyday, better yet 15-20 hours a day. 
            "
          />
          <Lines/>
          <WhatIDoCards 
          WhatIDoTitle='ENTREPRENUER' 
          IconWhatIDo={BriefcaseIcon}
          text="
          I have the entreprenuerial mindset. I'm also open to new ideas.
          Things always changes in the entrepreneurial world. I've learned to let go and not get attached to a fail idea.
          I took that failure as a next step to improve it.
          "
          />
          <WhatIDoCards 
          WhatIDoTitle='EXPERIMENTAL'  
          IconWhatIDo={TerminalIcon}
          text="
            I'm always learning on how to do things better than the last time. I have the confidence that I can do any tasks
            because I do have the experience by repeatedly trying the same thing over and over again.
          "
        />

      
        </div>
    </div>
  )
}
