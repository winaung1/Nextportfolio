import {useRef, useEffect} from 'react'
// import './Home.css'
// import { Topsection } from './Topsection';
// import { Bodysection } from './Bodysection';
import { useInView } from "framer-motion";
// import Image from 'next/image';

export const Home = ({homeRef}) => {
  const ref = useRef(null);
  const paraRef = useRef(null);
  const firstImgRef = useRef(null);
  const secondImgRef = useRef(null);
  const isInView = useInView(ref);

  const scrolled = () => {
    let value = window.scrollY;
    // firstImgRef.style.top = value * 0.7 + 'px';
    firstImgRef.current.style.top = value * 0.7 + 'px';
    secondImgRef.current.style.bottom = value * 0.5 + 'px';
    paraRef.current.style.top = value * 1 + 'px';
    // secondImgRef.style.top = value * 0.7 + 'px';
    // paraRef.style.top = value * 0.7 + 'px';
  }

  useEffect(() => {
    window.addEventListener('scroll', scrolled)
  })

  return (
    <div ref={homeRef} id='home'>
        <div className='text-gray-500'>
         <div  ref={ref} className='background-gradient overflow-hidden'>
            {/* <Topsection/>
            <Bodysection /> */}
            <p ref={paraRef}           
            style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} >FRONTEND WEB DEVELOPER</p>
            <img id='fistImg' ref={firstImgRef} src='/pexels-johannes-plenio-1423600.jpg'/>
            <img id='secondImg'  ref={secondImgRef} src='/last.png'/>
          </div>
        </div>
    </div>
  )
}

