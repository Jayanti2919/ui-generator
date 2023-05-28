import React from 'react'
import { SketchPicker } from 'react-color'
import state from '../states'
import { useSnapshot } from 'valtio'

const ColorPicker = () => {
    const snap = useSnapshot(state)
  return (
    <div>
        <SketchPicker 
            color={state.color}
            onChange={(color)=> {state.color = color.hex}}
        />
    </div>
  )
}

export default ColorPicker