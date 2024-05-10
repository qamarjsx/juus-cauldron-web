import React from "react";
import JuusHeader from "../../utils/JuusHeader.jsx";
import { Link } from "react-router-dom";
import Footer from "../../utils/Footer.jsx";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";


function JuusHome() {

  return (
    <motion.div className="relative overflow-x-hidden bg-black scroll-smooth"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}} >
      <div className="">
        <JuusHeader />
      </div>
      <main className="mt-24 xl:mt-16 3xl:mt-8 h-screen flex flex-col items-center justify-between lg:h-auto">
        <div className="">
          <video controls disablePictureInPicture controlsList="nodownload" autoPlay loop playsInline className="select-none w-full aspect-video xl:h-full 3xl:h-screen 4xl:aspect-auto">
            <source
              src={
                "https://juusstorage.blob.core.windows.net/website/videos/home/juus-fit-ad-desktop.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="">
          <Fade direction="left" cascade damping={0.5}>
            <img
              className="mt-4 xl:mt-2 lg:mt-8 sm:scale-90 lg:scale-[.8] xl:scale-75 3xl:scale-[.65] lg:-ml-16 xl:-ml-28 3xl:-ml-48 5xl:-ml-64 6xl:-ml-80 pointer-events-none select-none"
              src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/Future is Sugar (typography).png"
              alt=""
            />
            <img
              className="scale-105 sm:scale-95 lg:scale-[.85] xl:scale-[.8] 3xl:scale-[.7] lg:-ml-16 xl:-ml-28 3xl:-ml-48 5xl:-ml-64 6xl:-ml-80 lg:-mt-8 xl:-mt-12 3xl:-mt-20 5xl:-mt-28 pointer-events-none select-none"
              src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Free%20Paragraph%20(typography).png"
              alt=""
            />
          </Fade>
          </div>
        </div>
        <Link className="sm:my-20 lg:my-24 xl:my-32 3xl:my-44 5xl:my-52" to={"/juus/shop"}>
          <Fade direction="down" duration={1000} delay={500}>
          <button
            className="select-none cursor-pointer flex items-center font-bold justify-between p-2 w-40 lg:w-56 xl:w-72 h-9 lg:h-11 text-snow text-sm lg border-2 rounded-3xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition"
          >
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
    </motion.div>
  );
}

export default JuusHome;
