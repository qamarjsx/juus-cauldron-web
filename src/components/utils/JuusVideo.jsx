import React, { useState, useRef, useEffect } from "react";
import Spinner from "./Spinner";

function JuusVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(togglePlay, []);

  const handleVideoLoading = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative">
      <video
        onLoadedData={handleVideoLoading}
        rel="preload"
        preload="auto"
        ref={videoRef}
        onClick={togglePlay}
        loop
        playsInline
        className="select-none w-full aspect-video xl:h-full 3xl:h-screen 4xl:aspect-auto"
      >
        <source
          src={
            isMobile
              ? "https://juusstorage.blob.core.windows.net/website/videos/home/juus-fit-ad-mobile.mp4"
              : "https://juusstorage.blob.core.windows.net/website/videos/home/juus-fit-ad-desktop.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {!isLoaded && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner />
      </div>}
    </div>
  );
}

export default JuusVideo;
