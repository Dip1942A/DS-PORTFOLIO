import React,{useEffect, useState,useRef} from "react";
import { FaArrowRight } from "react-icons/fa";
import { assets } from "../assets/asstes";

const Hero = () => {



  const words = [
    'MERN STACK',
    'DIPAN SAHU'
  ];

  const [text, setText] = useState("");

  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isWaiting = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isWaiting.current) return;

      const currentWord = words[wordIndex.current];

      if (charIndex.current < currentWord.length) {
        setText(currentWord.slice(0, charIndex.current + 1));
        charIndex.current++;
      } else {
        isWaiting.current = true;

        setTimeout(() => {
          charIndex.current = 0;
          wordIndex.current =
            (wordIndex.current + 1) % words.length;

          setText("");
          isWaiting.current = false;
        }, 2000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

 

  return (
    <div id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold  mb-10">
              <span className="text-zinc-700 ">FullStack Developer</span>
              <br />
              <span className="inline-block text-5xl w-96 text-cyan-700">
  {text}
</span>
            </h1>
            <p className="text-xl text-zinc-900 mb-6">
              I craft immersive web experiences at the intersection of design
              and technology.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button
                className="flex gap-2 items-center px-10 py-4 bg-black rounded-full
            text-slate-200 hover:text-white cursor-pointer"
              >
                View My Work
                <FaArrowRight />
              </button>
              <button
                className="flex gap-2 items-center border px-10 py-4 border-slate-400 rounded-full 
             hover:border-slate-800 transition duration-300"
              >
                Contact Me
                <FaArrowRight />
              </button>
            </div>
          </div>
          {/* image section rightSide */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 floating">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow">
                <img
                  className="w-full h-full object-cover"
                  src="Photo.png"
                  alt="Profile"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl border border-slate-600/20 overflow-hidden p-3">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center"> 
                    <div className="text-3xl font-bold text-white">
                      1+
                    </div>
                    <div className="text-sm text-white">
                      Years Exp
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
