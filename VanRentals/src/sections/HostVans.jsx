import React from 'react'
import {NavLink} from "react-router-dom"

const HostVans = () => {
  const [data,setData] = React.useState('')
  const [error,setError] =  React.useState(false)

 React.useEffect(()=>{

  async function fetchData(){
    try{

      const res = await fetch('/api/vans');
      const data = await res.json();
      setData(data.vans)
    }
    catch(error){
      setError(error.message);
    }
  }
  fetchData()
 },[])

 if(error){
  alert(error.message)
 }

  return (
    <div className='p-9 bg-[#f7e4cc]'>
      <h1 className='text-3xl font-bold'>Your listed vans</h1>
      { 
        data? data.map((van)=>(
          <NavLink key={van.id}to={`/host/vans/${van.id}`}>
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
