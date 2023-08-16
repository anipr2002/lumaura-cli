import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import useSound from 'use-sound';
import music from '../assets/Olepash_-_Easy_Joy.mp3'
import { HiVolumeUp } from 'react-icons/hi'




const ComingSoon = () => {
  const[play,{ stop }] = useSound(music, {volume: 0.010});
  return (
    <div className='flex flex-col h-screen w-screen justify-between items-center'>

      <div className='text-[#757575] mt-[5rem] w-screen border-t-2 border-b-2 border-[#1e1e1e]'>
        <Marquee autoFill='true'>
          <span className='px-7'> COMING SOON </span>
          <span className='px-7'> UNDER MAINTAINANCE </span>
          <span className='px-7'> COMING SOON </span>
          <span className='px-7'> UNDER MAINTAINANCE </span>
        </Marquee>
      </div>

      <p className='text-white font-ubuntu tracking-[0.4em] w-auto m-auto
                        sm:text-[5rem] md:text-[9rem] lg:text-[11rem] xl:text-[15rem]
                        font-bold text-center flex justify-center items-center
                        '>
        LUMAURA
      </p>

      <div className='text-[#757575] mb-[5rem] w-screen border-t-2 border-b-2 border-[#1e1e1e]'>
        <Marquee autoFill='true'  direction='right'> 
          <span className='px-7'> COMING SOON </span>
          <span className='px-7'> UNDER MAINTAINANCE </span>
          <span className='px-7'> COMING SOON </span>
          <span className='px-7'> UNDER MAINTAINANCE </span>
        </Marquee>
      </div>
    </div>
  )
}

export default ComingSoon