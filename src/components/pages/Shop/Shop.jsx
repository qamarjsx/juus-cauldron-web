import React from "react";
import Header from "../../utils/Header.jsx";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import "./Shop.css";

function Shop() {
  function handleChange() {
    console.log("changed");
  }
  return (
    <div className="relative h-screen">
      <img
            className="absolute bottom-0 z-10 w-11/12 h-1/5 translate-x-[9%]"
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Typography%20Delve%20in%20future.png"
            alt=""
          />
      <Allotment>
        <Allotment.Pane>
          <div
            style={{
              backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Background%20Greenapple.png"})`,
            }}
            className="h-screen bg-cover bg-center flex items-center justify-center"
          >
            <img
              className={`translate-x-1/2 h-1/3`}
              src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
              alt="Juus bottle"
            />
          </div>
        </Allotment.Pane>
        <Allotment.Pane>
          <div
            style={{
              backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Nova%20background.png"})`,
            }}
            className="h-screen bg-cover bg-center flex items-center justify-center"
          >
            <img
              className={`-translate-x-1/2 h-1/3`}
              src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
              alt="Nova bottle"
            />
          </div>
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}

export default Shop;
