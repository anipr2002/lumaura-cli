import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import useSound from "use-sound";
import music from "../assets/Olepash_-_Easy_Joy.mp3";
import { TfiGallery } from "react-icons/tfi";
import { FiMusic } from "react-icons/fi";
import { RiMailAddFill } from "react-icons/ri";
import MagneticIcons from "../components/MagneticIcons";
import { Route, Routes, Link } from "react-router-dom";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [cursorVariant, setCursorVariant] = useState("true");
  const [cursorText, setCursorText] = useState("");
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
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
      mixBlendMode: "difference",
    },
    icon: {
      opacity: 1,

      backgroundColor: "#ffffff00",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      border: "4px white solid",
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
  };

  const textEnter = () => {
    setCursorVariant("text");
  };
  const textLeave = () => {
    setCursorVariant("default");
  };
  const iconEnter = () => {
    setCursorVariant("icon");
  };
  const iconLeave = () => {
    setCursorVariant("default");
  };

  const [play, { stop }] = useSound(music, { volume: 0.1 });
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusicClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stop();
    } else {
      play();
      setIsPlaying(true);
    }
  }; //music hook

  return (
    <div className="flex  w-full h-screen justify-between flex-col fixed overflow-hidden bg-[#191926]">
      {/* ---------------- TOP MAQUEEE ---------------- */}
      <div className="h-[50%] w-full cursor-default">
        <div
          className="w-[200vw] p-[1rem] m-2 absolute left-[-41%] 
            rotate-[-10deg] translate-y-[1rem] z-[1] max-[820px]:top-0 max-[820px]:left-[-7rem] 
            max-[820px]:p-[0] max-[820px]:rotate-[-10deg] max-[480px]:top-[0.7rem] max-[480px]:p-[0]
             max-[480px]:rotate-[10deg] 
            max-[300px]:top-[1rem] max-[300px]:rotate-[10deg] max-[300px]:p-[0]
             bg-[#c93a99]"
        >
          <Marquee autoFill="true">
            <span className="px-3 font-albert text-[32px] text-white">
              FOLLOW US!
            </span>
          </Marquee>
        </div>

        <div
          className="w-[200vw] p-[1rem] m-2 absolute left-[-67%] top-[-3%]
            rotate-[10deg] translate-y-[1rem] z-[3] max-[820px]:top-[3.3rem]
             max-[820px]:left-[-20rem] max-[820px]:p-[0] max-[820px]:rotate-[7.5deg] 
             max-[480px]:top-[7.8rem] max-[480px]:p-[0] max-[480px]:rotate-[-10deg] 
             max-[300px]:top-[7.8rem] max-[300px]:left-[-16rem] 
            max-[300px]:rotate-[-10deg] max-[300px]:p-[0] bg-red-400"
        >
          <Marquee autoFill="true">
            <span className="px-3 font-albert text-[32px] text-[#71f8f8]">
              HELLO
            </span>
          </Marquee>
        </div>

        <div
          className="w-[200vw] p-[1rem] m-2 absolute rotate-[120deg] 
                            left-[-73%] z-[1] max-[820px]:hidden
                             bg-[#893d93]"
        >
          <Marquee autoFill="true">
            <span className="px-3 font-albert text-[32px] text-white">
              CONTACT
            </span>
          </Marquee>
        </div>
      </div>
      {/* ---------------- LOGO ----------------------- */}
      <div
        className="flex items-center justify-center flex-col text-center text-[2rem] tracking-wide
                        leading-[2.2rem] max-[480px]:text-[1.5rem] max-[480px]:mb-[2rem]"
      >
        <div className="pt-[2rem] pb-[2rem] ">
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="font-albert py-4 px-4 font-bold text-[64px] cursor-default text-[#FF2B59]"
          >
            <MagneticIcons>
              <span>LUMAURA</span>

              <span className="mx-0.5 text-sm bottom-[2rem] right-[-0.24rem]">
                ©
              </span>
            </MagneticIcons>
          </h1>

          <div className="flex mt-8 justify-between">
            <MagneticIcons>
              <div
                onMouseEnter={() => {
                  setCursorText("Contact");
                  iconEnter();
                }}
                onMouseLeave={() => {
                  setCursorText("");
                  iconLeave();
                }}
                className="h-[4rem] w-[4rem] rounded-full 
                                         bg-teual-100 cursor-none
                                        flex flex-col justify-center items-center"
              >
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className="flex flex-col justify-center text-[#FF2B59]  items-center"
                >
                  <RiMailAddFill size={30} />
                </motion.div>
              </div>
            </MagneticIcons>

            <Link to="/gallery-menu">
              <MagneticIcons>
                <div
                  onMouseEnter={() => {
                    setCursorText("Gallery");
                    iconEnter();
                  }}
                  onMouseLeave={() => {
                    setCursorText("");
                    iconLeave();
                  }}
                  className="h-[5rem] w-[5rem] rounded-full 
                                         bg-oraunge-100 cursor-none
                                        flex flex-col justify-center items-center"
                >
                  <motion.div
                    whileTap={{ scale: 0.8 }}
                    className="flex flex-col justify-center text-[#FF2B59] items-center"
                  >
                    <TfiGallery size={30} />
                  </motion.div>
                </div>
              </MagneticIcons>
            </Link>

            <MagneticIcons>
              <div
                onMouseEnter={() => {
                  setCursorText("Music");
                  iconEnter();
                }}
                onMouseLeave={() => {
                  setCursorText("");
                  iconLeave();
                }}
                className="h-[4rem] w-[4rem] rounded-full 
                                         bg-puruple-500 cursor-none
                                        flex flex-col justify-center items-center"
              >
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className="justify-center items-center text-[#FF2B59] "
                  onClick={handleMusicClick}
                >
                  <FiMusic size={30} />
                </motion.div>
              </div>
            </MagneticIcons>
          </div>
        </div>
      </div>
      {/* ------------------BOTTOM MARQUEE-------------- */}
      <div className="h-[50%] w-full cursor-default">
        <div
          className="w-[200vw] p-[1rem] m-2 absolute left-[-25%] bottom-[36%] rotate-[9deg] 
            translate-y-[22rem] z-[2] max-[820px]:bottom-[25rem] max-[820px]:p-[0] max-[820px]:left-[-20rem] 
            max-[480px]:bottom-[25rem] max-[480px]:p-[0] max-[480px]:rotate-[10deg] max-[300px]:left-[-15rem] 
            max-[300px]:p-[0] bg-[#d6378f]"
        >
          <Marquee autoFill="true">
            <span className="px-3 font-albert text-[32px] text-[#8fd637]">
              COMING SOON
            </span>
          </Marquee>
        </div>

        <div
          className="w-[200vw] p-[1rem] m-2 absolute left-[-95%] bottom-[30%]
            rotate-[-9deg] translate-y-[22rem] z-[1] max-[820px]:bottom-[25rem] max-[820px]:p-[0] 
            max-[820px]:left-[-30rem] max-[480px]:bottom-[31rem] max-[480px]:p-[0] max-[480px]:left-[-7rem]
             max-[480px]:rotate-[-11deg] max-[300px]:bottom-[28rem] max-[300px]:p-[0] bg-[#45315c]"
        >
          <Marquee autoFill="true">
            <span className="px-3 font-albert text-[32px] text-white">
              COMING SOON
            </span>
          </Marquee>
        </div>

        <div
          className="w-[200vw] p-[1rem] m-2 absolute rotate-[63deg] 
            left-[-11%] z-[2] max-[820px]:hidden
                             bg-[#ffff2e]"
        >
          <Marquee autoFill="true">
            <span className="px-3 font-albert text-[32px] text-[#ff2eff]">
              UNDER MAINTAINANCE
            </span>
          </Marquee>
        </div>
      </div>

      <motion.div
        className="bg-[#068FFF] h-[32px] w-[32px] flex justify-center items-center
                rounded-[50%] fixed top-0 left-0 pointer-events-none z-20"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <span className={"font-ubuntu text-center text-white"}>
          {cursorText}
        </span>
      </motion.div>
    </div>
  );
};

export default HomePage;
