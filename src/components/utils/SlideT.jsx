import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function SlideT() {
  const [arrowColor, setArrowColor] = useState("white");

  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Background%20Greenapple.png"})`,
        }}
        className={`flex flex-col justify-around items-center relative overflow-hidden h-screen bg-cover bg-center`}
      >
        <img
          className="scale-125 xs:scale-110 md:scale-100 lg:scale-75 2xl:scale-[.55] 3xl:scale-[.4] 6xl:scale-[.45] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
          alt="Juus Bottle"
        />
        <Fade
          direction="down"
          className="w-11/12 xxxs:w-10/12 xxs:w-9/12 xs:w-8/12 lg:w-7/12 3xl:w-1/5 4xl:w-1/4"
        >
          <img
            className=""
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png"
            alt="FUTURE"
          />
        </Fade>
        <div className="z-30 flex flex-col items-center mt-40 xxs:mt-48 xs:mt-56 3xl:mt-48 -mb-16 xxxs:-mb-[72px] 3xl:-mb-16 3xl:flex-row 3xl:justify-center">
          <Fade
            delay={300}
            direction="left"
            className="w-11/12 xxxs:w-10/12 xxs:w-9/12 xs:w-8/12 lg:w-7/12 3xl:w-1/5 4xl:w-1/4"
          >
            <img
              className=""
              src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png"
              alt="Text about Juus"
            />
          </Fade>
          <Fade delay={800} direction="up" className="self-end mx-5">
            <Link className="" to={"/nova"}>
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

export default SlideT;
