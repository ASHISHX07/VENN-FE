import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <div className='flex items-center justify-center w-full min-h-full h-auto'>
          <Outlet />
        </div>
    </div>
  )
}

export default RootLayout;