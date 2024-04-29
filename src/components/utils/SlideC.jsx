import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function SlideC() {
  const [arrowColor, setArrowColor] = useState("white");

  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Background%20Greenapple.png"})`,
        }}
        className={`relative overflow-hidden h-screen bg-cover bg-center`}
      >
        <img
          className="absolute top-[16.67%] xxxs:top-[12%] w-11/12 left-1/2 -translate-x-1/2"
          src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png"
          alt="FUTURE"
        />
        <img
          className="scale-125 sm:scale-110 md:scale-100 xl:scale-75 2xl:scale-[.55] 3xl:scale-50 6xl:scale-[.6] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
          alt="Juus Bottle"
        />
        <div>
        <img
          className="absolute bottom-[5.5%] w-11/12 left-1/2 -translate-x-1/2"
          src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png"
          alt="Text about Juus"
        />

        <Link className="absolute bottom-[2.5%] right-[5%]" to={"/shop"}>
          <button
            onMouseEnter={() => setArrowColor("black")}
            onMouseLeave={() => setArrowColor("white")}
            className="cursor-pointer flex items-center italic justify-between p-2 w-32 h-10 text-snow text-sm border rounded-full hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition"
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
        </div>
      </div>
    </div>
  );
}

export default SlideC;
