import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function FullJuusSlide() {
  const [arrowColor, setArrowColor] = useState("white");

  return (
    <div className="relative h-auto">
      <div
        style={{
          backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Background%20Greenapple.png"})`,
        }}
        className={`flex flex-col justify-evenly xxs:justify-around sm:justify-evenly lg:justify-around 2xl:justify-evenly items-center relative overflow-hidden h-screen bg-cover bg-center`}
      >
        <img
          className="pointer-events-none select-none z-10 scale-105 xxs:scale-110 sm:scale-[.85] lg:scale-90 xl:scale-[.4] 3xl:scale-[.4] 4xl:scale-[.45] 6xl:scale-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
          alt="Juus Bottle"
        />
        <Fade
          direction="down"
          className="w-11/12 xxxs:w-10/12 xxs:w-9/12 xs:w-8/12 lg:w-7/12 3xl:w-1/5 4xl:w-1/4"
        >
          <img
            className="pointer-events-none select-none scale-[.85] xxs:scale-100 sm:scale-90 lg:scale-100 xl:scale-50 2xl:scale-50 3xl:scale-150 4xl:scale-125 6xl:scale-100"
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png"
            alt="FUTURE"
          />
        </Fade>
        <div className="z-30 flex flex-col sm:flex-row lg:flex-row sm:justify-center lg:justify-center 3xl:justify-evenly items-center mt-[112px] xxs:mt-48 xs:mt-56 sm:mt-36 lg:mt-56 xl:-mt-2 3xl:mt-48 4xl:mt-56 -mb-16 xxxs:-mb-[72px] 3xl:-mb-16 3xl:flex-row">
          <Fade
            delay={300}
            direction="left"
            className="w-11/12 xxxs:w-10/12 xxs:w-9/12 xs:w-8/12 lg:w-7/12 3xl:w-1/5 4xl:w-1/4"
          >
            <img
              className="pointer-events-none select-none scale-[.85] xxs:scale-100 sm:scale-90 lg:scale-100 xl:scale-50 2xl:scale-50 3xl:scale-150 4xl:scale-125 6xl:scale-100"
              src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png"
              alt="Text about Juus"
            />
          </Fade>
          <Fade delay={800} direction="down" className="select-none self-end xl:self-center xl:pt-20 3xl:-ml-40 6xl:-ml-80 mx-5">
            <Link className="" to={"/juus"}>
              <button
                onMouseEnter={() => setArrowColor("black")}
                onMouseLeave={() => setArrowColor("white")}
                className="cursor-pointer flex items-center italic justify-between p-2 w-32 h-10 text-snow text-sm border-2 rounded-full hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition"
              >
                Discover more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="2em"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="none"
                    stroke={arrowColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
                  ></path>
                </svg>
              </button>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default FullJuusSlide;
