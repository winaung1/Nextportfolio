import React from 'react'
import { MyWorkCards } from './MyWorkCards'
import { Title } from './Title'


export const Mywork = ({title}) => {
  return (
    <div className='bg-gray-800 min-h-screen' id='mywork'>
        <Title title={title}/>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <MyWorkCards 
            myText='This is the longest project that my friend and I have done. It tooks us almost a year to make the project finished.
            This is the first project that I touched on since I started coding for the first month. I have learned alot and keep on doing the project eventhough it was hard.
            But here is our finished product'
            IconImage={'/icurus.png'}
            Tag={'https://www.google.com'}
            Title='Icurus Restuarent'
            skills1='Python'
            skills2='Tailwind'
            skills3='Javascript'
            skills4='MySQL'
            skills5='Django'
          />
          <MyWorkCards 
            myText='Now is the winter of our discontent
            Made glorious summer by this sun of York;
            And all the clouds that lourd upon our house
            In the deep bosom of the ocean buried.
            Now are our brows bound with victorious wreaths;
            Our bruised arms hung up for monuments;'
            IconImage={'https://d334lak5lb2pjo.cloudfront.net/wp-content/uploads/b2b-web-design-examples-min.jpg'}
            Title='PINAV'
            skills1='Python'
            skills2='Bootstrap'
            skills3='Javascript'
            skills4='MySQL'
            skills5='Django'
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
          <MyWorkCards 
            myText='Now is the winter of our discontent
            Made glorious summer by this sun of York;
            And all the clouds that lourd upon our house
            In the deep bosom of the ocean buried.
            Now are our brows bound with victorious wreaths;
            Our bruised arms hung up for monuments;'
            IconImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYH04E7PVSRHV7-A6Drl7SwGrTTxrJ8dmBbg&usqp=CAU'}
            Title='Instagram'
            skills1='React'
            skills2='Tailwind'
            skills3='Javascript'
            skills4='Firebase'
            skills5='Express'
          />
        </div>
 
    </div>
  )
}
