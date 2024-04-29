import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


function SlideC({showFullSlide}) {
  const [arrowColor, setArrowColor] = useState("white");

  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Nova%20background.png"})`,
        }}
        className={`flex flex-col ${showFullSlide? "justify-evenly" : "justify-between"} overflow-hidden h-screen bg-cover bg-center`}
      > 
        <div className="flex flex-col items-center justify-center">
          {showFullSlide && <Fade direction="down" className="flex flex-col items-center justify-center"> <img
            className="mt-28 w-10/12 xxs:w-9/12"
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png"
            alt=""
          /></Fade>}
          <img
            className={`transition-transform ease-in-out duration-1000 -mt-10 scale-125 xxs:scale-105 relative top-1/2 left-1/2 -translate-x-1/2 ${showFullSlide? "-translate-y-3/4" : "translate-y-1/2"}`}
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
            alt=""
          />
        </div>
        {showFullSlide ?  
        (
        <Fade direction="right"><div className="flex flex-col items-center justify-center mx-3 pt-10">
          <img
            className="w-10/12 xxs:w-9/12"
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png"
            alt=""
          />
          
          <Link className="my-7 self-end" to={"/shop"}>
            <button
              onMouseEnter={() => setArrowColor("black")}
              onMouseLeave={() => setArrowColor("white")}
              className="xxs:-mt-5 cursor-pointer flex items-center italic justify-between p-3 w-36 h-11 text-snow text-sm border rounded-full hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition"
            >
              Discover more
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
            </button>
          </Link>
        </div></Fade>) : (<div className="flex flex-col mb-36 items-end">
          <h1 className="text-white font-semibold text-4xl pr-[27%]">THE</h1>
          <h1 className="text-white font-semibold text-4xl pr-[5%]">FUTURE</h1>
        </div>)}
      </div>
    </div>
  );
}

export default SlideC;
