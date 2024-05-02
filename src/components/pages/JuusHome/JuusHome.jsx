import React, { useState } from "react";
import JuusHeader from "../../utils/JuusHeader.jsx";
import { Link } from "react-router-dom";

function JuusHome() {
  const [arrowColor, setArrowColor] = useState("white");

  return (
    <div className="relative overflow-x-hidden bg-black">
      <div className="">
        <JuusHeader />
      </div>
      <main className="pt-24 h-screen flex flex-col items-center justify-between">
        <div>
          <video controls autoPlay className="w-full my-8">
            <source
              src={
                "https://juusstorage.blob.core.windows.net/website/videos/home/juus-fit-ad-mobile.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div>
            <img
              className="mt-4 xl:mt-2 lg:mt-8 xl:scale-[.8] 3xl:scale-[.7] 5xl:scale-[.6] xl:-ml-40 3xl:-ml-80 5xl:-ml-[540px] pointer-events-none select-none"
              src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/Future is Sugar (typography).png"
              alt=""
            />
            <img
              className="scale-105 xl:scale-[.85] 3xl:scale-[.75] 5xl:scale-[.65] xl:-ml-40 3xl:-ml-80 5xl:-ml-[540px] xl:-mt-6 3xl:-mt-20 5xl:-mt-28 pointer-events-none select-none"
              src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Free%20Paragraph%20(typography).png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <video
            autoplay
            loop
            muted
            
          >
            <source
              src={
                "https://juusstorage.blob.core.windows.net/website/videos/home/homepage-explosion.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <Link className="lg:mt-64" to={"/shop"}>
            <button
              onMouseEnter={() => setArrowColor("black")}
              onMouseLeave={() => setArrowColor("white")}
              className="cursor-pointer flex items-center font-bold justify-between p-2 w-40 lg:w-56 xl:w-72 h-9 lg:h-11 text-snow text-sm lg border-2 rounded-3xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition"
            >
              DISCOVER FLAVORS
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
          </Link>
        </div>
        <img
          className=""
          src="https://juusstorage.blob.core.windows.net/website/images/home/black-mid-banner.png"
          alt=""
        />
      </main>
    </div>
  );
}

export default JuusHome;
