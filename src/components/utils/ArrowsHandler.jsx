import React from "react";
import { ReactCompareSliderHandle } from 'react-compare-slider';
function ArrowsHandler() {
  return (
    <ReactCompareSliderHandle>
    <div className="shadow-primary-shadow z-20 absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full h-12 w-12 flex justify-center items-center">
      <svg
        className={`h-5 mx-1 text-2xl`}
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
        className={`h-5 mx-1 text-2xl`}
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
    </ReactCompareSliderHandle>
  );
}

export default ArrowsHandler;
