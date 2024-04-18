import React, { useState } from "react";
import { Link } from "react-router-dom";

function Slide({ name, text, mediaLink, shopRoute }) {
  const [arrowColor, setArrowColor] = useState("white");

  return (
    <section
      className="p-9 w-full overflow-y-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(102, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 39%)",
      }}
    >
      <div>
        <h1 className="text-4xl my-5 text-snow font-semibold">{name}</h1>
        <p className="text-snow my-5">{text}</p>
      </div>
      <div className="relative">
        <video className="object-cover h-64 w-72" autoPlay loop muted>
          <source src={mediaLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Link to={shopRoute}>
        <button
          onMouseEnter={() => setArrowColor("black")}
          onMouseLeave={() => setArrowColor("white")}
          className="cursor-pointer my-5 flex items-center italic justify-between p-3 w-36 h-11 text-snow text-sm border rounded-full hover:bg-snow hover:text-rich-black hover:shadow-btn-shadow hover:shadow-snow transition"
        >
          Discover more
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
    </section>
  );
}

export default Slide;
