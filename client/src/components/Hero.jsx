import React from "react";
import AstronautCanvas from "../canvas/Astronaut";
import StarsCanvas from "../canvas/Stars";
import { headContainerAnimation, headContentAnimation, headTextAnimation } from "../helpers/motion";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../states";
const Hero = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence> 

    <div className="flex w-full h-screen flex-col md:flex-row relative py-24 items-center justify-center md:ml-14">
      <motion.div
        {...headContainerAnimation}
        className="flex flex-col gap-6 flex-wrap"
      >
        <img src="./logo.svg" alt="" className="h-20 w-20" />
        <motion.h1 {...headTextAnimation} className="header-text">
          UI <br /> Generator
        </motion.h1>
        <p className="subheader-text max-w-xs md:max-w-md">
          Running low on design inspiration? Use our <strong>AI Based </strong>{" "}
          platform to explore a universe of inspiration and content.
        </p>
        <button
          className="w-fit bg-[#B0A8A8] px-5 py-3 rounded-xl hover:bg-white"
          onClick={() => {
            state.currPage = "themegen";
          }}
        >
          {" "}
          Start Exploring{" "}
        </button>
      </motion.div>
      <StarsCanvas />
      <AstronautCanvas />
    </div>
    </AnimatePresence>
  );
};
export default Hero;
