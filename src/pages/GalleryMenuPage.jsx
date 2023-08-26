import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticIcons from "../components/MagneticIcons";
import { AiFillHome } from "react-icons/ai";
import logo from "../assets/lumLogo.svg";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import AnimatePages from "../components/AnimatePages";
const projects = [
  {
    title: "Guitar",
    color: "#F06318",
    url: "/guitar",
  },
  {
    title: "Air Jordan 1",
    color: "#18F0E8",
    url: "/aj-1",
  },
  {
    title: "Shooting Star",
    color: "#8C0CF0",
    url: "/shooting-star",
  },
  {
    title: "Deathly Hallows",
    color: "#DCF018",
    url: "/deathly-hallows",
  },
  {
    title: "Saturn",
    color: "#F0183C",
    url: "/saturn",
  },
  {
    title: "Ganesha",
    color: "#F0BA18",
    url: "/ganesha",
  },
  {
    title: "Wine Glass",
    color: "#0C34F0",
    url: "/wine-glass",
  },
  {
    title: "Rainbow",
    color: "#0CBCF0",
    url: "/rainbow",
  },
  {
    title: "Swords",
    color: "#91F018",
    url: "/swords",
  },
];

const GalleryMenuPage = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
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
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
    home: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      cursor: "none",
      fontSize: "18px",
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
    logo: {
      opacity: 1,

      backgroundColor: "#ffffff00",
      color: "#000",
      height: 75,
      width: 75,
      fontSize: "18px",
      border: "4px white solid",
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
  };
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const manageMouseEnter = (e, index) => {
    setCursorVariant("project");

    if (
      projects[index].title === "Guitar" ||
      projects[index].title === "Deathly Hallows"
    ) {
      gsap.to(e.target, {
        backgroundColor: projects[index].color,
        y: "-1vw",
        duration: 0.3,
      });
      setCursorText("View");
    } else {
      setCursorText("Coming Soon");
      gsap.to(e.target, {
        backgroundColor: "#CFD2CF",
        y: "-1vw",
        duration: 0.3,
      });
    }
  };

  const manageMouseLeave = (e, index) => {
    setCursorVariant("default");
    setCursorText("");
    gsap.to(e.target, {
      backgroundColor: "#191926",
      y: "0",
      duration: 0.3,
      delay: 0.1,
    });
  };
  const cursorLogoEnter = () => {
    setCursorVariant("logo");
  };
  const cursorLogoLeave = () => {
    setCursorVariant("default");
  };
  const cursorHomeEnter = () => {
    setCursorVariant("home");
    setCursorText("🏠");
  };
  const cursorHomeLeave = () => {
    setCursorVariant("default");
    setCursorText("");
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-[#191926]">
      <div className="flex relative w-screen justify-center">
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="fixed top-6 z-10 hover:cursor-pointer"
        >
          <Link to="/">
            <MagneticIcons>
              <img
                className=""
                onMouseEnter={cursorLogoEnter}
                onMouseLeave={cursorLogoLeave}
                src={logo}
                alt="logo"
              ></img>
            </MagneticIcons>
          </Link>
        </motion.div>

        <span
          className="font-ubuntu text-[32px] hover:cursor-none absolute right-[3%]  top-8 text-[#FF2B59] underline"
          onMouseEnter={cursorHomeEnter}
          onMouseLeave={cursorHomeLeave}
        >
          <Link to="/">
            <MagneticIcons>home</MagneticIcons>
          </Link>
        </span>
      </div>

      <div
        className="flex flex-col font-studio font-extrabold items-center justify-center w-screen
                        h-screen "
      >
        {projects.map((project, index) => {
          return (
            <div
              className="w-[100%] border-t-2 p-[1vh] pl-[2vh] bg-[#191926]
                 text-[5vh] text-white border-white mb-[-3.5vh] hover:cursor-cell"
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index);
              }}
              key={index}
            >
              <p className="m-0 uppercase pointer-events-none hover:translate-y-4">
                {project.title}
              </p>
            </div>
          );
        })}
      </div>

      <Marquee autoFill="true">
        <span
          className="font-ubuntu cursor-default text-white border-b border-t border-white
          text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-pink-600 px-5"
        >
          More Items Coming Soon
        </span>
      </Marquee>

      <motion.div
        className="bg-[#068FFF] h-[32px] w-[32px] flex justify-center items-center 
                rounded-[50%] fixed top-0 left-0  pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <span className={"font-ubuntu text-center"}> {cursorText}</span>
      </motion.div>
    </div>
  );
};

export default AnimatePages(GalleryMenuPage);
