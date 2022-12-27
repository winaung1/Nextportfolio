
import NavbarContent from './NavbarContent';
export const Navbar = ({hidden, 
  setHidden, activeLink, setActiveLink, 
  myAboutIsVisible, 
  myContactIsVisible,
  myExperienceIsVisible,
  myHomeIsVisible,
  myWhatidoIsVisible,
  myWorkIsVisible,
  mySkillsIsVisible,
}) => {

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
