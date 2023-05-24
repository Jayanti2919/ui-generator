import React from 'react'
import { useSnapshot } from 'valtio'
import Hero from '../components/Hero'

import state from '../states'

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <div className={`${snap.currPage==='home' ? "block" : "hidden"} `}>
      <Hero />
    </div>
  )
}

export default Home