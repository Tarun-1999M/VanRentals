import React from 'react'
import ButtonCard from '../components/ButtonCard'
import {Link} from "react-router-dom"

const Vans = () => {
    const [data,setData] = React.useState('')
    const [error,setError] = React.useState(false)

  React.useEffect(()=>{
    async function fetchData(){
        try{
        const res= await fetch("/api/vans");
        const data= await res.json()
        setData(data.vans)
        }
        catch(error){
            setError(error.message)
        }
    }
    fetchData();
  },[])

 console.log(data)

  return (
    <>
    <div className='bg-[#f7e4cc] text-4xl p-9 font-bold'>Explore our van options</div>
    <div className='grid grid-cols-2 gap-2 p-9 bg-[#f7e4cc]'>
      {
      
        data? data.map((van)=>(
            <div key={van.id} className='max-w-4xl flex flex-col items-center'>
               <Link  to={`/vans/${van.id}`}>
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
