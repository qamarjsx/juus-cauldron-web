import React, { useState, useEffect, useRef } from "react";
import Header from "../../utils/Header.jsx";
import FullJuusSlide from "../../utils/FullJuusSlide.jsx";
import FullNovaSlide from "../../utils/FullNovaSlide.jsx";
import SplitJuusSlide from "../../utils/SplitJuusSlide.jsx";
import SplitNovaSlide from "../../utils/SplitNovaSlide.jsx";
import "./Home.css";
import "../../../index.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const [slideValue, setSlideValue] = useState(50);
  const [showFullJuusSlide, setShowFullJuusSlide] = useState(false);
  const [showFullNovaSlide, setShowFullNovaSlide] = useState(false);
  const navigator = useNavigate();


  const handleSliderDrag = (e) => {
    console.log(slideValue);
    if (slideValue >= 80) {
      setShowFullJuusSlide(true);
      setShowFullNovaSlide(false);
      // setInterval(() => {
      //   navigator("/juus");
      // }, 1500);
    } else if (slideValue <= 20) {
      setShowFullJuusSlide(false);
      setShowFullNovaSlide(true);
      // setInterval(() => {
      //   navigator("/nova");
      // }, 1500);
    } else if (slideValue > 20 || slideValue < 80) {
      setShowFullJuusSlide(false);
      setShowFullNovaSlide(false);
    }
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
        <Header />
      </div>
      <main className="h-screen w-full relative overflow-hidden">
        <div className="w-full h-full absolute">
          {showFullNovaSlide ? <FullNovaSlide /> : <SplitNovaSlide />}
        </div>
        <div className="w-full h-full absolute" style={clipPathStyle}>
          {showFullJuusSlide ? <FullJuusSlide /> : <SplitJuusSlide />}
        </div>
        <div className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <input
            value={slideValue}
            onChange={handleSliderDrag}
            id="slider"
            className="h-0 appearance-none -ml-5 lg:-ml-8 outline-none bg-transparent"
            type="range"
            min={0}
            max={100}
            step={0.01}
          />
        </div>
      </main>
    </motion.div>
  );
}

export default Home;
