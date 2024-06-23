import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Xbox = () => {

  useGSAP(()=>{
    gsap.from(".xbox-text",{
      x:-100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".xbox-text",
        start:"top 50%",
      
      }
    })
  })

  return (
    <>
    <div className='relative h-full w-full mt-[20vh] md:flex hidden'>
    <div className='xbox-text absolute text-white lg:top-[30%] md:top-[5%] left-0 lg:left-[10%] md:left-0 lg:w-[30vw] w-0 md:w-[45vw] lg:scale-100 scale-100 md:scale-75'>
    <h1 className='text-[50px] font-bold'>Xbox Game Pass Ultimate</h1>
    <p>Play new games on day one.Plus, enjoy hundreds of high-quality games with friends on console and PC.</p>
    <button className=' rounded-md font-semibold text-[18px] p-2 mt-3 bg-[#1194ffbe]'>Join now</button>

    </div>
      <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-AEM-Game-Pass-Ultimate:VP5-1596x600' />
    </div>

    <div className=' h-full w-full md:hidden inline '>
    <img className='py-6' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-AEM-Game-Pass-Ultimate:VP2-859x540' />
    <div className='xbox-text text-white px-8'>
    <h1 className='text-[4vh] font-bold'>Xbox Game Pass Ultimate</h1>
    <p>Play new games on day one.Plus, enjoy hundreds of high-quality games with friends on console and PC.</p>
    <button className=' rounded-md font-semibold text-[15px] p-2 mt-3 bg-[#1194ffbe]'>Join now</button>

    </div>
    </div>

</>
    
  )
}

export default Xbox
