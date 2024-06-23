import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState, useEffect } from 'react';


const Hero=()=>{

  useGSAP(()=>{
    gsap.from(".slider",{
      x:100,
      duration:1,
      delay:1,
      opacity:0
    })
  })
  return(
  <div className=' flex flex-wrap mx-[6vh] '>
    <Svg />
    <ImageSlider/>
  </div>
  )
}

const Svg= () => {

    useGSAP(()=>{
        gsap.to(".svg",{
            color:"#08abc0",
            duration:3,
            delay:1,

        })
    })

  return (
    
    <div className=' h-[100vh] w-[40vw] hidden md:inline text-[#08abc027]'>
 <svg xmlns="http://www.w3.org/2000/svg" 
 viewBox="0 0 24 24" 
 fill="currentColor">
 <path 
 className='svg '
 d="M3.00098 5.47902L10.3778 4.4625V11.5902H3.00098V5.47902ZM3.00098 18.521L10.3778 19.5375V12.4982H3.00098V18.521ZM11.1894 19.646L21.001 21V12.4982H11.1894V19.646ZM11.1894 4.35402V11.5902H21.001V3L11.1894 4.35402Z"
 />
 </svg>
 </div>
  )
}

const images = [
  'https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2024/03/1920x1080-Copilot-Blog-Image-1024x576.jpg',
  'https://blogs.microsoft.com/wp-content/uploads/prod/2024/05/Copilot-PC-Hero.jpg',
  'https://scene7.samsclub.com/is/image/samsclub/20230501-microsoft-pov-m_02?$med$'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (isManual) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isManual]);

  useEffect(() => {
    if (!isManual) return;

    const timer = setTimeout(() => {
      setIsManual(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isManual]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setIsManual(true);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setIsManual(true);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsManual(true);
  };

  return (
    
    <div className="slider relative md:w-[45%] sm:w-[75%]  mx-auto overflow-hidden rounded-lg py-[10vh] ">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="min-w-full" key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-0 lg:top-[300px] md:top-[200px] hidden md:inline  transform -translate-y-1/2 bg-[#00000046] text-white p-2 rounded-full   "
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-0 lg:top-[300px] md:top-[200px] hidden md:inline transform -translate-y-1/2 bg-[#00000046] text-white p-2 rounded-full"
      >
        &gt;
      </button>

      {/* Navigation Dots */}
      <div className="absolute  left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-700' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero
