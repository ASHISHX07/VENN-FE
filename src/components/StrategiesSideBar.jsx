import React from 'react'

const StrategiesSideBar = () => {
  return (
    <div className='w-full h-[calc(100vh-3rem)] py-2 px-1 box-border'>
      <div className='w-full h-full backdrop-blur-md bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] transition-all duration-300 rounded-lg'>
        <div className='flex relative w-full h-8 justify-start items-center px-3 box-border max-sm:text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 text-shadow-gray-300 dark:text-shadow-gray-900/80 text-shadow-md border-b border-gray-500 transition-all duration-300'>
          Strategies
        </div>
        <div className='ssbs w-full h-full p-2 overflow-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
          
        </div>
      </div>
    </div>
  )
}

export default StrategiesSideBar