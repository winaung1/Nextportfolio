import { useState } from 'react'
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
    const [handleSubmit,setHandleSumbit] = useState(false);
  return (
    <div>
      {handleSubmit ? <EmailSuccess setHandleSubmit={setHandleSumbit}/>: 
      <div className="min-w-[360px]">
        <Navbar/>
        <Home/>
        <About title="About"/>
        <WhatIDo title='What I Do'/>
        <Skills title='Skills'/>
        <Experience  title='Experience'/>
        <Resume Icon={DownloadIcon}/>
        <Mywork title='My Work'/>
        <Contact  title='Contact' handleSubmit={handleSubmit} setHandleSumbit={setHandleSumbit}/>

      </div>
    }
    </div>
  )
}

export default Container