import React from 'react'
import { useGameState } from '../util/context'
import Box from './Box'

const Row = ({ stateRow, rowNum}) => {

    const { colorState } = useGameState()

    const createRow = () => {
        const row = stateRow.map((spite,i) => {
            return <Box 
                letter= { spite } 
                inRow= { rowNum } 
                fill= { colorState[rowNum][i] } 
                key= { i } />
        })
        return row
    }   

    return (
      <div className='flex justify-center content-center h-fit'> 
          { createRow() } 
      </div>
  )
}
  

export default Row