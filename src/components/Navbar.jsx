import React from "react";
import { navMenu } from "../assets/asstes";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import resume from "../assets/MyResume.pdf";

const Navbar = () => {
  return (
    <div className="fixed w-full py-4 z-50 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-zinc-800 ">
            <span>THE-</span>
            <span className="text-teal-800 font-orbitron">DIPAN</span>
          </div>

          {/* Menu */}
          <div className="hidden border border-gray-200 rounded-full px-10 py-4 md:flex space-x-8">
           {navMenu.map((item, index) => (
  <a
    key={index}
    href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
  >
    {item}
  </a>
))}
          </div>

          {/* button */}
          <div>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-4 border border-zinc-800 rounded-full flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-800 hover:translate-y-1 transition duration-300">
                Resume
                <FaArrowRight className="text-gray-500 text-sm" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
