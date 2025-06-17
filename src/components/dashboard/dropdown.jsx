import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DropDown() {
  const [openMenu, setOpenMenu] = useState(false);
  //   const navigate = useNavigate();

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="relative w-[500px]">
        {/* Goo effect container */}
        <div
          className="absolute inset-0 filter blur-xl opacity-70 mix-blend-lighten pointer-events-none"
          style={{ zIndex: -1 }}
        ></div>

        {/* Main button */}
        <div
          className="w-full h-[100px] bg-white shadow-2xl backdrop-blur-md bg-opacity-80 px-4 py-3 rounded-2xl text-center text-2xl font-bold text-[#301A4B] cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-[#f0f0f0] flex items-center justify-center"
          onClick={() => setOpenMenu(!openMenu)}
        >
          Tools
        </div>

        {/* Dropdown options */}
        <div
          className={`flex flex-col gap-4 mt-4 transition-all duration-500 ease-in-out ${
            openMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          } w-full`}
        >
          {/* Jira */}
          <div
            onClick={() => {
              navigate("/dashboard");
              setOpenMenu(false);
            }}
            className="w-full h-[60px] bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center px-5 py-4 rounded-2xl shadow-lg cursor-pointer backdrop-blur-md bg-opacity-80 transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#301A4B] flex items-center justify-center text-lg"
          >
            Jira
          </div>

          {/* Medeni */}
          <div
            onClick={() => {
              navigate("/settings");
              setOpenMenu(false);
            }}
            className="w-full h-[60px] bg-gradient-to-r from-pink-600 to-yellow-600 text-white text-center px-5 py-4 rounded-2xl shadow-lg cursor-pointer backdrop-blur-md bg-opacity-80 transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#301A4B] flex items-center justify-center text-lg"
          >
            Medini Analyser (Ansys)
          </div>

          {/* SVN */}
          <div
            onClick={() => {
              navigate("/");
              setOpenMenu(false);
            }}
            className="w-full h-[60px] bg-gradient-to-r from-blue-600 to-teal-500 text-white text-center px-5 py-4 rounded-2xl shadow-lg cursor-pointer backdrop-blur-md bg-opacity-80 transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#301A4B] flex items-center justify-center text-lg"
          >
            SVN
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
