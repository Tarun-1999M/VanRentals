import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div>
      
      <nav className='flex p-9 justify-between items-center text-lg m-0 bg-[#f7e4cc]'>
        <div className='text-2xl font-bold'><Link to="/">#VANLIFE</Link></div>
        <div className='flex justify-between'>
          <Link to="/about" className='mr-9'>About</Link>
          <Link to="/Vans" className='mr-9'>Vans</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
