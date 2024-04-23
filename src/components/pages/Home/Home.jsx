import React, { useState } from "react";
import Slide from "../../utils/Slide.jsx";
import "./Home.css";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    <div className="bg-black">
      <div
        {...handlers}
        className={`grid grid-cols-2 w-full overflow-x-hidden grid-rows-1 gap-2 relative h-screen shadow-primary-shadow `}
      >
        <div className={`px-1 rounded-full flex items-center justify-between transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 absolute bg-yellow-400 top-1/2  ${showRightHalf ? "left-1" : "left-1/2"} ${showLeftHalf ? "left-[98%]" : "right-1/2"}`}>
        <svg
          onClick={handleLeftChevron}
          className={`z-10 absolute h-5 mx-1 text-2xl ${
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
        {/* <svg
          onClick={handleLeftChevron}
          className={`bg-yellow-400 rounded-full z-10 absolute top-1/2 text-2xl ${
            showLeftHalf ? "right-3" : "right-[40%]"
          } ${showRightHalf ? "hidden" : "visible"}`}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 15 15"
        >
          <path
            fill="rich-black"
            fillRule="evenodd"
            d="M8.842 3.135a.5.5 0 0 1 .023.707L5.435 7.5l3.43 3.658a.5.5 0 0 1-.73.684l-3.75-4a.5.5 0 0 1 0-.684l3.75-4a.5.5 0 0 1 .707-.023"
            clipRule="evenodd"
          ></path>
        </svg> */}
        <svg
          onClick={handleRightChevron}
          className={`z-10 absolute h-5 mx-1 text-2xl ${
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
        {/* <svg
          onClick={handleRightChevron}
          className={`bg-yellow-400 rounded-full z-10 absolute top-1/2 text-2xl ${
            showRightHalf ? "left-3" : "left-[40%]"
          } ${showLeftHalf ? "hidden" : "visible"}`}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 15 15"
        >
          <path
            fill="rich-black"
            fillRule="evenodd"
            d="M6.158 3.135a.5.5 0 0 1 .707.023l3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 1 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .023-.707"
            clipRule="evenodd"
          ></path>
        </svg> */}
        <div
          className={`juus-component h-screen ${
            showRightHalf ? "hidden" : "visible"
          } ${showLeftHalf ? "col-span-2 row-span-1" : ""}`}
          style={{
            background:
              "linear-gradient(180deg, rgba(111, 17, 19, 1) 0%, rgba(0, 0, 0, 1) 99%)",
          }}
        >
          {/* <img src="src/assets/apple-front-removebg-preview.png" alt="Juus bottle" /> */}
        </div>
        <div
          className={`nova-component h-screen ${
            showRightHalf ? "col-span-2 row-span-1" : ""
          } ${showLeftHalf ? "hidden" : "visible"} `}
          style={{
            background:
              "linear-gradient(180deg, rgba(17,19,130,1) 0%, rgba(0, 0, 0, 1) 99%)",
          }}
        >
          {/* <img src="src/assets/apple-front-removebg-preview.png" alt="Nova bottle" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
