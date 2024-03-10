import React from 'react'
import ButtonCard from '../components/ButtonCard'
const Hero = () => {
  return (
    <div>
      <div className='bg-scenary bg-center bg-cover h-screen flex flex-col justify-center p-9'>
        <div className='max-w-lg text-white flex flex-col mx-auto items-center'>
          <p className='text-4xl my-4'>You got the travel plans, we got the travel vans</p>
          <p className='text-xl my-4'>Add adventure to your life by joining the #vanline movement.<br></br>
          Rent the perfect van to make your perfect road trip.</p>
          <div><ButtonCard label="Find your van" /></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
