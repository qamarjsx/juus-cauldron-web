import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function SplitJuusSlide() {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Background%20Greenapple.png"})`,
        }}
        className={`relative overflow-hidden h-screen bg-cover bg-center`}
      >
        <Fade delay={300} cascade damping={0.75}>
          <img
            className="scale-105 xxs:scale-110 sm:scale-[.85] lg:scale-90 xl:scale-[.4] 4xl:scale-[.45] 6xl:scale-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
            alt=""
          />
          <div className="absolute flex flex-col justify-center items-end bottom-[7%] 3xl:bottom-[5%] left-[13.5%] xxxxs:left-[17%] xxxs:left-[18%] xxs:left-[11%] sm:left-[21%] lg:left-1/4 xl:left-[37%] 2xl:left-[38%] 3xl:left-[37.75%] 4xl:left-[36.5%] 5xl:left-[37%] 6xl:left-[39.75%] text-4xl xxs:text-5xl lg:text-6xl xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-snow font-extrabold">
            <h1>DELVE</h1>
            <h1>THE</h1>
          </div>
        </Fade>
      </div>
    </div>
  );
}
// scale-125 xs:scale-110 md:scale-100 xl:scale-75 2xl:scale-[.55] 3xl:scale-50 6xl:scale-[.6] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform
export default SplitJuusSlide;
