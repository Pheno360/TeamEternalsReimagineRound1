import React, { Children, useRef, useState } from 'react'
import { color, motion } from 'framer-motion'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Navbar.css'

const Navbar = () => {

  useGSAP(()=>{

    const tl=gsap.timeline()
    tl.from(".elem1",{
      y:-100,
      duration:1,
      opacity:0
    })

    tl.from(".menus",{
      y:-100,
      duration:0.7,
      delay:0,
    stagger:0.15
    })
  })

  return (
    <div className='container flex justify-between p-5 '>
    <div className='elem1 hidden lg:flex items-center'>
      <SlideTabs />
    </div>
    <div className='w-[25vw] md:w-[18vw] lg:w-[18vh] mr-[4vw]'><img src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31'/>
    </div>
<div className='elem2 md:text-[2vh] text-[1.5vh]'>
    <NavMenu />
    </div>
    </div>
  )
} 


const SlideTabs=()=>{

  const [position, setPosition] = useState({
    left:0,
    width:0,
    opacity:0,
  })

    return(
        <ul 
        onMouseLeave={()=>{
          setPosition((pv)=>({
            ...pv,
            opacity:0,
          }))
        }}
        className="relative mx-auto flex items-center h-[4vh] w-fit rounded-lg border border-[#04E3FF] bg-[#0C223B] p-1 text-white font-semibold">
        <Tab setPosition={setPosition} color="#0078D4" >Microsoft 365</Tab>
        <Tab setPosition={setPosition} color="limegreen" >Teams</Tab>
        <Tab setPosition={setPosition} color="deepskyblue" >Copilot</Tab>
        <Tab setPosition={setPosition} color="gold" >Windows</Tab>
        <Tab setPosition={setPosition} color="orangered" >Surface</Tab>

        <Cursor position={position} />
        </ul>
    )
}

const Tab=({children,setPosition,color})=>{
  const ref=useRef(null);
    return(
        <li 
        ref={ref}
        onMouseEnter={()=>{
          if(!ref.current)return;
          const {width}=ref.current.getBoundingClientRect();
            
          setPosition({
            width,
            opacity:1,
            left:ref.current.offsetLeft,
            color:"#0ab7ce",
          })

        }}
        className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase  md:px-5 md:py-3 md:text-base'>
            {children}
        </li>
    )
}

const Cursor=({position})=>{
  return <motion.li
  animate={position}
  style={{backgroundColor: position.color}}
   className=' absolute z-0 h-7 rounded-lg bg-[#0ab7ce] md:h-6' />
}

const NavMenu=()=>{

  return(
  <div className=' flex md:gap-4 gap-0 space-x-4 items-center text-[#04E3FF] font-semibold cursor-pointer text' >
  <h1 className='menus tab hover:border-b-2 border-[#04E3FF]'>All Microsoft</h1>
  <h1 className='menus tab hover:border-b-2 border-[#04E3FF]'>Search <span><i class="ri-search-line"></i></span></h1>
  <h1 className='menus tab hover:border-b-2 border-[#04E3FF] '>Cart <span><i class="ri-shopping-cart-line"></i></span></h1>
  
  </div>
  )

}
export default Navbar
