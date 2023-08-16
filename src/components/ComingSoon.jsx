import React from 'react'
import Marquee from "react-fast-marquee";
import useSound from 'use-sound';
import music from '../assets/Olepash_-_Easy_Joy.mp3'





const ComingSoon = () => {
  const[play,{ stop }] = useSound(music, {volume: 0.025});
  return (
    <div className='bg-[#282828] relative h-screen w-screen flex items-center justify-center'>
        
        
        <button className='text-white text-[256px] font-bold font-ubuntu
                         tracking-[0.40em] absolute w-screen 
                          min-h-min text-center items-center flex-col' 
                          onMouseEnter={() => play()} onMouseLeave={() => !stop()}>
                            
                            
                            LUMAURA
                            
                            
                            
        </button>
      

        <div className='w-screen bg-[#1d1d1d] h-[2px] absolute top-[10%]'>
        </div>
        
        <div className='w-screen bg-[#1d1d1d] h-[2px] absolute top-[13%]'>
        </div>

        <div className='text-[#757575] absolute text-[20px] top-[10%] w-screen '>
         <Marquee autoFill="true"> 
            <span> COMING SOON &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <span> UNDER MAINTAINANCE&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; </span>
            <span> COMING SOON &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <span> UNDER MAINTAINANCE &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
          </Marquee>
        </div>

        <div className='w-screen bg-[#1d1d1d] h-[2px] absolute top-[90%]'>
        </div>
        
        <div className='w-screen bg-[#1d1d1d] h-[2px] absolute top-[87%]'>
        </div>

        <div className='text-[#757575] absolute text-[20px] top-[87%] w-screen '>
         <Marquee autoFill="true" direction='right'> 
            <span> COMING SOON &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <span> UNDER MAINTAINANCE&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; </span>
            <span> COMING SOON &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <span> UNDER MAINTAINANCE &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
          </Marquee>
        </div>

    </div>
  )
}

export default ComingSoon