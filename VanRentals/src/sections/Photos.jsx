import React from 'react'
import { useOutletContext } from 'react-router-dom'
const Photos = () => {
  const {vanInformation} = useOutletContext()
  return (
    <div className='bg-white p-9'>
      <div><img src={vanInformation.imageUrl} className='h-[200px]'/></div>
    </div>
  )
}

export default Photos
