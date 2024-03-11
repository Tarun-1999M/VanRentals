import React from 'react'
import { useOutletContext } from 'react-router-dom'
const Pricing = () => {
  const {vanInformation} = useOutletContext()
  return (
    <div className='bg-white p-9 text-xl'> 
      <p>{`$${vanInformation.price}/day`}</p>
    </div>
  )
}

export default Pricing
