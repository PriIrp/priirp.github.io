import React from 'react'
import { useGameState } from '../util/context'

const Box = (props) => {

  const { invalidRow } = useGameState()
  const { letter, inRow } = props

  return (
    <div className= {`flex justify-center content-center text-center text-white bg-[#121213] w-[50px] h-[50px] border-2 border-box m-1 ${letter ? "border-[#3a3a3c]" : "border-[#565758]"} ${invalidRow === inRow ? 'border-red-700' : ''}`}>    
      { letter }
    </div>
  )
}

export default Box
