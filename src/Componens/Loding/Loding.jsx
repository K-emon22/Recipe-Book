import React from "react";

const Loding = () => {
  return (
    <div className="flex items-center justify-center min-h-screen inset-0  ">
      <div className="flex items-center justify-center w-20 h-20">
        <div className=" w-full h-full rounded-full border-[10px] border-dotted border-blue-500 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loding;
