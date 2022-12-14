import { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Resume } from "../components/Resume";
import {
  DownloadIcon,
} from '@heroicons/react/outline';
import { Mywork } from "../components/Mywork";
import { Skills } from "../components/Skills";
import { WhatIDo } from "../components/WhatIDo";
import EmailSuccess from '../components/emailsucess/EmailSuccess';

function Container() {

    const [activeLink, setActiveLink] = useState('home');
    const [hidden, setHidden] = useState(false);
    const [handleSubmit,setHandleSumbit] = useState(false);
    const {ref: homeRef, inView: myHomeIsVisible} = useInView();
    const {ref: aboutRef, inView: myAboutIsVisible} = useInView();
    const {ref: whatidoRef, inView: myWhatidoIsVisible} = useInView();
    const {ref: experienceRef, inView: myExperienceIsVisible} = useInView();
    const {ref: skillsRef, inView: mySkillsIsVisible} = useInView();
    const {ref: myworkRef, inView: myWorkIsVisible} = useInView();
    const {ref: contactRef, inView: myContactIsVisible} = useInView();
   
  return (
    <div>
      {handleSubmit ? <EmailSuccess setHandleSubmit={setHandleSumbit}/>: 
      <div className="min-w-[360px] p-0 m-0 overflow-hidden">
             {/* <p className='fixed top-0 z-50 text-white left-40'>cursor: {cursor}</p> */}
        <Navbar 
        myContactIsVisible={myContactIsVisible} 
        myHomeIsVisible={myHomeIsVisible}
        myExperienceIsVisible={myExperienceIsVisible}
        myWhatidoIsVisible={myWhatidoIsVisible}
        mySkillsIsVisible={mySkillsIsVisible}
        myWorkIsVisible={myWorkIsVisible}
        myAboutIsVisible={myAboutIsVisible} 
          setHidden={setHidden} 
          hidden={hidden} 
          activeLink={activeLink} 
          setActiveLink={setActiveLink}/>
        <Home homeRef={homeRef}/>
        <About aboutRef={aboutRef} title="About"/>
        <WhatIDo whatidoRef={whatidoRef} title='What I Do'/>
        <Skills skillsRef={skillsRef} title='Skills'/>
        <Experience experienceRef={experienceRef} title='Experience'/>
        <Resume Icon={DownloadIcon}/>
        <Mywork myworkRef={myworkRef}  title='My Work'/>
        <Contact contactRef={contactRef} title='Contact' handleSubmit={handleSubmit} setHandleSumbit={setHandleSumbit}/>

      </div>
    }
    </div>
  )
}

export default Container