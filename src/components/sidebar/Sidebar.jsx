import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='max-w-[250px] flex-1 bg-blue-500 min-h-screen p-10'>
        <ul className='flex flex-col gap-6'>
            <li><NavLink className="text-white" to="/dashboard/profile">Profile</NavLink></li>
            <li><NavLink className="text-white" to="/dashboard/users">Users</NavLink></li>
        </ul>
    </div>
  )
}

export default Sidebar