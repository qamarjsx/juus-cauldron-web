import React, { lazy, memo, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import Footer from "../../utils/Footer";
const NovaHeader = lazy(() => import("../../utils/NovaHeader"));

const NovaHomee = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative overflow-x-hidden bg-nova-primary scroll-smooth lg:h-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <NovaHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <main className="my-20 relative flex flex-col">
        <div className="">
          <img
            src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/nova main banner.jpg"
            alt=""
          />
        </div>
        <Fade
          triggerOnce={true}
          className=""
          direction="left"
          cascade
          damping={0.5}
        >
          <img
            className=""
            src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/Future is Sugar (typography).png"
            alt=""
          />
          <img
            className=""
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Free%20Paragraph%20(typography).png"
            alt=""
          />
        </Fade>
        <div>
          <img
            className=""
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Tags.png"
            alt=""
          />
        </div>
        <Link className="self-center mt-20" to={"/nova/shop"}>
          <Fade direction="down" duration={1000} delay={500}>
            <button className="select-none cursor-pointer flex items-center justify-between p-2 w-40 lg:w-56 xl:w-72 h-7 lg:h-11 text-snow text-sm lg border-2 rounded-xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition">
              <span className="mx-auto">DISCOVER FLAVORS</span>
            </button>
          </Fade>
        </Link>
        <div className={`${isOpen ? "hidden" : "absolute"}`}>
          <img
            className={` `}
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Doodle%20art.png"
            alt=""
          />
        </div>
      </main>
      <div>
        <Footer theme="nova" />
      </div>
    </motion.div>
  );
});

export default NovaHomee;
