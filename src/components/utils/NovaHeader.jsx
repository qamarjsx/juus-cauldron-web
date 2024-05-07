import React, {useState} from "react";
import { Link } from "react-router-dom";
import SlidingMenu from "./SlidingMenu";

function NovaHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
    <header
      style={{
        backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Top%20header%20design.png"})`,
      }}
      className="fixed bg-nova z-40 w-full h-24 flex justify-between items-center p-6 border-b bg-center bg-cover"
    >
      {isOpen ? (
          <svg
            onClick={handleHamburgerClick}
            className="transform scale-y-[-1]"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="2em"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586z"
            ></path>
          </svg>
        ) : (
          <svg
            onClick={handleHamburgerClick}
            className="transform scale-y-[-1]"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h8m-8 7h13M3 19h18"
            ></path>
          </svg>
        )}
      <Link to={"/"}>
        <img
          className="h-10 cursor-pointer select-none"
          src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Nova%20logo.png"
          alt=""
        />
      </Link>
      <div className="flex">
        <svg
          className="mr-1.5"
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"
          ></path>
        </svg>
        <svg
          className="ml-1.5"
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          >
            <path
              fill="none"
              d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
            ></path>
            <path d="M5 4h17l-2 11H7zm0 0c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5"></path>
          </g>
        </svg>
      </div>
    </header>
    {isOpen && <SlidingMenu theme={"#FED381"}/>}
    </>
  );
}

export default NovaHeader;
