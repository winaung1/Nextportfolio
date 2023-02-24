import { useRef } from 'react'
import { Title } from './Title';
import { MyImage } from './MyImage';
import { useInView } from "framer-motion";
import Link from 'next/link'
// import { checkout } from '../checkout';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export const About = ({title, aboutRef}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
 

  return (
    <div ref={aboutRef} className=' bg-black px-5 text-lg min-h-screen text-gray-300 pb-10' id='about'>
      <Title title={title}/>
      <div className='lg:flex items-center lg:w-[990px] lg:mx-auto lg:my-40'>
          <p ref={ref}  style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} className='pb-5 leading-normal md:px-5 md:text-2xl max-w-4xl ml-auto mr-auto lg:w-[800px]'>
            My name is Win Aung. I'm a self-taught frontend developer. I'm using frontend frameworks to build projects.
            I've developed the skills as a web developer to accomplish any tasks by reading documentations and tutorials.
            I worked at Vanderhall Motor works, I implented a feature to keep track of each vehicle scanned in, and sent to the database.
            I love what I do and pround of it.
          </p>
            <MyImage Image={'/my.jpg'} />
      </div>
      <div className='fixed bottom-24 left-2 flex flex-col space-y-2 z-50'>
        <Link href="https://github.com/winaung1" className='bg-white'>
          <a target="_blank">
            <FaGithub className='w-5 h-5 text-white'/>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/win-aung-815945193/" className='bg-white'>
          <a target="_blank">
            <FaLinkedin className='w-5 h-5 text-blue-300'/>
          </a>
        </Link>
       {/* <button onClick={(() => {
            checkout({
              lineItems: [
                {
                  price: "price_1LlIm8EtRFSkR2CjnWO6RTYp",
                  quantity: 1,
                }
              ]
            })
          })}>Donate</button> */}
      </div>
    </div>
  )
}