import React, {useState} from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [arrowColor, setArrowColor] = useState("white");

  return (
    <div
      style={{
        backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Nova%20background.png"})`,
      }}
      className="overflow-hidden absolute inset-0 h-screen bg-cover bg-center"
    >
      <div className="absolute inset-0 grid place-items-center">
        <img
          className="absolute top-24 w-11/12"
          src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png"
          alt=""
        />
      </div>

      <div className="absolute inset-0 grid place-items-center">
        <img
          className="absolute w-full h-1/2 top-[20%]"
          src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
          alt=""
        />
      </div>

      <div className="absolute inset-0 grid place-items-center">
        <img
          className="absolute w-11/12 bottom-20"
          src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png"
          alt=""
        />
      </div>

      <div className="absolute inset-0">
        <Link className="absolute bottom-0 right-0 mx-4" to={"/shop"}>
          <button
            onMouseEnter={() => setArrowColor("black")}
            onMouseLeave={() => setArrowColor("white")}
            className="cursor-pointer my-12 flex items-center italic justify-between p-3 w-36 h-11 text-snow text-sm border rounded-full hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition"
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
      </div>
    </div>
  );
}

export default Contact;
