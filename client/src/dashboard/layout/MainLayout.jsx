// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    
    <div className='min-w-screen bg-slate-100'>
         <Sidebar/>
         <Outlet/>
    </div>
  )
}

export default MainLayout
