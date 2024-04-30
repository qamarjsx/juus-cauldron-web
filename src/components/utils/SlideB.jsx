import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function SlideB() {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Nova%20background.png"})`,
        }}
        className={`relative overflow-hidden h-screen bg-cover bg-center`}
      >
        <Fade delay={300} cascade damping={0.75}>
          <img
            className="scale-125 xs:scale-110 md:scale-100 xl:scale-75 2xl:scale-[.55] 3xl:scale-50 6xl:scale-[.6] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
            alt=""
          />
          <div className="absolute flex flex-col justify-center items-start bottom-[7.5%] xs:bottom-[3.75%] 3xl:bottom-[1%] right-[5%] xxxs:right-0 xxs:right-[5%] xs:right-[10%] sm:right-[15%] md:right-[20%] xl:right-[30%] 3xl:right-[36%] 5xl:right-[38%] text-4xl xxxs:text-5xl lg:text-6xl xl:text-5xl 6xl:text-6xl text-snow font-extrabold">
            <h1>INTO</h1>
            <h1>FUTURE</h1>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default SlideB;
