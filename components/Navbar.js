
import {React, useState, useEffect} from 'react'
import NavbarContent from './NavbarContent';
export const Navbar = ({hidden, 
  setHidden, activeLink, setActiveLink, 
  myAboutIsVisible, 
  myContactIsVisible,
  myExperienceIsVisible,
  myHomeIsVisible,
  myWhatidoIsVisible,
  myWorkIsVisible,
  mySkillsIsVisible
}) => {

const scrolled = (e) => {
  
    if(window.scrollY > 500){
      setHidden(false)
    } 
    // if(window.scrollY === position.current.offsetTop){
    //   alert('ok')
    // }

var isScrolling;

window.addEventListener('scroll', function ( event ) {

	window.clearTimeout( isScrolling );

	isScrolling = setTimeout(function() {

		setHidden(true);

	}, 7000);

}, false);
}

  const callWindowListener = () => {
    window.addEventListener('scroll', scrolled)
  }
useEffect(() => {
    callWindowListener();
  }, []);


  return (
    <div className=''>
      {hidden ? '' : 
       <NavbarContent 
        myContactIsVisible={myContactIsVisible} 
        myHomeIsVisible={myHomeIsVisible}
        myExperienceIsVisible={myExperienceIsVisible}
        myWhatidoIsVisible={myWhatidoIsVisible}
        mySkillsIsVisible={mySkillsIsVisible}
        myWorkIsVisible={myWorkIsVisible}
        myAboutIsVisible={myAboutIsVisible} 
        activeLink={activeLink} 
        setActiveLink={setActiveLink} 
        setHidden={setHidden}/>
        }
    </div>
  )
}
