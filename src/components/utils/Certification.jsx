import React from "react";

function Certification({certificateLink, certificationType}) {
  return (
    <div className="flex flex-col items-center m-5 3xl:px-10">
      <img
        src={certificateLink}
        alt=""
      />
      <button className="select-none border-about cursor-pointer flex items-center justify-between p-2 w-44 lg:w-56 xl:w-72 h-9 lg:h-11 text-sm text-about lg border-2 rounded-3xl my-5 lg:my-10">
        <span className="mx-auto">{certificationType}</span>
      </button>
    </div>
  );
}

export default Certification;
