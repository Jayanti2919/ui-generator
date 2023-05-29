import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../states'

const ContentGen = () => {
  const snap = useSnapshot(state);
  return (
    <div className={`${state.currPage === 'contentgen' ? 'block' : 'hidden'} h-fit w-full md:px-20 py-10 flex flex-col gap-5`}>
      <div className="flex justify-between flex-col-reverse md:flex-row gap-5 ml-4">
        <div className="flex flex-col gap-5">
          <h1 className="second-headings">Content Generator</h1>
          <p className="normal-text">
            Almost there! Let's generate some top quality content that you can replace all the ipsum lorem dolor with and make your website truly stand out.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="w-fit bg-[#B0A8A8] md:px-5 px-3 md:py-2 py-1 rounded-xl hover:bg-white h-fit"
            onClick={() => {
              state.currPage = "imagegen";
            }}
          >
            {" "}
            Back{" "}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContentGen