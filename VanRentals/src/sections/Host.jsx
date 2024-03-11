import React from 'react'
import {NavLink} from "react-router-dom"
import { Outlet } from 'react-router-dom'
const Host = () => {
  return (
    <div>
    <div className='flex p-9 text-xl font-bold bg-[#f7e4cc]'>
     <div className='mr-9'><NavLink to="/host" className={({isActive})=>isActive? "activeLink" : ""} end>Dashboard</NavLink></div> 
     <div className='mr-9'><NavLink to="/host/income" className={({isActive})=>isActive? "activeLink" : ""}>Income</NavLink></div>
     <div className='mr-9'><NavLink to="/host/vans" className={({isActive})=>isActive? "activeLink" : ""}>Vans</NavLink></div>
     <div><NavLink to="/host/reviews" className={({isActive})=>isActive? "activeLink" : ""}>Reviews</NavLink></div>
      
    </div>
    <Outlet />
    </div>
  )
}

export default Host
