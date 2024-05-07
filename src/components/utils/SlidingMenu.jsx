import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function SlidingMenu({theme}) {
  return (
    <AnimatePresence mode="wait">
    <motion.div className="absolute top-0 left-0 z-[35] w-full"
        initial={{x: -300}}
        animate={{x: 0}}
        exit={{x: 300, transition: {duration: 0.8, ease:[0.22, 1, 0.36, 1]}}}
        transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
    >
      <div className={`${theme? "bg-nova" : "bg-black"} h-screen w-full overflow-hidden flex flex-col justify-around pl-10`}>
        <div>
          <Link to={"/"}>
            <h1 className="my-7 text-snow text-xl cursor-pointer w-28">Home</h1>
          </Link>
          <Link to={"/juus"}>
            <h1 className="my-7 text-snow text-xl cursor-pointer w-28">Juus</h1>
          </Link>
          <Link to={"/nova"}>
            <h1 className="my-7 text-snow text-xl cursor-pointer w-28">Nova</h1>
          </Link>
          <Link to={"/about"}>
            {" "}
            <h1 className="my-7 text-snow text-xl cursor-pointer w-28">
              About Us
            </h1>
          </Link>
          <Link to={"/shop"}>
            {" "}
            <h1 className="my-7 text-snow text-xl cursor-pointer w-28">Shop</h1>
          </Link>
          <Link to={"/faqs"}>
            {" "}
            <h1 className="my-7 text-snow text-xl cursor-pointer w-28">FAQs</h1>
          </Link>
          <Link to={"/contact"}>
            {" "}
            <h1 className="my-7 text-snow text-xl cursor-pointer w-28">
              Contact Us
            </h1>
          </Link>
        </div>
        <div className="flex">
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
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
}

export default SlidingMenu;
