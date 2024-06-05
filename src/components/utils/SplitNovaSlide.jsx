import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";

const SplitNovaSlide = memo(() => {
  return (
    <div className="relative font-anton">
      <div
        style={{
          backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/bgNova-small.png"})`,
        }}
        className={`relative overflow-hidden h-screen bg-cover bg-center`}
      >
        <Fade delay={300} cascade damping={0.75}>
          <img
            fetchPriority="high"
            loading="lazy"
            className="pointer-events-none select-none scale-x-105 xxs:scale-x-110 scale-y-[1.13] xxs:scale-y-[1.195] sm:scale-[.85] lg:scale-x-[.9] lg:scale-y-[.97] xl:scale-x-[.4] xl:scale-y-[.435] 4xl:scale-x-[.45] 4xl:scale-y-[.475] 6xl:scale-x-[.5] 6xl:scale-y-[.53] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/full%20bottle%20nova.png"
            alt=""
          />
          <div className="pointer-events-none select-none absolute flex flex-col justify-center items-start bottom-[6%] xxs:bottom-[8.5%] lg:bottom-[6%] 3xl:bottom-0 right-[7%] xxxxs:right-[2.25%] xxxs:right-[12.5%] xxs:right-[5%] xsm:right-[8.25%] sm:right-[15%] lg:right-[16%] xl:right-[35%] 2xl:right-[36%] 3xl:right-[34.5%] 4xl:right-[35.75%] 5xl:right-[36.75%] 6xl:right-[39.25%] text-5xl xxxxs:text-6xl xxxs:text-5xl xxs:text-6xl lg:text-8xl xl:text-5xl 3xl:text-7xl text-snow font-extrabold tracking-wide">
            <h1>INTO</h1>
            <h1>FUTURE</h1>
          </div>
        </Fade>
      </div>
    </div>
  );
});
// scale-125 xs:scale-110 md:scale-100 xl:scale-75 2xl:scale-[.55] 3xl:scale-50 6xl:scale-[.6] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform
export default SplitNovaSlide;
