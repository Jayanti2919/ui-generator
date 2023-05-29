/* eslint-disable react/jsx-key */
import React, { useState, useRef } from "react";
import { useSnapshot } from "valtio";
import state from "../states";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeAnimation,
  headContainerAnimation,
  headTextAnimation,
} from "../helpers/motion";
import { slideAnimation } from "../helpers/motion";
import ColorPicker from "../components/ColorPicker";

const ColorCard = ({ params }) => {
  return (
    <div className="flex">
      {params.map((color) => (
        <div style={{ backgroundColor: `#${color}` }} className="px-6 py-2">
          #{color}
        </div>
      ))}
    </div>
  );
};

const ThemeGen = () => {
  const snap = useSnapshot(state);
  const formref = useRef();

  const [prompt, setPrompt] = useState("");
  const [color, setColor] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // api call to localhost:8080/api/chat
    const reqbody = "Generate a color scheme for a website " + prompt;
    console.log(reqbody);
  };

  return (
    <div
      className={`${
        state.currPage === "themegen" ? "block" : "hidden"
      } h-fit w-full md:px-20 py-10 flex flex-col gap-5`}
    >
      <div className="flex justify-between flex-col-reverse md:flex-row gap-5 ml-4">
        <div className="flex flex-col gap-5">
          <h1 className="second-headings">Theme Generator</h1>
          <p className="normal-text">
            For a great website you need great planning. So, let's start with
            selecting a color for your website! Enter a prompt describing what
            your website is about to get an AI generated color scheme.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="w-fit bg-[#B0A8A8] md:px-5 px-3 md:py-2 py-1 rounded-xl hover:bg-white h-fit"
            onClick={() => {
              state.currPage = "home";
            }}
          >
            {" "}
            Back{" "}
          </button>
          <button
            className="w-fit bg-[#B0A8A8] md:px-5 px-3 md:py-2 py-1 rounded-xl hover:bg-white h-fit"
            onClick={() => {
              state.currPage = "imagegen";
            }}
          >
            {" "}
            Next{" "}
          </button>
        </div>
      </div>

      <div className="flex pt-5 justify-between md:px-10 md:flex-row flex-col px-4 gap-10">
        <form action="" onSubmit={handleFormSubmit} ref={formref}>
          <div className="flex flex-col gap-5">
            <label htmlFor="" className="form-text">
              Generate a color scheme for a website ...{" "}
            </label>
            <textarea
              name="ai-prompt"
              id="ai-prompt"
              cols="40"
              rows="5"
              placeholder="... that sells plants."
              className="py-2 px-5 rounded-lg bg-tertiary placeholder:text-primary text-black"
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
            />
            <button
              type="submit"
              className="w-fit bg-tertiary hover:bg-secondary px-5 py-2 rounded-xl"
            >
              Generate
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-5">
          <h2 className="form-text">Have a color in mind?</h2>
          <ColorPicker />
        </div>
      </div>

      <div>
        <ColorCard params={color} />
      </div>
    </div>
  );
};

export default ThemeGen;
