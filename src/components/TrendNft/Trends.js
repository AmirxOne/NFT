import React from 'react'
import Trend from './Trend'
import { nftData } from '../../assets/data/data'

const Trends = () => {
  return (
    <div className='xl:max-w-[1320px] lg:max-w-[1024px] md:max-w-[900px] sm:max-w-[640px] px-4 h-auto m-auto my-[100px]'>
      <span className='font-medium text-[30px] text-[#ffffff] flex mb-[50px]'>Trend</span>
      <div className='grid grid-cols-1 s:grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8'>
        {nftData.map((data) => (
          <Trend
            key={data.id}
            title={data.title}
            creator={data.creator}
            image={data.imgUrl}
            avatar={data.creatorImg}
            price={data.currentBid}
            id={data.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Trends;