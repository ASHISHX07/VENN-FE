import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <div className='flex items-center justify-center w-full h-full'>
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout;