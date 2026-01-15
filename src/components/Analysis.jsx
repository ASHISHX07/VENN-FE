import React from 'react'
import BarChartAnalysis from './BarChartAnalysis';


const Analysis = () => {
  return (
    <div className='flex w-full h-100 p-2'>
        <div className='flex relative w-full max-sm:h-fit md:h-full p-2 border border-emerald-500 rounded-lg bg-emerald-500/20'>
          <div className='max-sm:w-full max-sm:h-60 md:w-[40%] md:h-full'>
            <BarChartAnalysis />
          </div>
        </div>
    </div>
  )
}

export default Analysis;