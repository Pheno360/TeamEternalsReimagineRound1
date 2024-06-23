import { useGSAP } from '@gsap/react'
import './GlowBtn.css'
import gsap from 'gsap'

const GlowBtn=()=>{

  useGSAP(()=>{
   gsap.from(".glow",{
    y:100,
    opacity:0
   })
  })
    return(
      <div className='flex justify-center items-center lg:-mt-44 md:-mt-96 sm:mt-0 '>
        <button className='glow relative tracking-wider h-[60px] w-[180px] rounded-3xl border-[0.5px] border-[#ffffff] outline-none text-[#ffffff] bg-[#031e3546] text-[20px] font-[600] cursor-pointer  '>
        SIGN UP 
        </button>
      </div>
    )
  }


  export default GlowBtn