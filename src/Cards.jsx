import React from 'react'
import './Lenis.css'
import ScrollTrigger from 'gsap/ScrollTrigger';

import gsap from 'gsap'
import { root } from 'postcss'
import { useGSAP } from '@gsap/react';



const Cards = () => {


  gsap.registerPlugin(ScrollTrigger);

useGSAP(()=>{

  gsap.to(".service",{
    x:"30vw",
    scale:1.5,
    duration:1,
    stagger:1,
    scrollTrigger:{
      trigger:".service",
      start:"top 50%",
      end:"top -90%",
      scrub:2
    }
  })

  gsap.from(".headline",{
    y:100,
    duration:1,
    scrollTrigger:{
      trigger:".headline",
      start:"top 80%",
      end:"bottom 80%",
      scrub:2,
      
    }
  })
})

  return (
    <>
    <div className=' text-[#04E3FF] font-bold text-center text-[70px] tracking-wider lg:-mt-52 md:-mt-[10vh] -mt-[40vh] mb-10 overflow-hidden' >
      <h1 className='headline overflow-hidden md:text-[1em] text-[0.7em]'>SERVICES</h1>
    </div>
<div className='allServices text-white px-8 flex flex-col gap-10'>
  
  <div className='service flex md:text-[2vh] text-[1.5vh]'>
    <div className='text md:w-[30%] w-[40%] md:-mx-0 -mx-[2vh] py-[5vh]'>
      <h1 className=' font-bold'>Mircosoft 365</h1>
      <p>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan. </p>
      <button className=' rounded-sm md:text-[2vh] text-[1vh] font-semibold p-1.5 mt-3 bg-[#1194ffbe]'>For one person</button>
      
    </div>
    
      <div className='serviceImg md:w-[30%] w-[40%] md:px-6 px-2 md:scale-100 scale-75 lg:py-0 md:py-8 py-8 '>
      <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RF-Microsoft-M365-Sizzle_tbmnl_en-us?scl=1' alt='' />
      </div>
    </div>

    <div className='service flex md:text-[2vh] text-[1.5vh]'>
    <div className='text md:w-[30%] w-[40%] md:-mx-0 -mx-[2vh] py-[5vh]'>
      <h1 className=' font-bold'>Shop Xbox</h1>
      <p>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan. </p>
      <button className='rounded-sm md:text-[2vh] text-[1vh] font-semibold  p-1.5 mt-3 bg-[#1194ffbe]'>Show Xbox Series X</button>
    </div>

      <div className='serviceImg md:w-[30%] w-[40%] md:px-6 px-2 md:scale-100 scale-75 lg:py-0 md:py-8 py-8 '>
      <img src='https://assets.xboxservices.com/assets/5a/f1/5af153cc-bae1-4ff7-863f-942fddde8316.jpg?n=XSX_Hero_1084_Backward-Compatibility_1920x1250.jpg' alt='' />
      </div>
    </div>

    <div className='service flex md:text-[2vh] text-[1.5vh]'>
    <div className='text md:w-[30%] w-[40%] md:-mx-0 -mx-[2vh] py-[5vh]'>
      <h1 className=' font-bold'>Get Windows 11</h1>
      <p>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan. </p>
      <button className='rounded-sm md:text-[2vh] text-[1vh] p-1.5 mt-3 bg-[#1194ffbe]'>Learn more</button>
      
    </div>

      <div className='serviceImg md:w-[30%] w-[40%] md:px-6 px-2 md:scale-100 scale-75 lg:py-0 md:py-8 py-8 ' >
      <img src='https://news.microsoft.com/wp-content/uploads/prod/sites/612/2021/06/Hero-Bloom-Logo.jpg' alt='' />
      </div>
    </div>

    <div className='service flex md:text-[2vh] text-[1.5vh]'>
    <div className='text md:w-[30%] w-[40%] md:-mx-0 -mx-[2vh] py-[5vh]'>
      <h1 className=' font-bold '>Explore Surface Devices</h1>
      <p>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan. </p>
      <button className=' rounded-sm md:text-[2vh] text-[1vh] p-1.5 mt-3 bg-[#1194ffbe]'>Learn more</button>
    </div>

      <div className='serviceImg md:w-[30%] w-[40%] md:px-6 px-2 md:scale-100 scale-75 lg:py-0 md:py-8 py-8  '>
      <img src='https://media.wired.com/photos/664ba96e9a44445cea98be11/4:3/w_1424,h_1068,c_limit/Surface-Laptop-and-Surface-Pro-1900x1069.jpg' alt='' />
      </div>
    </div>

</div>
    </>
  )
}


export default Cards
