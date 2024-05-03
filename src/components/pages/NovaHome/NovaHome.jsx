import React, { useState } from "react";
import NovaHeader from "../../utils/NovaHeader";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function NovaHome() {
  const [arrowColor, setArrowColor] = useState("white");

  return (
    <div className="relative overflow-x-hidden bg-nova scroll-smooth">
      <div className="">
        <NovaHeader />
      </div>
      <main className="pt-24 pb-10 h-screen flex flex-col items-center">
        <img
          className="h-1/3 lg:h-2/3 w-full object-fill xl:h-[105%] pointer-events-none select-none"
          src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/nova main banner.jpg"
          alt=""
        />
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
        <img
          className="mt-6 lg:mt-16 6xl:mt-0 lg:scale-90 3xl:scale-[.8] 5xl:scale-75 xl:mt-12 pointer-events-none select-none"
          src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Tags.png"
          alt=""
        />
        <Link className="mt-32 lg:mt-64" to={"/nova/shop"}>
            <Fade direction="up" duration={1000} delay={500}>
              <button
                onMouseEnter={() => setArrowColor("black")}
                onMouseLeave={() => setArrowColor("white")}
                className="cursor-pointer flex items-center font-bold justify-between p-2 w-48 lg:w-56 xl:w-72 h-9 lg:h-11 text-snow text-sm lg border-2 rounded-xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition"
              >
                DISCOVER FLAVORS
                <svg
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
                </svg>
              </button></Fade>
            </Link>
      </main>
      <img
        className="pointer-events-none select-none opacity-65 absolute right-0 3xl:right-32 5xl:right-64 6xl:right-96 bottom-16 xxxs:-bottom-16 lg:-bottom-[600px] xl:-bottom-[1366px] 3xl:-bottom-[1600px] 4xl:-bottom-[1700px] 5xl:-bottom-[1750px] 6xl:-bottom-[1920px] scale-150 xxxs:scale-125 lg:scale-100 xl:scale-90 3xl:scale-100 4xl:scale-x-110 5xl:scale-x-125 6xl:scale-x-150"
        src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Doodle%20art.png"
        alt=""
      />
    </div>
  );
}

export default NovaHome;
