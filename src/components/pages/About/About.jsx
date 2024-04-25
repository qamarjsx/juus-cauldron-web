import React from "react";

function About() {
  return (
    <div className="relative">
    <div
      style={{ backgroundImage: `url(${'https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Background%20Greenapple.png'})` }}
      className="h-screen bg-cover bg-center bg-no-repeat"
    >
    </div>
    <div
      style={{ backgroundImage: `url(${'https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Nova%20background.png'})` }}
      className="h-screen bg-cover bg-center bg-no-repeat"
    >
    </div>
    </div>
  );
}

export default About;
