import React, { useState } from "react";
import Slide from "../../utils/Slide.jsx";
import "./Home.css";
import { useSwipeable } from "react-swipeable";

function Home() {
  const [showLeftHalf, setShowLeftHalf] = useState(false);
  const [showRightHalf, setShowRightHalf] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => handleLeftChevron(),
    onSwipedRight: (eventData) => handleRightChevron(),
  });

  const handleLeftChevron = () => {
    if (showLeftHalf) {
      setShowLeftHalf(false);
      setShowRightHalf(false);
    } else {
      setShowRightHalf(true);
      console.log(showRightHalf);
    }
  };

  const handleRightChevron = () => {
    if (showRightHalf) {
      setShowLeftHalf(false);
      setShowRightHalf(false);
    } else {
      setShowLeftHalf(true);
      console.log(showLeftHalf);
    }
  };

  return (
    <div>
      <div
        {...handlers}
        className={`transition-all duration-500 ease-in-out grid grid-cols-2 grid-rows-1 w-full overflow-hidden gap-1 relative h-screen`}
      >
        <div
          className={`transition-all duration-500 ease-in-out z-20 px-1 rounded-full flex items-center justify-between transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 absolute bg-yellow-400 top-1/2 shadow-primary-shadow ${
            showRightHalf ? "left-[1.5%]" : "left-1/2"
          } ${showLeftHalf ? "left-[98%]" : "right-1/2"}`}
        >
          <svg
            onClick={handleLeftChevron}
            className={`absolute h-5 mx-1 text-2xl ${
              showLeftHalf ? "right-3" : "right-[40%]"
            } ${showRightHalf ? "hidden" : "visible"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <path
              fill="white"
              d="M2.786 11.318c-1.048-.567-1.048-2.07 0-2.638l11.998-6.5A1.5 1.5 0 0 1 17 3.5v12.999a1.5 1.5 0 0 1-2.215 1.319zm.476-1.758a.5.5 0 0 0 0 .879l11.998 6.5a.5.5 0 0 0 .739-.44v-13a.5.5 0 0 0-.739-.439z"
            ></path>
          </svg>
          <svg
            onClick={handleRightChevron}
            className={`absolute h-5 mx-1 text-2xl ${
              showRightHalf ? "left-3" : "left-[40%]"
            } ${showLeftHalf ? "hidden" : "visible"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <path
              fill="white"
              d="M17.215 11.318c1.047-.567 1.047-2.07 0-2.638L5.216 2.18A1.5 1.5 0 0 0 3.002 3.5v12.999a1.5 1.5 0 0 0 2.214 1.319zm-.476-1.758a.5.5 0 0 1 0 .879l-11.999 6.5a.5.5 0 0 1-.738-.44v-13a.5.5 0 0 1 .738-.439z"
            ></path>
          </svg>
        </div>
        <div
          className={`transition-all duration-700 ease-in-out h-screen bg-cover bg-center w-full ${
            showRightHalf ? "opacity-0" : "visible"
          } ${showLeftHalf ? "col-span-2" : "col-span-1"}`}
          style={{
            backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Background%20Greenapple.png"})`,
          }}
        >
          {showLeftHalf ? (
            <img
              className={`transition-all duration-500 ease-in-out absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                showLeftHalf ? "opacity-100" : "opacity-0"
              }`}
              src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
              alt="Juus bottle"
            />
          ) : (
            <img
              className="absolute z-10 top-1/2 left-1/2 -translate-x-[54%] -translate-y-1/2"
              src="https://juusstorage.blob.core.windows.net/creatives/Homepage JC/Half bottle.png"
              alt="Juus bottle"
            />
          )}
        </div>
        <div
          className={`transition-all duration-700 ease-in-out h-screen bg-cover bg-center w-full ${
            showRightHalf ? "col-span-2" : "col-span-1"
          } ${showLeftHalf ? "opacity-0" : "visible"} `}
          style={{
            backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Nova%20background.png"})`,
          }}
        >
          {showRightHalf ? (
            <img
              className={`transition-all duration-500 ease-in-out absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                showRightHalf ? "opacity-100" : "opacity-0"
              }`}
              src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/full%20bottle%20nova.png"
              alt="Nova bottle"
            />
          ) : (
            <img
              className="absolute z-10 top-1/2 left-1/2 transform -translate-x-[52%] -translate-y-1/2"
              src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/half%20bottle%20nova.png"
              alt="Nova bottle"
            />
          )}
        </div>
        {!(showLeftHalf || showRightHalf) && (
          <img
            className="absolute inset-x-0 bottom-0 translate-x-[9%] w-11/12"
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png"
            alt=""
          />
        )}
      </div>
    </div>
  );
}

export default Home;
