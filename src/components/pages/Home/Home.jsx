import React, { useState, useEffect, useRef } from "react";
import Header from "../../utils/Header.jsx";
import FullJuusSlide from "../../utils/FullJuusSlide.jsx";
import FullNovaSlide from "../../utils/FullNovaSlide.jsx";

import "./Home.css";
import "../../../index.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [slideValue, setSlideValue] = useState(50);
  const [showFullJuusSlide, setShowFullJuusSlide] = useState(false);
  const [showFullNovaSlide, setShowFullNovaSlide] = useState(false);
  const navigator = useNavigate();

  const handleSliderDragEnd = () => {
    console.log("drag ended");
    if (slideValue > 15 && slideValue < 85) {
      setSlideValue(50);
    }
  };

  useEffect(() => {
    if (slideValue >= 85) {
      setShowFullJuusSlide(true);
      setShowFullNovaSlide(false);
    } else if (slideValue <= 15) {
      setShowFullJuusSlide(false);
      setShowFullNovaSlide(true);
    } else {
      setShowFullJuusSlide(false);
      setShowFullNovaSlide(false);
    }
  }, [slideValue]);

  useEffect(() => {
    let timer;
    if (showFullJuusSlide) {
      timer = setTimeout(() => {
        navigator("/juus"); // Replace with the actual route for stateOne
      }, 1500);
    } else if (showFullNovaSlide) {
      timer = setTimeout(() => {
        navigator("/nova"); // Replace with the actual route for stateTwo
      }, 1500);
    }

    return () => clearTimeout(timer); // Cleanup timeout if dependencies change
  }, [showFullJuusSlide, showFullNovaSlide, navigator]);

  const handleSliderDrag = (e) => {
    console.log(slideValue);
    setSlideValue(e.target.value);
  };

  const clipPathStyle = {
    clipPath: `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <main className={`h-screen w-full relative overflow-hidden ${isOpen && "brightness-95"}`} onClick={() => setIsOpen(false)}>
        <div className="w-full h-full absolute">
          <FullNovaSlide sliderValue={slideValue} />
        </div>
        <div
          className="w-full h-full absolute transition-[clip-path] duration-300 delay-0 ease-custom-ease"
          style={clipPathStyle}
        >
          <FullJuusSlide sliderValue={slideValue} />
        </div>
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <input
            value={slideValue}
            onChange={handleSliderDrag}
            onMouseUp={handleSliderDragEnd}
            onTouchEnd={handleSliderDragEnd}
            id="slider"
            className="h-0 appearance-none -ml-5 lg:-ml-[27px] outline-none bg-transparent"
            type="range"
            min={0}
            max={100}
            step={0.001}
          />
        </div>
      </main>
    </motion.div>
  );
}

export default Home;
