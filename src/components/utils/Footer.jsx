import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black h-72">
      <div className="text-snow border-b border-zinc-900 w-full h-4/5 flex flex-col justify-evenly">
        <p className="text-center text-sm">Subscribe to our emails</p>
        <div className="relative flex items-center justify-center">
          <label className="absolute left-12 xs:left-14 sm:left-16 md:left-20 lg:left-52 xl:left-72 2xl:left-80 3xl:left-[440px] 4xl:left-[550px] 5xl:left-[590px]" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none appearance-none border bg-black border-snow h-11 px-3 w-4/5 lg:w-1/2 xl:w-2/5 3xl:w-1/3 4xl:w-1/4"
            id="email"
            type="email"
            name="email"
          />
          <svg
            className="inline-block absolute right-12 xs:right-14 sm:right-16 md:right-20 lg:right-52 xl:right-72 2xl:right-80 3xl:right-[440px] 4xl:right-[550px] 5xl:right-[590px]"
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
              strokeWidth={1}
              d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
            ></path>
          </svg>
        </div>
        <div className="flex items-center justify-center h-5">
          <Link to={"https://www.facebook.com/profile.php?id=61550934897741"}>
            <img
              className="h-5"
              src="https://juusstorage.blob.core.windows.net/website/images/general/facebook-white.png"
              alt="facebook logo"
            />
          </Link>
          <Link to={"https://www.instagram.com/official.juus"}>
            <img
              className="h-5 mx-10"
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
      <div className="flex justify-center items-center h-1/5">
        <p className="text-xs text-snow">
          © 2024, <Link to={"/"}>Juus.pk </Link>Powered by <small> </small>
          <Link target="_blank" to={"https://vitejs.dev/"}>
            Vite/React
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
