import React from 'react'
import { NavLink,useParams,useLocation,useLoaderData } from 'react-router-dom'
import ButtonCard from '../components/ButtonCard'

export async function loader({params}){
  const res = await fetch(`/api/vans/${params.id}`)
  if(!res.ok){
    throw{
      message:"can not fetch the data",
      status:res.status,
      statusText:res.statusText
    }
  }
  const data = await res.json()
  return data.vans
}


const VanDetail = () => {

    const vanInformation = useLoaderData()
    const location = useLocation()
   
const search = location.state && location.state.search || ""
const type = location.state && location.state.type || "all"
  return (
    <div className='bg-[#f7e4cc]'>
      {
        vanInformation? 

            (   
                <div key={vanInformation.id} className='p-9 flex flex-col gap-4 max-w-4xl ml-8'>
                <NavLink to={`..?${search}`} relative="path" className="underline">{`Back to ${type} vans`}</NavLink>
                <img src={vanInformation.imageUrl} className='max-w-sm'/>
                <div className='mt-2'><ButtonCard label={vanInformation.type} /></div>
                <h1 className='text-4xl font-bold'>{vanInformation.name}</h1>
                <p className='text-xl'>{`$${vanInformation.price}/day`}</p>
                <p>{vanInformation.description}</p>
                <div><ButtonCard label="Rent this van" /></div>
                </div>
            )
            
         : <p>data is loading....</p>
      }
    </div>
  )
}

export default VanDetail
