import React, { useState, useEffect, lazy } from "react";
import { Link } from "react-router-dom";
const SlidingMenu = lazy(() => import("./SlidingMenu.jsx"));
const NavLinks = lazy(() => import("./NavLinks.jsx"));

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed z-40 w-full h-24 flex justify-between 6xl:justify-evenly items-center p-4 lg:px-12 3xl:px-24 4xl:px-32 5xl:px-36 border-b border-zinc-900 bg-black">
        {isOpen ? (
          <svg
            onClick={handleHamburgerClick}
            className="transform scale-y-[-1] lg:hidden cursor-pointer"
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
            className="transform scale-y-[-1] lg:hidden cursor-pointer"
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
        <div className="lg:flex lg:w-5/6">
          <Link to={"/"}>
            <img
              className="h-16 cursor-pointer select-none lg:mr-0.5 xl:mr-9"
              src="https://juusstorage.blob.core.windows.net/creatives/Homepage JC/Juus cauldron logo white.png"
              alt=""
            />
          </Link>
          {!isMobile && <NavLinks />}
        </div>
        <div className="flex">
          <svg
            className="mr-1.5 hover:scale-105 cursor-pointer"
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
            className="ml-1.5 hover:scale-105 cursor-pointer"
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
      <SlidingMenu isOpen={isOpen} />
    </>
  );
}

export default Header;
