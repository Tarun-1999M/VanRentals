import React from 'react'
import ButtonCard from '../components/ButtonCard'
import { useSearchParams, useNavigate} from 'react-router-dom'
import { loginUser } from '../api'

const Login = () => {
  const [data,setData] = React.useState({email:"",password:""})
  const [status,setStatus] = React.useState('idle')
  const [error,setError] = React.useState(false)
  const [searchParams,setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const message = searchParams.get('message')
  function handleChange(e){
    const {name,value} = e.target
    setData(prevValue=> ({
      ...prevValue,
      [name]:value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    setStatus('submitting')
    setError(false)
    loginUser(data).then(data=>console.log(data)
      ).catch(err=>setError(err))
    .finally(setStatus('idle'))
    
  }

  return (
    
    <div className='bg-[#f7e4cc] flex items-center flex-col gap-8  justify-center'>
      
      <h1 className='text-4xl font-bold'>Sign in to your account</h1>
      {message  && <h1 className='text-2xl font-bold text-[#FF4500]'>{message}</h1> }
      {error && <h1 className='text-2xl font-bold text-[#FF4500]'>{error.message}</h1> }

      <form className='flex flex-col text-2xl h-screen gap-8 items-center' onSubmit={handleSubmit}>
        <div>
        <label>
          Email:<br></br>
          <input type="email" name="email" placeholder='Enter email address' onChange={handleChange} value={data.email}/>
        </label>
        </div>

        <div>
        <label>
          Password:<br></br>
          <input type="password" name="password" placeholder='Enter password' onChange={handleChange} value={data.password}/>
        </label>
        </div>

        <div ><ButtonCard label={status==="submitting"? "logging in" : "login"} status={status}/></div>
      </form>
    </div>
  )
}

export default Login
