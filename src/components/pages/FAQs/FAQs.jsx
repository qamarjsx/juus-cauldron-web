import React, { useRef } from "react";
import "./FAQs.css";

function FAQs() {
  let isSliderLocked = false;
  const sliderRef = useRef(null);
  const sliderHandleRef = useRef(null);
  const sliderImgWrapperRef = useRef(null);

  function sliderMouseMove(event) {
    if (isSliderLocked) return;
    // console.log(event);
    const sliderLeftX = sliderRef.current.offsetLeft;
    const sliderWidth = sliderRef.current.clientWidth;
    const sliderHandleWidth = sliderHandleRef.current.clientWidth;

    let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
    if (mouseX < 0) mouseX = 0;
    else if (mouseX > sliderWidth) mouseX = sliderWidth;

    sliderImgWrapperRef.current.style.width = `${(
      (1 - mouseX / sliderWidth) *
      100
    ).toFixed(4)}%`;
    sliderHandleRef.current.style.left = `calc(${(
      (mouseX / sliderWidth) *
      100
    ).toFixed(4)}% - ${sliderHandleWidth / 2}px)`;
  }

  function sliderMouseDown(event) {
    if (isSliderLocked) isSliderLocked = false;
    sliderMouseMove(event);
  }

  function sliderMouseUp() {
    if (!isSliderLocked) isSliderLocked = true;
  }

  function sliderMouseLeave() {
    if (isSliderLocked) isSliderLocked = false;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-900">
      <div
        ref={sliderRef}
        onMouseMove={sliderMouseMove}
        onTouchMove={sliderMouseMove}
        onMouseDown={sliderMouseDown}
        onTouchStart={sliderMouseDown}
        onMouseUp={sliderMouseUp}
        onTouchEnd={sliderMouseUp}
        onMouseLeave={sliderMouseLeave}
        id="image-comparison-slider"
        className="relative overflow-hidden cursor-e-resize"
      >
        <img
          src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
          className="block h-auto max-h-[80vh] object-cover pointer-events-none select-none"
        />
        <div
          ref={sliderImgWrapperRef}
          className="img-wrapper absolute top-0 right-0 w-1/2 h-full overflow-hidden z-10"
        >
          <img
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
            className="absolute top-0 right-0 h-full max-h-[80vh] object-cover pointer-events-none select-none"
          />
        </div>
        {/* <span className="label label-before">Before</span>
      <span className="label label-after">After</span> */}
        <div
          ref={sliderHandleRef}
          className="handle absolute top-0 h-full flex flex-col justify-center items-center select-none z-20"
        >
          <div className="handle-line w-0.5 grow bg-white"></div>
          <div className="handle-circle text-white border-2 border-solid border-white rounded-[50%] flex items-center justify-evenly">
            <svg
              className={``}
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
              className={``}
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
          <div className="handle-line w-0.5 grow bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
