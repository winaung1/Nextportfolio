import { useInView } from "framer-motion";
import {useRef} from 'react'
export const WhatIDoCards = ({WhatIDoTitle, IconWhatIDo, text}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="what-cards md:py-4 text-gray-200 px-5 w-[350px] md:w-[300px] lg:w-[400px] lg:text-2xl mx-auto">
      <h1 style={{
              
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }} className="text-xl font-bold mb-2 flex gap-x-3 py-5 items-center">
       <IconWhatIDo className='h-8 border-[1px] py-1 px-4'/>
       {WhatIDoTitle}
      </h1>
      <p ref={ref} style={{
              
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>{text}</p>
    </div>
  )
}
