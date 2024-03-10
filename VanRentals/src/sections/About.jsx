import React from 'react'
import aboutHero from "../assets/images/about-hero.png"
import ButtonCard from '../components/ButtonCard'
const About = () => {
  return (
    <div className='flex flex-col justify-evenly p-9 bg-[#f7e4cc]'>
      <div >
        <img src={aboutHero} className='w-full h-full object-cover object-center mx-auto'/>
      </div>
      <div className='max-w-full flex flex-col p-9'>
      <h1 className='text-6xl font-bold my-4 '>Don't squeeze in a sedan when you could relax in a van.</h1>
      <p className='max-w-full text-2xl my-4'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
      <p className='max-w-full text-2xl my-4'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      <div className='border-2 border-black outline-none bg-[#ddc69d] p-9 text-xl rounded-xl'>
        <h2 className='my-4 font-bold'>Your destination is waiting.<br />Your van is ready.</h2>
        <div className='mt-4 text-white'><ButtonCard label="Explore our vans"/></div>
      </div>
      </div>
    </div>
  )
}

export default About
