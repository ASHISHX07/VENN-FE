import React from 'react'

const StrategiesSideBar = () => {
  return (
    <div className='w-full h-[calc(100vh-3rem)] py-2 px-1 box-border'>
      <table className='flex flex-col w-full h-full relative backdrop-blur-md bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] transition-all duration-300 rounded-lg overflow-hidden'>
        <thead className='flex relative w-full h-8 justify-start items-center box-border text-md text-gray-600 dark:text-gray-300 text-shadow-gray-300 dark:text-shadow-gray-900/80 text-shadow-md border-b border-gray-500 transition-all duration-300'>
          <tr className='flex w-full h-full items-center'>
            <th className='w-[60%] text-left pl-4 font-light'>
              Strategies
            </th>
            <th className='w-[40%] text-left pl-2 font-light'>
              Execution
            </th>
          </tr>
        </thead>
        <tbody className='flex flex-col w-full h-full relative top-0 p-2 overflow-x-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-gray-600 dark:text-gray-300 transition-all duration-300'>
          <tr className='flex w-full h-fit py-0.5 border-b border-gray-500/50 shrink-0 hover:bg-black/5 hover:dark:bg-white/5 transition-all'>
            <td className='w-[60%] px-2 wrap-break-word'>
              customized friday short strangle
            </td>
            <td className='w-[40%] px-2'>
              <div className='flex relative w-full h-full justify-center items-center max-sm:gap-2 md:gap-4 lg:gap-6'>
                <div className='week-mapper'>M</div>
                <div className='week-mapper'>T</div>
                <div className='week-mapper'>W</div>
                <div className='week-mapper'>T</div>
                <div className='week-mapper'>F</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StrategiesSideBar;