import React, { lazy, memo } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
const JuusVideo = lazy(() => import("../../utils/JuusVideo.jsx"));
const Footer = lazy(() => import("../../utils/Footer.jsx"));
const JuusHeader = lazy(() => import("../../utils/JuusHeader.jsx"));

const JuusHome = memo(() => {
  return (
    <motion.div
      className="relative overflow-x-hidden bg-black scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="">
        <JuusHeader />
      </div>
      <main className="mt-20 xl:mt-16 3xl:mt-8 h-screen flex flex-col items-center justify-between lg:h-auto">
        <div className="">
          <JuusVideo />
          <div className="">
            <Fade triggerOnce={true} direction="left" cascade damping={0.5}>
              <img
                className="mt-4 xl:mt-2 3xl:-mt-7 lg:mt-8 scale-75 sm:scale-90 lg:scale-[.55] xl:scale-50 3xl:scale-[.40] 6xl:scale-[.35] -ml-8 xxxxs:-ml-9 lg:-ml-36 xl:-ml-[216px] 3xl:-ml-[360px] 4xl:-ml-96 5xl:-ml-[394px] 6xl:-ml-[575px] pointer-events-none select-none"
                src="https://juusstorage.blob.core.windows.net/creatives/Juus Home/future is sugar.png"
                alt=""
              />
              <img
                className="scale-105 sm:scale-95 lg:scale-[.8] xl:scale-[.8] 3xl:scale-[.65] 6xl:scale-50 lg:-ml-20 xl:-ml-28 3xl:-ml-60 4xl:-ml-64 5xl:-ml-64 6xl:-ml-[480px] -mt-1.5 lg:-mt-12 xl:-mt-[72px] 3xl:-mt-32 4xl:-mt-36 5xl:-mt-40 6xl:-mt-60 pointer-events-none select-none"
                src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Free%20Paragraph%20(typography).png"
                alt=""
              />
            </Fade>
          </div>
        </div>
        <Link
          className="sm:my-20 lg:my-24 xl:my-32 3xl:my-44 5xl:my-52"
          to={"/juus/shop"}
        >
          <Fade direction="down" duration={1000} delay={500}>
            <button className="select-none cursor-pointer flex items-center font-bold justify-between p-2 w-40 lg:w-56 xl:w-72 h-9 lg:h-11 text-snow text-sm lg border-2 rounded-3xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition">
              <span className="mx-auto">DISCOVER FLAVORS</span>
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke={arrowColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
              ></path>
            </svg> */}
            </button>
          </Fade>
        </Link>
        <img
          className=""
          src="https://juusstorage.blob.core.windows.net/website/images/home/black-mid-banner.png"
          alt=""
        />
      </main>
      <div>
        <Footer />
      </div>
    </motion.div>
  );
});

export default JuusHome;
