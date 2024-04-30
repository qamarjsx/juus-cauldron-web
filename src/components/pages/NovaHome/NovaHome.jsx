import React, {useState} from "react";
import NovaHeader from "../../utils/NovaHeader";
import { Link } from "react-router-dom";

function NovaHome() {
    const [arrowColor, setArrowColor] = useState("white");

  return (
    <div className="relative overflow-hidden">
      <NovaHeader />
      <div
        className="flex flex-col pt-24 relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Background.png"})`,
        }}
      >
        <img
          className="h-1/3 lg:w-full lg:object-fill 3xl:h-2/5"
          src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/nova main banner.jpg"
          alt=""
        />
        <img
        className="mt-4 lg:h-[11.5%] 4xl:h-[14%] xl:w-2/3 4xl:w-3/4"
          src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/Future is Sugar (typography).png"
          alt=""
        />
        <img
        className="lg:h-[11.5%] 4xl:h-[14%] xl:w-2/3 4xl:w-3/4"
          src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Free%20Paragraph%20(typography).png"
          alt=""
        />
        <img
          className="mt-5 xl:mt-2 3xl:mt-0 lg:h-[23%] xl:h-[27%] self-center"
          src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Tags.png"
          alt=""
        />
        <Link className="mt-28 lg:mt-16 xl:mt-4 3xl:mt-2 4xl:mt-0 flex justify-center items-center" to={"/shop"}>
              <button
                onMouseEnter={() => setArrowColor("black")}
                onMouseLeave={() => setArrowColor("white")}
                className="cursor-pointer flex items-center font-bold justify-between p-2 w-48 lg:w-52 xl:w-48 h-9 lg:h-11 xl:h-9 text-snow text-sm lg border-2 rounded-xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition"
              >
                DISCOVER FLAVORS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke={arrowColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
                  ></path>
                </svg>
              </button>
            </Link>
      </div>
      <img
        className="pointer-events-none absolute bottom-0 xxxs:-bottom-14 xxs:-bottom-28 lg:-bottom-80 xl:-bottom-[100%] 3xl:-bottom-[90%] 4xl:-bottom-[80%] scale-125 xxs:scale-110 lg:scale-100 3xl:scale-x-125 opacity-70"
        src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Doodle%20art.png"
        alt=""
      />
    </div>
  );
}

export default NovaHome;
