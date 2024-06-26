import React from "react";
import NovaHeader from "../../utils/NovaHeader";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function NovaHome() {

  return (
    <div className="relative overflow-x-hidden bg-nova scroll-smooth lg:h-auto">
      <div className="">
        <NovaHeader />
      </div>
      <main className="pt-24 pb-10 h-screen flex flex-col items-center">
        <img
          className="h-1/3 lg:h-[108.5%] 5xl:h-[105.5%] 6xl:h-[105%] xl:object-cover w-full object-fill pointer-events-none select-none"
          src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/nova main banner.jpg"
          alt=""
        />
        <img
          className="mt-4 xl:mt-2 lg:mt-8 sm:scale-90 lg:scale-[.8] xl:scale-75 3xl:scale-[.65] lg:-ml-32 xl:-ml-56 3xl:-ml-96 4xl:-ml-[480px] 5xl:-ml-[540px] 6xl:-ml-[640px] pointer-events-none select-none"
          src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/Future is Sugar (typography).png"
          alt=""
        />
        <img
          className="scale-105 sm:scale-95 lg:scale-[.85] xl:scale-[.8] 3xl:scale-[.7] lg:-ml-32 xl:-ml-56 3xl:-ml-96 4xl:-ml-[480px] 5xl:-ml-[540px] 6xl:-ml-[640px] lg:-mt-8 xl:-mt-12 3xl:-mt-20 5xl:-mt-28 pointer-events-none select-none"
          src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Free%20Paragraph%20(typography).png"
          alt=""
        />
        <img
          className="mt-6 lg:mt-12 3xl:mt-0 6xl:mt-0 lg:scale-90 3xl:scale-[.8] 5xl:scale-75 xl:mt-12 pointer-events-none select-none"
          src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Tags.png"
          alt=""
        />
        <Link className="mt-24 xxxxs:mt-24 xxs:mt-32 lg:mt-48" to={"/nova/shop"}>
            <Fade direction="down" duration={1000} delay={500}>
              <button
            className="select-none cursor-pointer flex items-center font-bold justify-between p-2 w-40 lg:w-56 xl:w-72 h-9 lg:h-11 text-snow text-sm lg border-2 rounded-xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition"
              >
                <span className="mx-auto" >DISCOVER FLAVORS</span>
              </button></Fade>
            </Link>
      <img
        className="pointer-events-none select-none opacity-65 absolute right-0 4xl:right-32 6xl:right-96 bottom-16 xxxxs:-bottom-24 xxxs:-bottom-44 xxs:-bottom-16 sm:-bottom-96 lg:-bottom-[540px] xl:-bottom-[1080px] 2xl:-bottom-[580px] 3xl:-bottom-[1440px] 4xl:-bottom-[1720px] 6xl:-bottom-[1920px] scale-150 xxxs:scale-125 lg:scale-100 xl:scale-90 3xl:scale-100 4xl:scale-x-110 5xl:scale-x-125 6xl:scale-x-150"
        src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Doodle%20art.png"
        alt=""
      />
      </main>
    </div>
  );
}

export default NovaHome;
