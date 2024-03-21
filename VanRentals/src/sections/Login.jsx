import React from 'react'
import ButtonCard from '../components/ButtonCard'
import { useSearchParams, useNavigate, Form, useLoaderData, redirect} from 'react-router-dom'
import {loginUser} from "../api"


export async function action ({request}){
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  console.log(email,password)
  const data = await loginUser({email,password})
  console.log(data)
  localStorage.setItem("loggedin",true)
  const response =  redirect("/host")
  response.body = true
  return response
}

export function loader({request}){
  return new URL(request.url).searchParams.get("message")
}

const Login = () => {
  const [data,setData] = React.useState({email:"",password:""})
  const [status,setStatus] = React.useState('idle')
  const [error,setError] = React.useState(false)
  const message = useLoaderData()


  return (
    
    <div className='bg-[#f7e4cc] flex items-center flex-col gap-8  justify-center'>
      
      <h1 className='text-4xl font-bold'>Sign in to your account</h1>
      {message  && <h1 className='text-2xl font-bold text-[#FF4500]'>{message}</h1> }
      {error && <h1 className='text-2xl font-bold text-[#FF4500]'>{error.message}</h1> }

      <Form className='flex flex-col text-2xl h-screen gap-8 items-center' method="post">
        <div>
        <label>
          Email:<br></br>
          <input type="email" name="email" placeholder='Enter email address' />
        </label>
        </div>

        <div>
        <label>
          Password:<br></br>
          <input type="password" name="password" placeholder='Enter password'/>
        </label>
        </div>

        <div ><ButtonCard label={status==="submitting"? "logging in" : "login"} status={status}/></div>
      </Form>
    </div>
  )
}

export default Login
