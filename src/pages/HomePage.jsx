import React,{useState, useEffect} from 'react'
import Marquee from 'react-fast-marquee'
import {motion} from 'framer-motion'
import useSound from 'use-sound';
import music from '../assets/Olepash_-_Easy_Joy.mp3'
import { FcGallery } from 'react-icons/fc'
import { FiMusic } from 'react-icons/fi'
import { GrContact } from 'react-icons/gr'
import MagneticIcons from '../components/MagneticIcons';


const HomePage = () => {

const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("true");

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
      backgroundColor: "red",
      mixBlendMode: 'difference'
    }
  }

  const textEnter = () => {setCursorVariant("text");}
  const textLeave = () => {setCursorVariant("default");}

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



    <div className='flex  w-full h-screen justify-between flex-col fixed overflow-hidden bg-[#191926]'>
        <div className='h-[50%] w-full'>
            <div className='w-[200vw] p-[1rem] m-2 absolute left-[-41%] 
            rotate-[-10deg] translate-y-[1rem] z-[1] max-[820px]:top-0 max-[820px]:left-[-7rem] 
            max-[820px]:p-[0] max-[820px]:rotate-[-10deg] max-[480px]:top-[0.7rem] max-[480px]:p-[0]
             max-[480px]:rotate-[10deg] 
            max-[300px]:top-[1rem] max-[300px]:rotate-[10deg] max-[300px]:p-[0]
             bg-[#c93a99]'>   
                <Marquee autoFill='true'>
                    <span className='px-3 font-albert text-[32px] text-white'>FOLLOW US!</span>

                </Marquee>
            </div>

            <div className='w-[200vw] p-[1rem] m-2 absolute left-[-67%] top-[-3%]
            rotate-[10deg] translate-y-[1rem] z-[3] max-[820px]:top-[3.3rem]
             max-[820px]:left-[-20rem] max-[820px]:p-[0] max-[820px]:rotate-[7.5deg] 
             max-[480px]:top-[7.8rem] max-[480px]:p-[0] max-[480px]:rotate-[-10deg] 
             max-[300px]:top-[7.8rem] max-[300px]:left-[-16rem] 
            max-[300px]:rotate-[-10deg] max-[300px]:p-[0] bg-red-400'>   
                <Marquee autoFill='true'>
                    <span className='px-3 font-albert text-[32px] text-[#71f8f8]'>HELLO</span>
                </Marquee>
            </div>

            <div className='w-[200vw] p-[1rem] m-2 absolute rotate-[120deg] 
                            left-[-73%] z-[1] max-[820px]:hidden
                             bg-[#893d93]'>   
                        <Marquee autoFill='true'>
                            <span className='px-3 font-albert text-[32px] text-white'>CONTACT</span>
                        </Marquee>
            </div>            
        </div>

        <div className='flex items-center flex-col text-center text-[2rem] tracking-wide
                        leading-[2.2rem] max-[480px]:text-[1.5rem] max-[480px]:mb-[2rem]'>
            <div className='pt-[2rem] pb-[2rem] '
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}>

                <h1 className='font-albert flex relative 
                            py-4 px-4 font-bold text-[64px] text-[#FF2B59]'>

                    <MagneticIcons><span>LUMAURA</span> </MagneticIcons>

                    <span className='mx-0.5 text-sm bottom-1.5 right-[-0.24rem] absolute'>©</span>

                    <MagneticIcons>
                        <div className='absolute h-[6rem] w-[6rem] rounded-full 
                                        bottom-[80%] right-[100%] bg-orange-100
                                        flex justify-center items-center'>
                            <div><FcGallery size={50}/>
                                <p className='font-ubuntu text-sm'> Gallery </p>
                            </div>
                                    
                        </div>
                    </MagneticIcons>

                    <MagneticIcons>
                        <div className='absolute h-[6rem] w-[6rem] rounded-full 
                                        top-[-7.5rem] left-[0rem] bg-teal-100
                                        flex justify-center items-center'>
                            <div><GrContact size={50}/>
                                <p className='font-ubuntu text-sm'> Contact </p>
                            </div>
                                    
                        </div>
                    </MagneticIcons>  

                    <MagneticIcons>
                        <div className='absolute h-[6rem] w-[6rem] rounded-full 
                                        bottom-[7.5rem] right-[-3rem] bg-purple-500
                                        flex justify-center items-center'>
                            <div onClick={handleParagraphClick}><FiMusic size={50}/>
                                <p className='font-ubuntu text-sm'> Sound </p>
                            </div>
                                    
                        </div>
                    </MagneticIcons>                                      
                </h1>
                
            </div>      
                        
        </div>

        <div className='h-[50%] w-full'>
            <div className='w-[200vw] p-[1rem] m-2 absolute left-[-25%] bottom-[36%] rotate-[9deg] 
            translate-y-[22rem] z-[2] max-[820px]:bottom-[25rem] max-[820px]:p-[0] max-[820px]:left-[-20rem] 
            max-[480px]:bottom-[25rem] max-[480px]:p-[0] max-[480px]:rotate-[10deg] max-[300px]:left-[-15rem] 
            max-[300px]:p-[0] bg-[#d6378f]'>   
                <Marquee autoFill='true'>
                    <span className='px-3 font-albert text-[32px] text-[#8fd637]'>COMING SOON</span>
                </Marquee>
            </div>

            <div className='w-[200vw] p-[1rem] m-2 absolute left-[-95%] bottom-[30%]
            rotate-[-9deg] translate-y-[22rem] z-[1] max-[820px]:bottom-[25rem] max-[820px]:p-[0] 
            max-[820px]:left-[-30rem] max-[480px]:bottom-[31rem] max-[480px]:p-[0] max-[480px]:left-[-7rem]
             max-[480px]:rotate-[-11deg] max-[300px]:bottom-[28rem] max-[300px]:p-[0] bg-[#45315c]'>   
                <Marquee autoFill='true'>
                    <span className='px-3 font-albert text-[32px] text-white'>COMING SOON</span>
                </Marquee>
            </div>

            <div className='w-[200vw] p-[1rem] m-2 absolute rotate-[63deg] 
            left-[-11%] z-[2] max-[820px]:hidden
                             bg-[#ffff2e]'>   
                        <Marquee autoFill='true'>
                            <span className='px-3 font-albert text-[32px] text-[#ff2eff]'>UNDER MAINTAINANCE</span>
                        </Marquee>
            </div>            
        </div>    

        <motion.div className="bg-[#068FFF] h-[32px] w-[32px]
                rounded-[50%] fixed top-0 left-0 pointer-events-none z-20" 
                variants={variants}
                animate={cursorVariant}
                transition={{type: "tween", ease: "backOut"}}> 
        </motion.div>
            
    </div>
  )
}

export default HomePage