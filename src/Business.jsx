import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { motion } from 'framer-motion'

const Business = () => {

  useGSAP(()=>{
    gsap.from(".card",{
      y:100,
      opacity:0,
      duration:1,
    scrollTrigger:{
      trigger:".card",
      start:"top 70%"
    }
    })

    gsap.from("i",{
      
    })
  })

  return (
    <div className='h-auto w-[100vw] py-[5vh] px-[5vh]'>

    <div className='text-white font-semibold text-[45px] py-[10vh] tracking-wide text-center '>
    <h1> FOR BUSINESS</h1>
    </div>
           <div className='flex justify-around flex-wrap gap-5'>

      <div className=' card md:h-[55vh]  w-[45vh] bg-black text-white'>
        <div className=' business-image '>
          <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=380&hei=213&fit=crop' />
        </div>
        <div className='business-text font-semibold p-8'>
        <h1 className=' font-bold text-xl ' >Surface for Business</h1>
        <p className='mt-[2vh] font-medium'>No matter what you do, there's a surface to help you do it.</p>
        <button className=' rounded-md mt-[6vh] bg-[#1194ffbe] p-2'>Shop now</button>
      </div>
    
      </div>

      <div className=' card h-[55vh] w-[45vh] bg-[#000000] text-white'>
        <div className=' business-image'>
           <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=517&hei=293&fit=crop' />
        </div>
        <div className='business-text font-semibold p-8'>
        <h1 className=' font-bold text-xl ' >Get Microsoft Teams for free</h1>
        <p className='mt-[2vh] font-medium' >Online meetings, chat and shared cloud storage - all in one place</p>
        <button className='rounded-md md:mt-[6vh] mt-[2vh] bg-[#1194ffbe] p-2'>Sign up for free</button>
        </div>
      </div>

      <div className='card h-[55vh] w-[45vh] bg-black text-white'>
        <div className=' business-image  '>
            <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-Teams-Commercial-Meeting?wid=517&hei=293&fit=crop' />
        </div>
        <div className='business-text font-semibold p-7'>
        <h1 className=' font-bold text-xl ' >Get Microsoft Teams for your business</h1>
        <p className='mt-[1vh] font-medium text-[1.9vh]' >Online meetings, chat, real-time collaboration, and shared cloud storage- all in one place.</p>
        <button className=' mt-[1vh] rounded-md bg-[#1194ffbe] p-2'>Find the right plan for your business</button>
        </div>
      </div>

      <div className=' card h-[55vh] w-[45vh] bg-black text-white'>
        <div className=' business-image '>
           <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Copilot-Commercial?wid=406&hei=230&fit=crop' />
        </div>
        <div className='business-text font-semibold p-8 '>
        <h1 className=' font-bold text-xl ' >Copilot for Microsoft 365</h1>
        <p className='mt-[2vh] font-medium' >Save time and focus on the things that matter most with AI in Microsoft 365 for business.</p>
        <button className=' rounded-md md:mt-[3vh] mt-[2vh] bg-[#1194ffbe] p-2' >Learn more</button>
        </div>
      </div>

            </div>
         
            <div className='py-[8vw] md:px-[3vh] px-[0] flex gap-[2vw] text-[1.5em] text-white md:scale-100 scale-[70%]'>
              <h1 className='font-semibold md:mr-[2vh] mr-[0vh] '>Follow Microsoft</h1>
             
              <p className='flex md:gap-[4vh] gap-4 text-[1.5em] -mt-[1.5vh] md:px-0 px-2'> 
              <i className="ri-facebook-circle-fill transform transition-transform duration-500 hover:scale-110 hover:bg-blue-500 rounded-xl md:w-[3vw] w-[8vw] flex justify-center"></i>
              <i className="ri-twitter-x-fill transform transition-transform duration-500 hover:scale-110 hover:bg-black rounded-xl md:w-[3vw] w-[8vw] flex justify-center"></i>
              <i className="ri-youtube-fill transform transition-transform duration-500 hover:scale-110 hover:bg-red-500 rounded-xl md:w-[3vw] w-[8vw] flex justify-center"></i>
              
               </p>
               
            </div>
    </div>
  )
}

export default Business
