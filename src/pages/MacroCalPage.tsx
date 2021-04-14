import React from 'react'
import MacroCalculator from '../components/Macrocalculator'
import MacroInfo from '../components/MacroInfo'
import Test from './test'
import {Link} from 'react-router-dom'

const MacroCal = () => {
  return (
    <div className='macrocal'>
      <Test/>
      {/* <MacroCalculator/> */}
      {/* <MacroInfo/>
      <MacroInfo/> */}
    </div>
  )
}

export default MacroCal
