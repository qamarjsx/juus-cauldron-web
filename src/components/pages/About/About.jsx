import React, {useState} from "react";
import JuusHeader from "../../utils/JuusHeader.jsx";
import { Link } from "react-router-dom";
import Footer from "../../utils/Footer.jsx";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";


function About() {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    console.log(isPlaying);
  };

  return (
    <motion.div className="relative overflow-x-hidden scroll-smooth"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}} >
      <div className="">
        <JuusHeader />
      </div>
      <main className="pt-24">
      <div>
          <video autoPlay loop muted playsInline onClick={togglePlay} className="select-none w-full aspect-video xl:h-full 3xl:h-screen 4xl:aspect-auto">
            <source
              src={
                "https://cdn.shopify.com/videos/c/o/v/595e5bba7f0147bc8d1825c6307fb31e.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <article className="px-4 font-extralight">
          <p className="my-4">Our journey started in the research facilities of New Zealand. Our journey was a never-ending storm of difficulties.</p>
          <p className="my-4">But in these difficult times, we were clear about the vision to bring the highest quality to our consumers.</p>
          <p className="my-4">We involved the best scientists from around the world, with the sole purpose of creating the best flavours, in accordance with Pakistan's audience.</p>
          <p className="my-4">Finally we came home with the best there can be offered, flavours custom made for you.</p>
          </article>
      </div>
      <div>
        <img src="https://juusstorage.blob.core.windows.net/website/images/about/about-main.png" alt="" />
        <img className="bg-black" src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png" alt="" />    
      </div>
      </main>
    </motion.div>
  );
}

export default About;
