import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function SlideA() {
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
            className="scale-105 xs:scale-110 md:scale-100 lg:scale-75 2xl:scale-[.55] 3xl:scale-[.4] 6xl:scale-[.45] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
            alt=""
          />
          <div className="absolute flex flex-col justify-center items-end bottom-[7%] xs:bottom-[5%] 3xl:bottom-[2.5%] left-[12.5%] xxxs:left-[18%] xxs:left-[12.5%] xs:left-[17%] sm:left-[21%] md:left-1/4 xl:left-1/3 3xl:left-[38%] 5xl:left-[40%] text-4xl lg:text-6xl xl:text-5xl 6xl:text-6xl text-snow font-extrabold">
            <h1>DELVE</h1>
            <h1>THE</h1>
          </div>
        </Fade>
      </div>
    </div>
  );
}
// scale-125 xs:scale-110 md:scale-100 xl:scale-75 2xl:scale-[.55] 3xl:scale-50 6xl:scale-[.6] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform
export default SlideA;
