import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";
import useSound from 'use-sound';
import music from '../assets/Olepash_-_Easy_Joy.mp3'
import { HiVolumeUp } from 'react-icons/hi'
import { motion } from 'framer-motion';



const ComingSoon = () => {

 const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 200,
      width: 200,
      x: mousePosition.x - 100,
      y: mousePosition.y - 100,
      backgroundColor: "blue",
      mixBlendMode: 'difference'
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  
  const[play, {stop}] = useSound(music, {volume: 0.10});
  const [isPlaying, setIsPlaying] = useState(false);
   const handleParagraphClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stop();
    } else {
      
      play(); 
      setIsPlaying(true);
    }
  };
  return (
    <div className='flex flex-col h-screen w-screen justify-between items-center'>

      <div className='text-[#757575] mt-[5rem] w-screen flex relative
                        border-t-2 border-b-2 border-[#1e1e1e]'>
        <Marquee autoFill='true'>
          <span className='px-7'> COMING SOON </span>
          <span className='px-7'> UNDER MAINTAINANCE </span>
          <span className='px-7'> COMING SOON </span>
          <span className='px-7'> UNDER MAINTAINANCE </span>
        </Marquee>
      </div>

      <p onClick={handleParagraphClick} className='text-white font-ubuntu tracking-[0.4em] w-auto m-auto
                        text-[3rem] sm:text-[5rem] md:text-[9rem] lg:text-[11rem] xl:text-[15rem]
                        font-bold text-center flex justify-center items-center
                        '
            onMouseEnter={textEnter} onMouseLeave={textLeave}>
        LUMAURA
      </p>

      <div className='text-[#757575] mb-[5rem] w-screen flex relative
                      border-t-2 border-b-2 border-[#1e1e1e]'>
        <Marquee autoFill='true'  direction='right'> 
          <span className='px-7'> COMING SOON </span>
          <span className='px-7'> UNDER MAINTAINANCE </span>
          <span className='px-7'> COMING SOON </span>
          <span className='px-7'> UNDER MAINTAINANCE </span>
        </Marquee>
      </div>
      <div className='text-white absolute right-0 top-[1.6rem]'
            onClick={handleParagraphClick}><HiVolumeUp size={30} /></div> 
      
      <motion.div className="bg-[#068FFF] h-[32px] w-[32px]
                     rounded-[50%] fixed top-0 left-0 pointer-events-none" 
                     variants={variants}
                     animate={cursorVariant}
                     transition={{type: "tween", ease: "backOut"}}/>
      
      

    </div>
  )
}

export default ComingSoon