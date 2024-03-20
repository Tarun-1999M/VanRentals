import React from 'react'
import { Outlet, useLoaderData} from 'react-router-dom'
import ButtonCard from '../components/ButtonCard'
import {NavLink} from "react-router-dom"
import { Auth } from '../components/Auth'
export async function loader({params}){

  await Auth()
  const res = await fetch(`/api/vans/${params.id}`)
  if(!res.ok){
    throw{
      message:"Error in fetching van Details",
      status:res.status,
      statusText:res.statusText
    }
  }
  const data = await res.json()
  return data.vans
}

const HostVanDetail = () => {
  const vanInformation = useLoaderData();

  return (
    <div>
     {
      vanInformation? (
      <div className='p-9 bg-[#f7e4cc]'>

      <div className='underline mb-9 text-xl'><NavLink to=".." relative='path'>Back to all vans</NavLink></div>

      <div className='flex items-center bg-white p-9 gap-2'>
      <img src={vanInformation.imageUrl} className='h-[200px]'/>
      <div className='flex flex-col'>
      <div className='mb-4'><ButtonCard label={vanInformation.type}/></div>
      <p className='font-bold text-2xl'>{vanInformation.name}</p>
      <p className='text-xl'>{`$${vanInformation.price}/day`}</p>
      </div>
      </div>

      <nav className='flex bg-white p-9'>
        <div className='mr-4'><NavLink to={`/host/vans/${vanInformation.id}`} className={({isActive})=>isActive? "activeLink" : ""} end>Details</NavLink></div>
        <div className='mr-4'><NavLink to={`/host/vans/${vanInformation.id}/pricing`} className={({isActive})=>isActive? "activeLink" : ""}>Pricing</NavLink></div>
       <div> <NavLink to={`/host/vans/${vanInformation.id}/photos`} className={({isActive})=>isActive? "activeLink" : ""}>Photos</NavLink></div>
      </nav>
        <Outlet context={{vanInformation}}/>
      </div>
      
      ) : <p>data is loading....</p>
     }
    </div>
  )
}

export default HostVanDetail
