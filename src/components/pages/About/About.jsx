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
            className="select-none w-full aspect-video xl:h-full 3xl:aspect-auto"
          >
            <source
              src={
                "https://cdn.shopify.com/videos/c/o/v/595e5bba7f0147bc8d1825c6307fb31e.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <article className="px-4 lg:px-10 3xl:px-28 lg:text-center font-light lg:font-normal lg:text-xl 3xl:text-3xl text-about">
            <p className="my-4 3xl:my-9 4xl:my-16">
              Our journey started in the research facilities of New Zealand. Our
              journey was a never-ending storm of difficulties.
            </p>
            <p className="my-4 3xl:my-9 4xl:my-16">
              But in these difficult times, we were clear about the vision to
              bring the highest quality to our consumers.
            </p>
            <p className="my-4 3xl:my-9 4xl:my-16">
              We involved the best scientists from around the world, with the
              sole purpose of creating the best flavours, in accordance with
              Pakistan's audience.
            </p>
            <p className="my-4 3xl:my-9 4xl:my-16">
              Finally we came home with the best there can be offered, flavours
              custom made for you.
            </p>
          </article>
        </div>
        <div className="6xl:flex 6xl:flex-col">
          <img className="my-5 lg:my-28 3xl:my-20 3xl:w-full 3xl:aspect-video 3xl:h-[75vh] 6xl:w-5/6 6xl:h-[55vh] 6xl:self-center" src="https://juusstorage.blob.core.windows.net/website/images/about/about-main.png" alt="" />
          <img
          className="xl:scale-[.8] 3xl:scale-[.6] 6xl:scale-50 xl:-ml-20 3xl:-ml-52 5xl:-ml-60 6xl:-ml-[412px]"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Future%20is%20Sugar%20(typography).png"
            alt=""
          />
          <article className="mb-4 lg:mb-20 3xl:mb-32 3xl:-mt-16 6xl:-mt-32 px-4 lg:px-10 3xl:px-24 font-light lg:font-normal lg:text-xl 3xl:text-3xl text-about">
            <h1 className="my-4 lg:mt-8 3xl:mt-20 font-bold lg:font-extrabold text-lg lg:text-2xl 3xl:text-4xl">INTERNATIONAL STANDARDS</h1>
            <p className="">
              Juus is Pakistans's first pocket-sized liquid enhancer, developed
              with international standards.
            </p>
            <h1 className="my-4 lg:mt-8 3xl:mt-20 font-bold lg:font-extrabold text-lg lg:text-2xl 3xl:text-4xl">MADE WITH YOU IN MIND</h1>
            <p className="">
              Juus creates one of a kind, new experience for its consumers. Our
              Zero Sugar & Zero Calories principle sets you free of all worries.
            </p>
            <h1 className="my-4 lg:mt-8 3xl:mt-20 font-bold lg:font-extrabold text-lg lg:text-2xl 3xl:text-4xl">AFFORDABLE HIGH QUALITY</h1>
            <p className="">
              Our goal is to make people move on to something better and keep
              the excitement coming, while keeping the costs low and
              budget-friendly.
            </p>
          </article>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-5xl 3xl:text-7xl font-bold text-about lg:mb-10">CERTIFICATION</h1>
        <div className="xl:flex xl:justify-center 3xl:px-20">
          <Certification certificateLink="https://cdn.shopify.com/s/files/1/0819/8619/1659/files/WhatsApp_Image_2023-11-20_at_2.47.00_PM_500x.jpg?v=1700739758" certificationType="PFA CERTIFICATION" />
          <Certification certificateLink="https://cdn.shopify.com/s/files/1/0819/8619/1659/files/WhatsApp_Image_2023-11-20_at_2.47.00_PM_500x.jpg?v=1700739758" certificationType="MANIFESTO" />
          <Certification certificateLink="https://cdn.shopify.com/s/files/1/0819/8619/1659/files/WhatsApp_Image_2023-11-20_at_2.47.00_PM_500x.jpg?v=1700739758" certificationType="HALAL CERTIFICATION" />
        </div>
        </div>
      </main>
    </motion.div>
  );
}

export default About;
