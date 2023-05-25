import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../states';

const ImageGen = () => {
  const snap = useSnapshot(state);
  return (
    <div className={`${state === 'imagegen' ? 'block' : 'hidden'}`}>ImageGen</div>
  )
}

export default ImageGen