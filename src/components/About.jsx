import React from "react";
import { assets, profileData } from "../assets/asstes";
import { FaCode } from "react-icons/fa6";

const About = () => {
  return (
    <div id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-1 ">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
              <span className="text-teal-800">About</span>
              <span>Me</span>
            </h2>
            <p className="text-md mb-2 leading-8">
              I'm a frontend developer with a passion for creating immersive
              digital experiences. With over 5 years in the industry, I've
              worked with startups and Fortune 500 companies to bring their
              visions to life.
            </p>
            <p className="text-md mb-2 leading-8">
              My approach combines technical expertise with creative design
              thinking to build applications that are not only functional but
              also visually stunning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
              {profileData.map((data, index) => (
                <div
                  key={index}
                  className="w-full h-55 sm:w-50 p-6 border border-zinc-400 rounded hover:border-zinc-600 cursor-pointer hover:border-b-4 hover:border-r-4 hover:border-b-zinc-800 hover:border-r-zinc-800 transition duration-300 hover:-translate-y-1"
                >
                  <FaCode className="text-3xl mb-4" />
                  <h1 className="text-xl font-bold mb-4">{data.title}</h1>
                  <p>{data.technologies.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center ">
            <div className="relative w-full max-w-md">
              <div className="rounded overflow-hidden">
                <img className="w-full h-full object-cover" src="myphoto.png "alt="ProfileImg" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
