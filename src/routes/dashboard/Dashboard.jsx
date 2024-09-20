import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/SIdebar'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
    const dispatch = useDispatch();

  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex-1 p-10'>
            <nav className='w-full bg-green-400 h-10'>
                <button onClick={() => dispatch(logOut())}>Log out</button>
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard