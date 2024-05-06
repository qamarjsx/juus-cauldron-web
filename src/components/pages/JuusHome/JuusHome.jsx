import React, { useState } from "react";
import JuusHeader from "../../utils/JuusHeader.jsx";
import { Link } from "react-router-dom";
import Footer from "../../utils/Footer.jsx";

function JuusHome() {
  const [arrowColor, setArrowColor] = useState("white");

  return (
    <div className="relative overflow-x-hidden bg-black scroll-smooth">
      <div className="">
        <JuusHeader />
      </div>
      <main className="mt-24 h-screen flex flex-col items-center justify-between lg:h-auto">
        <div className="h-1/2">
          <video controls autoPlay loop playsInline className="w-full aspect-video">
            <source
              src={
                "https://juusstorage.blob.core.windows.net/website/videos/home/juus-fit-ad-desktop.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div>
            <img
              className="mt-4 xl:mt-2 lg:mt-8 xl:scale-[.8] 3xl:scale-[.7] 5xl:scale-[.6] xl:-ml-20 3xl:-ml-40 5xl:-ml-72 pointer-events-none select-none"
              src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/Future is Sugar (typography).png"
              alt=""
            />
            <img
              className="scale-105 xl:scale-[.85] 3xl:scale-[.75] 5xl:scale-[.65] xl:-ml-20 3xl:-ml-40 5xl:-ml-72 xl:-mt-6 3xl:-mt-20 5xl:-mt-28 pointer-events-none select-none"
              src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Free%20Paragraph%20(typography).png"
              alt=""
            />
          </div>
        </div>
        <Link className="my-32 3xl:my-44 5xl:my-56" to={"/juus/shop"}>
          <button
            onMouseEnter={() => setArrowColor("black")}
            onMouseLeave={() => setArrowColor("white")}
            className="cursor-pointer flex items-center font-bold justify-between p-2 w-40 lg:w-56 xl:w-72 h-9 lg:h-11 text-snow text-sm lg border-2 rounded-3xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition"
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
        </Link>
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
