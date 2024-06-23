import React from 'react'
import mslogo from './assets/mslogo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Footer = () => {

  useGSAP(()=>{
    gsap.from(".footer",{
      y:300,
      duration:1,
      scrollTrigger:{
        trigger:".footer",
        start:"top 90%",
        end:"top 80%",
        scrub:3
      }

    })
  })

  return (
    <div className='footer h-[60%] w-full md:px-[4vh] px-2 text-[#ffffffd0]  bg-sky-700 md:text-[0.9em] text-[0.7em]  py-[2vh] '>
    <div className=' py-[6vh] flex lg:flex-nowrap flex-wrap gap-[4vw] '>

<div className='Microsoft-image md:w-[30vh] w-[20vh] mt-[5vh]'>
      <img src={mslogo} />
      </div>
      <div className='flex flex-col gap-[1vw]'>
        <h1 className='md:text-[1.1vw] text-[3.4vw] font-semibold'>What's new</h1>
        <p>Games</p>
        <p>Surface Pro 9</p>
        <p>Surface Laptop5</p>
        <p>Surface Laptop Go 2</p>
        <p>Microsoft Copilot</p>
        <p>Microsoft 365</p>
        <p>Windows 11 apps</p>
      </div>

      <div className='flex flex-col gap-[1vw] md:ml-0 ml-6' >
        <h1 className='md:text-[1.1vw] text-[3.4vw] font-semibold'>Mircosoft Store</h1>
        <p>Account profile</p>
        <p>Download Center</p>
        <p>Microsoft Store Support</p>
        <p>Returns</p>
        <p>Order tracking</p>
      </div>

      <div className='flex flex-col gap-[1vw] md:px-0 px-10'>
        <h1 className='md:text-[1.1vw] text-[3.4vw] font-semibold'>Education</h1>
        <p>Microsoft in education</p>
        <p>Devices for education</p>
        <p>Microsoft Teams for Education</p>
        <p>Microsoft 365 Education</p>
        <p>Office Education</p>
        <p>Educator training and development</p>
        <p>Deals for students and parents</p>
        <p>Azure for students</p>
      </div>

      <div className='flex flex-col gap-[1vw] '>
        <h1 className='md:text-[1.1vw] text-[3.4vw] font-semibold'>Business</h1>
        <p>Microsoft Cloud</p>
        <p>Microsoft Security</p>
        <p>Azure</p>
        <p>Dynamics 365</p>
        <p>Microsoft 365</p>
        <p>Microsoft Advertising</p>
        <p>Copilot for Microsoft 365</p>
        <p>Microsoft Teams</p>
      </div>

      <div className='flex flex-col gap-[1vw] md:px-0 px-10'>
        <h1 className='md:text-[1.1vw] text-[3.4vw] font-semibold'>Developer & IT</h1>
        <p>Developer Center</p>
        <p>Documentation</p>
        <p>Microsoft Learn</p>
        <p>Microsoft Tech Community</p>
        <p>Azure Marketplace</p>
        <p>AppSource</p>
        <p>Microsoft Power Platform</p>
        <p>Visual Studio</p>
      </div>

      <div className='flex flex-col gap-[1vw] md:ml-0 ml-10'>
        <h1 className='md:text-[1.1vw] text-[3vw] font-semibold'>Company</h1>
        <p>Careers</p>
        <p>About Microsoft</p>
        <p>Company news</p>
        <p>Privacy at Microsoft</p>
        <p>Investors</p>
        <p>Security</p>
        <p>Sustainability</p>
      </div>
    </div>

    <div className='flex md:flex flex-col py-[2vh] gap-[3vh] '>

    
      <h1>English <span><i class="ri-earth-fill"></i></span></h1>
      <h1>Your Privacy Choices</h1>
      <h1>Consumer Health Privacy</h1>

      <div className=' flex justify-center gap-[2vw] w-[100%] md:text-[2vh] text-[1.4vh] ' >
      <h1 className='font-semibold'>Contact Microsoft</h1>
      <h1 className='font-semibold'>Privacy</h1>
      <h1 className='font-semibold'>Terms of use</h1>
      <h1 className='font-semibold'>Trademarks</h1>
      <h1 className='font-semibold'>About our ads</h1>
      <h1 className='font-semibold'>© Microsoft 2024</h1>
      </div>

    </div>
    </div>
   
  )
}

export default Footer
