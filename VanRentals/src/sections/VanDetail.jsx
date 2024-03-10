import React from 'react'
import { useParams } from 'react-router-dom'
import ButtonCard from '../components/ButtonCard'

const VanDetail = () => {
    const params= useParams()
    const [vanInformation,setVanInformation] = React.useState('')
    const [error,setError] = React.useState(false)
    console.log(params)
   
React.useEffect(()=>{
    async function fetchData(){
        try{
            const res= await fetch(`/api/vans/${params.id}`)
            const data = await res.json()
            setVanInformation(data.vans)
        }
        catch(error){
            setError(error.message)
        }
    }
    fetchData();
},[params.id])

React.useEffect(() => {
    console.log(vanInformation);
  }, [vanInformation]);

  
if(error){
    alert(error.message)
}

  return (
    <div className='bg-[#f7e4cc]'>
      {
        vanInformation? 
            (
                <div key={vanInformation.id} className='p-9 flex flex-col gap-4 max-w-4xl ml-8'>
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
