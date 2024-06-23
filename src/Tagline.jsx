import React from 'react'
import excel from './assets/MSExcel.png'
import ppt from './assets/MSPpt.png'
import team from './assets/Team.png'
import word from './assets/MSword.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const Tagline = () => {

  useGSAP(()=>{
    gsap.from(".leftSide",{
      x:-100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:".leftSide",
        start:"top 50%",
        end:"top 10%",
        scrub:2,
      }
    })

    gsap.from(".rightSide",{
      x:100,
      opacity:0,
      duration:1,
      stagger:1,
      scrollTrigger:{
        trigger:".rightSide",
        start:"top 50%",
        end:"top 10%",
        scrub:2,
      }
    })

    gsap.to(".arrow",{
      color:"#04E3FF",
      duration:1,
      opacity:0.6,
      stagger:1,
      
      scrollTrigger:{
        trigger:".arrow",
        start:"top 70%",
        end:"top 50%",
        scrub:2,
      }
    })
  })
  return (
    <div className='py-20 -mt-[30vh] md:-mt-0'>

    <div className='images flex lg:justify-around py-0  md:scale-100 scale-[45%] lg:gap-0 gap-10 justify-center'>
    <img className=" leftSide h-[20vh]" src={excel} alt='' />
    <img className=" leftSide h-[20vh]" src={ppt} alt='' />
    <img className=" rightSide h-[20vh]" src={team} alt='' />
    <img className=" rightSide h-[20vh]" src={word} alt='' />

    </div>

    <div className=' w-[100%] h-screen text-white font-semibold md:text-[130px] text-[9vh] text-center  items-center -mt-2'>
      <h1 className=''>Tech that Moves You Forward</h1>
      <div className='arrow md:-mt-20 -mt-[1vh] #04E3FF opacity-0'>
    <i className="ri-arrow-down-wide-line font-thin"></i>
    </div>
    <div className='arrow md:-mt-36 -mt-[12vh] #04E3FF opacity-0'>
    <i className="ri-arrow-down-wide-line font-thin  "></i>
    </div>
    </div>

    
    </div>
  )
}

export default Tagline
