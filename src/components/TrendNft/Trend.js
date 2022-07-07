import React from 'react'

const Trend = props => {
  return (
    <div className='xl:max-w-[1320px] lg:max-w-[1024px] md:max-w-[900px] sm:max-w-[640px] px-4 h-auto m-auto my-[100px]'>
      <span className='font-medium text-[30px] text-[#ffffff] flex mb-[20px]'>Trend</span>
      <div className='grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8'>
        <div className='w-full h-[450px]  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#2d304e]'></div>
        <div className='w-full h-[450px]  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#2d304e]'></div>
        <div className='w-full h-[450px]  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#2d304e]'></div>
        <div className='w-full h-[450px]  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#2d304e]'></div>
      </div>
    </div>
  )
}

export default Trend