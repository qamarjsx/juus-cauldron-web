import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

function SlidingMenu({theme, isOpen}) {
  return (
    <AnimatePresence>
    <motion.div className="absolute top-0 left-0 z-[35] w-full"
        animate={{
          x: isOpen ? 0 : "-100%",
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
        initial={{
          x: "-100%"
        }}
        
        >
      <div className={`${theme? "bg-nova" : "bg-black"} h-screen w-full overflow-hidden flex flex-col justify-around pl-10`}>
        <div className="w-24 mt-7">
          <NavLinks />
        </div>
        <div className="flex">
          <Fade direction="down" cascade damping={0.3}>
          <Link to={"https://www.facebook.com/profile.php?id=61550934897741"}>
            <img
              className="h-5"
              src="https://juusstorage.blob.core.windows.net/website/images/general/facebook-white.png"
              alt="facebook logo"
            />
          </Link>
          <Link to={"https://www.instagram.com/official.juus"}>
            <img
              className="mx-10 h-5"
              src="https://juusstorage.blob.core.windows.net/website/images/general/insta-white.png"
              alt="instagram logo"
            />
          </Link>
          <Link to={"https://www.youtube.com/@JuusPakistan"}>
            <img
              className="h-5"
              src="https://juusstorage.blob.core.windows.net/website/images/general/linkedin-white.png"
              alt="linkedin logo"
            />
          </Link>
          </Fade>
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
}

export default SlidingMenu;
