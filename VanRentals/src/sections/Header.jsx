import React from 'react'
import {NavLink} from "react-router-dom"
const Header = () => {
  return (
    <div>
      
      <nav className='flex p-9 justify-between items-center text-lg m-0 bg-[#f7e4cc]'>
        <div className='text-2xl font-bold'><NavLink to="/">#VANLIFE</NavLink></div>
        <div className='flex justify-between'>
          <div></div><NavLink to="/host"  className={({isActive})=>isActive? "activeLink mr-9" : "mr-9"}>Host</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive? "activeLink mr-9" : "mr-9"}>About</NavLink>
          <NavLink to="/vans" className={({isActive})=>isActive? "activeLink mr-9" : "mr-9"}>Vans</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
