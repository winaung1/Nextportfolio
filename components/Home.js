import {useRef} from 'react'
// import './Home.css'
import { Topsection } from './Topsection';
import { Bodysection } from './Bodysection';
import { useInView } from "framer-motion";

export const Home = ({homeRef}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);


  return (
    <div ref={homeRef} className="home relative flex justify-center items-center text-white font-medium  text-sm  py-2.5 text-center min-h-screen w-full" id='home'>
        <div className='text-gray-500'>
         <div ref={ref}  style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
            <Topsection/>
            <Bodysection />
          </div>
        </div>
    </div>
  )
}

