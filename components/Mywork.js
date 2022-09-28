import React from 'react'
import { MyWorkCards } from './MyWorkCards'
import { Title } from './Title'


export const Mywork = ({title, myworkRef}) => {
  return (
    <div  ref={myworkRef} className='bg-gray-800 min-h-screen' id='mywork'>
        <Title title={title}/>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <MyWorkCards 
            myText='This is the longest project that my friend and I have done. It tooks us almost a year to make the project finished.
            This is the first project that I touched on since I started coding for the first month. I have learned alot and keep on doing the project eventhough it was hard.
            But here is our finished product. Our initial thought was to be designed for mobile version only.
            We are transitioning to React native in the near future. Also create an account to access to the full experience.'
            IconImage={'/icurus.png'}
            Demo={'https://icarusrestaurant.herokuapp.com/homepage/?session=test&table=13'}
            Title='Icurus Restuarent'
            skills1='Python'
            skills2='Tailwind'
            skills3='Javascript'
            skills4='MySQL'
            skills5='Django'
          />
          <MyWorkCards 
            myText='I was interested in making a better website for my Karen people that needs help with
            technology, I went in and volunteer my time to make a more modern website. It was the second project
            I did to pratice my skills. I was barely new at this when I did this website. But I was glad it turned out great.'
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
            myText='I volunteering to this website because it was almost not used since it was hard to maintain and know one knows how to work around a code that is so old.
            So I use React because it is fun. Due to their reuse components through props. I managed to build the website fairly quickly.
            I kept all the old layout as they wanted.'
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
            I was fetching the data from the movie database and display it on the screen. I was learning a ton of skills such as the css framework Tailwind
            and fetching data from API.'
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
        </div>
 
    </div>
  )
}
