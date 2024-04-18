import React, { useState, useEffect } from "react";
import Slide from "../../utils/Slide.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Home.css";

function Home() {
  const [currentComponent, setCurrentComponent] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentComponent((prevComponent) => (prevComponent % 2) + 1);
    }, 8000);
    return () => clearInterval(intervalId);
  });
  return (
    <TransitionGroup>
      <CSSTransition key={currentComponent} classNames="slide" timeout={1000}>
          {currentComponent === 1 ? (
            <Slide
              name="Juus"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fuga
            similique laboriosam eos veritatis id!"
              mediaLink="https://juusstorage.blob.core.windows.net/website/videos/home/turntable-mobile.mp4"
              shopRoute="shop/juus-products"
            />
          ) : (
            <Slide
              name="Nova"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fuga
            similique laboriosam eos veritatis id!"
              mediaLink="https://juusstorage.blob.core.windows.net/website/videos/home/homepage-explosion.mp4"
              shopRoute="shop/nova-products"
            />
          )}
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Home;
