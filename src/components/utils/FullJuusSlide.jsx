import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import FullNovaSlide from "./FullNovaSlide";


const FullJuusSlide = memo(({ sliderValue, setSliderValue }) => {
  return (
    <div className="relative h-auto">
      <div
        style={{
          backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Background%20Greenapple.png"})`,
        }}
        onClick={() => setSliderValue(95)}
        className={`flex flex-col justify-evenly sm:justify-evenly lg:justify-around 2xl:justify-evenly items-center relative overflow-hidden h-screen bg-cover bg-center xl:bg-bottom`}
      >
        <Fade triggerOnce={true}>
        <img
          loading="lazy"
          className={`pointer-events-none select-none ${
            sliderValue >= 80 ? "scale-[1.15]" : "scale-110"
          } ${sliderValue >= 80 ? "xxs:scale-[1.2]" : "xxs:scale-[1.15]"} ${
            sliderValue >= 80 ? "sm:scale-90" : "sm:scale-[.85]"
          } ${sliderValue >= 80 ? "lg:scale-95" : "lg:scale-90"} ${
            sliderValue >= 80 ? "xl:scale-[.45]" : "xl:scale-[.4]"
          } ${sliderValue >= 80 ? "4xl:scale-50" : "4xl:scale-[.45]"} ${
            sliderValue >= 80 ? "6xl:scale-[.55]" : "6xl:scale-50"
          } absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform ${sliderValue >= 80 && "-translate-x-[47%] -translate-y-[52%]"}`}
          src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
          alt="Juus Bottle"
        /></Fade>
        {sliderValue >= 80 ? (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 9 }}
            className="w-full lg:w-9/12 xl:w-1/2 3xl:w-[45%] 6xl:w-5/12 absolute flex flex-col bottom-[15%] xxxs:bottom-[8%] xxs:bottom-[14%] xsm:bottom-[9%] lg:bottom-[6%] xl:bottom-0 6xl:bottom-[1%] left-[4%] lg:left-[12%] xl:left-[25%] text-snow"
          >
            <div className="font-anton flex items-center">
              <h1 className="text-7xl xsm:text-[84px] lg:text-[108px] xl:text-[84px] 3xl:text-8xl 4xl:text-[108px] 6xl:text-[120px]">
                JUUST
              </h1>
              <div className="ml-1 lg:ml-2 lg:-mt-2 xl:-mt-0 3xl:-mt-2 4xl:-mt-3 6xl:-mt-4 flex flex-col justify-between lg:justify-center items-start ">
                <h1 className="text-3xl xsm:text-[40px] lg:text-[50px] xl:text-[40px] 3xl:text-[46px] 4xl:text-[50px] 6xl:text-[58px] xsm:leading-none lg:leading-[1.15] xl:leading-none 3xl:leading-tight">
                  YOUR
                </h1>
                <h1 className="text-3xl xsm:text-[40px] lg:text-[50px] xl:text-[40px] 3xl:text-[46px] 4xl:text-[50px] 6xl:text-[58px]">
                  ULTIMATE
                </h1>
              </div>
            </div>
            <div className="flex items-center lg:justify-between">
              <h1 className="font-anton text-7xl xsm:text-[84px] lg:text-[108px] xl:text-[84px] 3xl:text-8xl 4xl:text-[108px] 6xl:text-[120px]">
                DRINK
              </h1>
              <Link to={"/juus"}>
                <motion.button
                  animate={{ x: [0, 5, -5, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className={`hover:text-black hover:bg-snow shadow-primary-shadow mx-5 h-[26px] w-28 text-xs px-1.5 border-2 rounded-3xl flex items-center justify-center`}
                >
                  <span>DISCOVER MORE</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ) : (
          <Fade triggerOnce={true} delay={300}>
            <div className="font-anton pointer-events-none select-none absolute flex flex-col justify-center items-end bottom-[15%] xxxs:bottom-[12%] xxs:bottom-[14%] lg:bottom-[9.67%] xl:bottom-[11%] 3xl:bottom-[7%] 6xl:bottom-[3%] left-[13.5%] xxxxs:left-[10%] xxxs:left-[19%] xxs:left-[12.5%] xsm:left-[16%] sm:left-[21%] lg:left-[24%] xl:left-[37.5%] 2xl:left-[38%] 3xl:left-[37.5%] 4xl:left-[38.1%] 5xl:left-[39%] 6xl:left-[38%] text-5xl xxxxs:text-6xl xxxs:text-5xl xxs:text-6xl lg:text-[84px] xl:text-5xl 3xl:text-7xl 6xl:text-8xl text-snow font-semibold tracking-wide">
              <h1>DELVE</h1>
              <h1>THE</h1>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
});

export default FullJuusSlide;
