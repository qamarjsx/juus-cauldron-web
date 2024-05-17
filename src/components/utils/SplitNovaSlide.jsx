import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

function SplitNovaSlide() {
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
            className="pointer-events-none select-none scale-105 xxs:scale-110 sm:scale-[.85] lg:scale-90 xl:scale-[.4] 4xl:scale-[.45] 6xl:scale-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/full%20bottle%20nova.png"
            alt=""
          />
          <div className="pointer-events-none select-none absolute flex flex-col justify-center items-start bottom-[3.5%] xxxs:bottom-[4.5%] 3xl:bottom-[1%] right-[6%] xxxxs:right-[10%] xxxs:right-[11.5%] xxs:right-[3%] sm:right-[15%] lg:right-[19.5%] xl:right-[34.5%] 2xl:right-[36%] 3xl:right-[35%] 4xl:right-[33.5%] 5xl:right-[34.5%] 6xl:right-[37.5%] text-4xl xxs:text-5xl lg:text-6xl xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-snow font-extrabold">
            <h1>INTO</h1>
            <h1>FUTURE</h1>
          </div>
        </Fade>
      </div>
    </div>
  );
}
// scale-125 xs:scale-110 md:scale-100 xl:scale-75 2xl:scale-[.55] 3xl:scale-50 6xl:scale-[.6] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform
export default SplitNovaSlide;
