import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../states'

const ContentGen = () => {
  const snap = useSnapshot(state);
  return (
    <div className={`${state.currPage === 'contentgen' ? 'block' : 'hidden'}`}>ContentGen</div>
  )
}

export default ContentGen