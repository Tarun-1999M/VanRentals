import React from 'react'
import { useOutletContext } from 'react-router-dom'
const Details = () => {
  const {vanInformation} = useOutletContext()
  return (
    <div className='flex flex-col gap-4 bg-white p-9 text-xl'>
      <p><strong>Name: </strong>{vanInformation.name}</p>
      <p><strong>Category: </strong>{vanInformation.type}</p>
      <p className='max-w-xl'><strong>Description: </strong>{vanInformation.description}</p>
      <p><strong>Visibility: </strong>Public</p>
    </div>
  )
}

export default Details
