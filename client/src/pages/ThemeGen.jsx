import React, { useState, useRef } from 'react'
import { useSnapshot } from 'valtio'
import state from '../states'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeAnimation, headContainerAnimation, headTextAnimation } from '../helpers/motion'
import { slideAnimation } from '../helpers/motion'

const ThemeGen = () => {
  const snap = useSnapshot(state);
  const formref = useRef();

  const [prompt, setPrompt] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // api call to localhost:8080/api/chat
    const reqbody = "Generate a color scheme for a website " + prompt
    console.log(reqbody)
  }

  return (
    <div className={`${state.currPage === 'themegen' ? "block" : "hidden"} h-fit w-full md:px-20 px-7 py-10 flex flex-col gap-5`}>
      <h1
      className='second-headings'>
        Theme Generator
      </h1>
      <p className='normal-text'>
        For a great website you need great planning. So, let's start with selecting a color for your website! Enter a prompt describing what your website is about to get an AI generated color scheme.
      </p>

      <div className='flex pt-5'>
        <form action="" onSubmit={handleFormSubmit} ref={formref}>
          <div className='flex flex-col gap-5'>
          <label htmlFor="" className='form-text'>Generate a color scheme for a website ... </label>
          <textarea name="ai-prompt" id="ai-prompt" cols="40" rows="5" placeholder='Describe what your website is about and what is the look and feel you are expecting.'
            className='py-2 px-5 rounded-lg bg-tertiary placeholder:text-primary text-black'
            onChange={(e) => {setPrompt(e.target.value)}}
          />
          <button type='submit'
            className='w-fit bg-secondary px-5 py-2 rounded-xl'
          >
            Generate
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ThemeGen