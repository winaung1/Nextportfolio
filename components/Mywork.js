import React from 'react'
import { MyWorkCards } from './MyWorkCards'
import { Title } from './Title'


export const Mywork = ({title, myworkRef}) => {
  return (
    <div  ref={myworkRef} className='px-2 bg-gray-800 min-h-screen' id='mywork'>
        <Title title={title}/>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <MyWorkCards 
            myText='This is the project that led me to stay during tough times. I have managed to build the website from scratch,
            using documentions, examples and tutorails.'
            IconImage={'/icurus.png'}
            Demo={'https://www.icarus.novacloudlab.com/login/?session=None'}
            Title='Icurus Restuarent'
            skills1='Python'
            skills2='Tailwind'
            skills3='Javascript'
            skills4='MySQL'
            skills5='Django'
          />
          <MyWorkCards 
            myText='I made this site for Karen people that needs help with
            technology.'
            IconImage={'/ksn.png'}
            Demo={'https://verdant-eclair-1ba9e1.netlify.app/index.html'}
            Code={'https://github.com/winaung1/KSN.org'}
            Title='KSN'
            skills1='HTML'
            skills2='Tailwind CSS'
            skills3='Javascript'
            skills4='Netlify'
            skills5='CSS'
          />
          <MyWorkCards 
            myText='I volunteer to make this website because it was outdated, since it was hard to maintain and no one knows how to work around a code that was old.
            I was able to make it quickly with React because it was fast and resuseable and easy to maintain due to the community support it has.'
            IconImage={'/kbcusa1.png'}
            Demo={'https://kbcusa.netlify.app'}
            Code={'/'}
            Title='KBCUSA'
            skills1='NextJs'
            skills2='Tailwind'
            skills3='Javascript'
            skills4='Netlify'
            skills5='Stripe'
          />
          <MyWorkCards 
            myText='This is the project that I was doing for fun to practice my skills when I had no real project to do.
             I was learning how to manipulate the dom and fetching api. But I followed youtube tutorial for this one. Before I followed it,
             I challenged myself by building it on my own. Unfortunely because I have never fetch api with Next js before. I had to watch some part of the video.'
            IconImage={'/desktop.png'}
            Demo={'https://hulu-2-snowy.vercel.app/'}
            Code={'https://github.com/winaung1/Hulu-2'}
            Title='HULU 2.0'
            skills1='NEXT Js'
            skills2='Tailwind'
            skills3='Javascript'
            skills4='Vercel'
            skills5='Express'
          />
          <MyWorkCards 
            myText='I made this template not long ago about Traveling website. I enjoyed this so much that I put in effort to make this website look
            as clean as possible. It is fully responsive.
            '
            IconImage={'/travel.png'}
            Demo={'https://wingotravelsite.com/'}
            Code={'https://github.com/winaung1/GOTravel'}
            Title='GOTravel'
            skills1='HTML'
            skills2='Tailwind'
            skills3='Javascript'
            skills4='CSS'
            skills5='Netlify'
          />
        </div>
 
    </div>
  )
}
