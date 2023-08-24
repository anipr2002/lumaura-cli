import React, {useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const [textWidth, setTextWidth] = useState(0);
const text = 'DEATHLY HALLOWS';
const repeatTimes = 50;
const repeatedTimes = Array(repeatTimes).fill(text).join(" ");

const textRef = useRef(null);

useEffect(() => {
    if(textRef.current){
        setTextWidth(textRef.current.offsetWidth);
    }
},[textRef]);

const tickerVariants = {
    animate: {
        x: [0, -textWidth],
        transition: {
            x: {
                duration: 120,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
            }
        }
    }
};

const Marquee = () => {
    return(
        <div className="overflow-hidden whitespace-nowrap w-full flex">
			<motion.div
				className={`${
					darkMode ? "text-[#ffffff]" : "text-[#111111]"
				} inline-block text-[2rem]`}
				variants={tickerVariants}
				initial="animate"
				animate="animate"
				ref={textRef}
			>
				{repeatedText}
			</motion.div>
			<motion.div
				className={`${
					darkMode ? "text-[#ffffff]" : "text-[#111111]"
				} inline-block text-[2rem]`}
				variants={tickerVariants}
				initial="animate"
				animate="animate"
			>
				{repeatedText}
			</motion.div>
		</div>
    )
}

export default Marquee