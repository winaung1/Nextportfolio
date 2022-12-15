
import {React} from 'react'
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

// const scrolled = () => {
  
//     if(window.scrollY > 500){
//       setHidden(false)
//     } 
  

// var isScrolling;

// window.addEventListener('scroll', function () {

// 	window.clearTimeout( isScrolling );

// 	isScrolling = setTimeout(function() {

// 		setHidden(true);

// 	}, 7000);

// }, false);
// }

//   const callWindowListener = () => {
//     window.addEventListener('scroll', scrolled)
//   }
// useEffect(() => {
//     callWindowListener();
//   }, []);


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
