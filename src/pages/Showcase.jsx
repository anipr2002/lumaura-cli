import React from "react";
import Navbar from "../components/Navbar";
import deathly from "../assets/deathly.gif";
import Marquee from "react-fast-marquee";

const Showcase = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#191926]">
      <div className="flex justify-center items-center z-10  h-full">
        <object
          className="text-black scale"
          type="image/gif"
          data={deathly}
        ></object>
      </div>
      <div className="absolute top-[40%]">
        <Marquee autoFill="true" speed={200}>
          <span
            className="font-albert uppercase text-[228px] leading-[0.935] 
                md:leading-[0.825] tracking-[-0.02em] text-center 
                text-blu mb-0 pb-0 px-7 text-[#FF2B59]"
          >
            {" "}
            DEATHLY HALLOWS{" "}
          </span>
          <span
            className="font-albert uppercase text-[228px] leading-[0.935] 
                md:leading-[0.825] tracking-[-0.02em] text-center 
                text-blu mb-0 text-[#FF2B59] pb-0 px-7"
          >
            {" "}
            DEATHLY HALLOWS{" "}
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default Showcase;
