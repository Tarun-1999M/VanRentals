import React from 'react'
import ButtonCard from '../components/ButtonCard'
import {Link, NavLink} from "react-router-dom"
import { useSearchParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

export async function loader({request}){
  const url = new  URL(request.url)
  const type = url.searchParams.get('type')
  const res = await fetch('/api/vans')
  if(!res.ok){
    throw{
      message: "failed to fetch vans",
      statusText: res.statusText,
      status:res.status
    }
  }
  let data = await res.json()

  if(type){
    data = data.vans ? data.vans.filter(char => char.type ===type) : [];
  }
  else{
    data = data.vans || "";
  }
  
  return data

  
}

const Vans = () => {
    const data = useLoaderData()
    console.log(data)

    const [error,setError] = React.useState(false)
    const [searchParams,setSearchParams] = useSearchParams()
    const filterBy = searchParams.get('type')
   

 function isActiveLink(type){
  return filterBy===type
 }

 function handleFilterChange(key,value){
  setSearchParams(prevValue=>{
    if(value===null){
      prevValue.delete(key)
    }
    else{
      prevValue.set(key,value)
    }
    return prevValue
  }
  )
 }

  return (
    <>
    <div className='bg-[#f7e4cc] text-4xl p-9 font-bold'>Explore our van options</div>
    <div className='flex gap-4 bg-[#f7e4cc] p-9'>
      <div className={`border-2 border-orange-300 p-2 rounded-xl ${isActiveLink('simple')? 'activeLink' : ""}`}><button onClick={()=>handleFilterChange('type','simple')}>simple</button></div>
      <div className={`border-2 border-orange-300 p-2 rounded-xl ${isActiveLink('luxury')? 'activeLink' : ""}`}><button onClick={()=>handleFilterChange('type','luxury')}>luxury</button></div>
      <div className={`border-2 border-orange-300 p-2 rounded-xl ${isActiveLink('rugged')? 'activeLink' : ""}`}><button onClick={()=>handleFilterChange('type','rugged')}>rugged</button></div>
      {filterBy && <div className='border-2 border-orange-300 p-2 rounded-xl'><NavLink to=".">clear filter</NavLink></div>}
    </div>
    <div className='grid grid-cols-2 gap-2 p-9 bg-[#f7e4cc]'>
      {
      
        data? data.map((van)=>(
            <div key={van.id} className='max-w-4xl flex flex-col items-center'>
               <Link  to={`${van.id}`} state={{search:searchParams.toString() , type : filterBy}}>
                <div><img src={van.imageUrl} alt={`van ${van.id}`} className='rounded-xl object-contain h-[400px] w-full'/></div>
                <div className='flex justify-between w-[400px] my-2 text-2xl'>
                    <p>{van.name}</p>
                    <p>{`$${van.price}/day`}</p>
                </div>
               <div className='w-[400px] flex justify-start mb-4'> <ButtonCard label={van.type} /></div>
               </Link>
            </div>
            
        )) : <p>data loading...</p>
      }
    </div>

    </>
  )
}

export default Vans
