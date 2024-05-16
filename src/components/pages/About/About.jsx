import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../../utils/Footer.jsx";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import Header from "../../utils/Header.jsx";
import Certification from "../../utils/Certification.jsx";

function About() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      className="relative overflow-x-hidden scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="">
        <Header />
      </div>
      <main className="pt-24">
        <div>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onClick={togglePlay}
            className="select-none w-full aspect-video xl:h-full 3xl:h-screen 4xl:aspect-auto"
          >
            <source
              src={
                "https://cdn.shopify.com/videos/c/o/v/595e5bba7f0147bc8d1825c6307fb31e.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <article className="px-4 font-light text-[#6e6e6e]">
            <p className="my-4">
              Our journey started in the research facilities of New Zealand. Our
              journey was a never-ending storm of difficulties.
            </p>
            <p className="my-4">
              But in these difficult times, we were clear about the vision to
              bring the highest quality to our consumers.
            </p>
            <p className="my-4">
              We involved the best scientists from around the world, with the
              sole purpose of creating the best flavours, in accordance with
              Pakistan's audience.
            </p>
            <p className="my-4">
              Finally we came home with the best there can be offered, flavours
              custom made for you.
            </p>
          </article>
        </div>
        <div>
          <img
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Future%20is%20Sugar%20(typography).png"
            alt=""
          />
          <article className="px-4 font-light text-about">
            <h1 className="my-4 font-bold text-lg">INTERNATIONAL STANDARDS</h1>
            <p className="my-4">
              Juus is Pakistans's first pocket-sized liquid enhancer, developed
              with international standards.
            </p>
            <h1 className="my-4 font-bold text-lg">MADE WITH YOU IN MIND</h1>
            <p className="my-4">
              Juus creates one of a kind, new experience for its consumers. Our
              Zero Sugar & Zero Calories principle sets you free of all worries.
            </p>
            <h1 className="my-4 font-bold text-lg">AFFORDABLE HIGH QUALITY</h1>
            <p className="my-4">
              Our goal is to make people move on to something better and keep
              the excitement coming, while keeping the costs low and
              budget-friendly.
            </p>
          </article>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-about">CERTIFICATION</h1>
          <Certification certificateLink="https://cdn.shopify.com/s/files/1/0819/8619/1659/files/WhatsApp_Image_2023-11-20_at_2.47.00_PM_500x.jpg?v=1700739758" certificationType="PFA CERTIFICATION" />
          <Certification certificateLink="https://cdn.shopify.com/s/files/1/0819/8619/1659/files/WhatsApp_Image_2023-11-20_at_2.47.00_PM_500x.jpg?v=1700739758" certificationType="MANIFESTO" />
          <Certification certificateLink="https://cdn.shopify.com/s/files/1/0819/8619/1659/files/WhatsApp_Image_2023-11-20_at_2.47.00_PM_500x.jpg?v=1700739758" certificationType="HALAL CERTIFICATION" />

        </div>
      </main>
    </motion.div>
  );
}

export default About;
