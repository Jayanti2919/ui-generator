import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../states';

const ImageGen = () => {
  const snap = useSnapshot(state);
  return (
    <div className={`${state.currPage === 'imagegen' ? 'block' : 'hidden'} h-fit w-full md:px-20 py-10 flex flex-col gap-5`}>
      <div className="flex justify-between flex-col-reverse md:flex-row gap-5 ml-4">
        <div className="flex flex-col gap-5">
          <h1 className="second-headings">Image Generator</h1>
          <p className="normal-text">
            Now that you have the colors and gradients sorted, it's time to add some visuals. Describe the type of images you want to include in your website and let the AI do the magic for you!
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="w-fit bg-[#B0A8A8] md:px-5 px-3 md:py-2 py-1 rounded-xl hover:bg-white h-fit"
            onClick={() => {
              state.currPage = "themegen";
            }}
          >
            {" "}
            Back{" "}
          </button>
          <button
            className="w-fit bg-[#B0A8A8] md:px-5 px-3 md:py-2 py-1 rounded-xl hover:bg-white h-fit"
            onClick={() => {
              state.currPage = "contentgen";
            }}
          >
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageGen