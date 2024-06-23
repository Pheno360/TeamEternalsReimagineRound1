import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import GlowBtn from './GlowBtn'
import Cards from './Cards'
import Lenis from 'lenis'
import { ReactLenis, useLenis } from 'lenis/react'
import Tagline from './Tagline'
import Xbox from './Xbox'
import Business from './Business'
import Footer from './Footer'

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <>
    <ReactLenis root>
    <div className=' overflow-hidden'>
      <div className='h-[100vh]'>
      <Navbar/>
      <Hero/>
      <GlowBtn />
      </div>
      <Tagline />
      <Cards />
      <Xbox />
      <Business/>
      <Footer />
      </div>
</ReactLenis>
    </>
  )
}

export default App
