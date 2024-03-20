import React from 'react'
import ButtonCard from '../components/ButtonCard'
import { NavLink } from 'react-router-dom'

const FourOFour = () => {
  return (
    <div className='p-9 bg-[#f7e4cc]'>

      <div className='flex justify-center items-center text-2xl flex-col h-screen gap-4 '>
        <h1 className='font-bold'>404</h1>
         <h1>Sorry the page you were looking for was not found.</h1>
         <NavLink to="/"><ButtonCard label="Return to home" /></NavLink>
      </div>
    </div>
  )
}

export default FourOFour
