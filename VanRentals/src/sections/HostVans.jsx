import React from 'react'
import {NavLink} from "react-router-dom"
import { useLoaderData } from 'react-router-dom'
import { Auth } from '../components/Auth'

export async function loader(){
  await Auth()

  const res = await fetch('/api/vans')
  if(!res.ok){
    throw{
      message:"cannot fetch vans",
      status: res.status,
      statusText: res.statusText
    }
  }
  const data = await res.json()
  return data.vans
}

const HostVans = () => {
  const data = useLoaderData()
  const [error,setError] =  React.useState(false)


  return (
    <div className='p-9 bg-[#f7e4cc]'>
      <h1 className='text-3xl font-bold'>Your listed vans</h1>
      { 
        data? data.map((van)=>(
          <NavLink key={van.id} to={`${van.id}`}>
          <div className='flex gap-2 items-center bg-white m-4 p-5 rounded-xl max-w-2xl'>
          <div><img src={van.imageUrl} className='h-[200px]'/></div>
          <div className='flex flex-col '>
            <p className='font-bold text-2xl'>{van.name}</p>
            <p className='text-xl'>{`$${van.price}/day`}</p>
          </div>
          </div>
          </NavLink>
        )) : <p>data is loading....</p>
      }
    </div>
  )
}

export default HostVans
