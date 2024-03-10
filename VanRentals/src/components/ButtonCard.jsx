
import React from 'react'

const ButtonCard = (props) => {
  return (
    
    <div>
      <button className='border-black border-2 p-4 rounded-xl bg-[#FF4500] outline-none text-white'>{props.label}</button>
    </div>
    
  )
}

export default ButtonCard
