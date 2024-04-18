import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black h-64">
      <div className="text-snow border-b border-zinc-900 w-full h-4/5 flex flex-col justify-evenly">
        <p className="text-center text-sm">Subscribe to our emails</p>
        <div className="relative flex items-center justify-center">
          <label className="absolute left-11" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none appearance-none border bg-black border-snow h-11 w-4/5 px-3"
            id="email"
            type="email"
            name="email"
          />
          <svg
            className="inline-block absolute right-11"
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
        <div className="flex items-center justify-evenly h-5">
          <Link to={"https://www.facebook.com/profile.php?id=61550934897741"}>
            <img
              className="h-5"
              src="https://juusstorage.blob.core.windows.net/website/images/general/facebook-white.png"
              alt="facebook logo"
            />
          </Link>
          <Link to={"https://www.instagram.com/official.juus"}>
            <img
              className="h-5"
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
