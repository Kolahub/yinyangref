import React from "react";

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-400">
      <div className="px-8 lg:container lg:px-2 mx-auto flex justify-between items-center h-[140px]">
        <div className="">
          <h1 className="font-inter text-5xl font-bold">logo</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2.75 w-2.75 rounded-full bg-[#BC2637]"></div>
          <p className="font-inter text-2xl font-bold text-[#BC2637]">menu</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
