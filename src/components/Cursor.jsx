import React, { useState, useEffect } from 'react'
import {motion } from 'framer-motion'



const Cursor = () => {
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
  return (
    <div>
        <motion.div className="bg-[#068FFF] h-[32px] w-[32px]
                rounded-[50%] fixed top-0 left-0 pointer-events-none z-20" 
                variants={variants}
                animate={cursorVariant}
                transition={{type: "tween", ease: "backOut"}}> 
        </motion.div>
    </div>
  )
}

export default Cursor

//------------------>>>> DELETE THIS <<<<---------------------//