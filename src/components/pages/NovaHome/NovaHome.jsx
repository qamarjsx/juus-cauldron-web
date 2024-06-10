import React, { lazy, memo, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
const Footer = lazy(() => import("../../utils/Footer"));
const NovaHeader = lazy(() => import("../../utils/NovaHeader"));

const NovaHome = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative overflow-x-hidden bg-nova-primary scroll-smooth lg:h-auto overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <NovaHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <main className="my-20 relative flex flex-col w-full">
        <div className="">
          <img
            className="6xl:w-full"
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
            className="mt-3 xl:mt-0 6xl:-mt-16 lg:-ml-20 xl:-ml-40 3xl:-ml-[282px] 4xl:-ml-80 6xl:-ml-[500px] lg:scale-75 xl:scale-[.65] 3xl:scale-[.55] 6xl:scale-[.45]"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/Future is Sugar (typography).png"
            alt=""
          />
          <img
            className="-ml-1.5 xxs:-ml-2 lg:-ml-10 xl:-ml-28 3xl:-ml-60 4xl:-ml-[272px] 6xl:-ml-[432px] -mt-0.5 lg:-mt-9 xl:-mt-16 3xl:-mt-28 4xl:-mt-32 5xl:-mt-36 6xl:-mt-52 xxs:-mt-1 lg:scale-90 xl:scale-[.8] 3xl:scale-[.65] 6xl:scale-[.55]"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Free%20Paragraph%20(typography).png"
            alt=""
          />
        </Fade>
        {/* <Fade direction="up" delay={1000} triggerOnce={true}> */}
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 70, damping: 8 }}
          viewport={{ once: true }}
        >
          <img
            className="mt-10 3xl:mt-0 6xl:-mt-10 xl:scale-[.85] 3xl:scale-75 6xl:scale-[.65]"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Tags.png"
            alt=""
          />
        </motion.div>
        {/* </Fade> */}
        <Link className="self-center mt-36 lg:mt-60" to={"https://juus.pk/pages/shop"}>
          <Fade direction="down" duration={1000} delay={500}>
            <button className="select-none cursor-pointer flex items-center justify-between p-2 w-40 lg:w-56 xl:w-72 h-7 lg:h-11 text-snow text-sm lg border-2 rounded-xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition">
              <span className="mx-auto">DISCOVER FLAVORS</span>
            </button>
          </Fade>
        </Link>
        <div
          className={`${
            isOpen ? "hidden" : "absolute"
          } pointer-events-none -bottom-5 xxxxs:-bottom-10 xxs:-bottom-16 lg:-bottom-40 xl:-bottom-56 3xl:-bottom-72 4xl:-bottom-64 6xl:-bottom-72 3xl:right-0 6xl:right-40`}
        >
          <img
            className={`opacity-75 xl:scale-y-[.8] 3xl:scale-x-95 6xl:scale-x-125 6xl:scale-y-[1.05]`}
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

export default NovaHome;
