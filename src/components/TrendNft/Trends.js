import React, { useState } from 'react'

import Trend from './Trend'
import { nftData } from '../../assets/data/data'
import { FiSearch } from 'react-icons/fi';

const Trends = () => {
  const [select, setSelect] = useState('default');
  const [search, setSearch] = useState('');

  const selectHandler = (e) => {
    setSelect(e.target.value);
  }
  const searchHandler = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='xl:max-w-[1320px] lg:max-w-[1024px] md:max-w-[900px] sm:max-w-[640px] px-4 h-auto m-auto my-[100px]'>
      <span className='font-medium text-[30px] text-[#ffffff] flex mb-8'>Trend</span>

      <div className='flex justify-between items-center w-full h-[50px] mb-4'>
        <label htmlFor="underline_select" className="sr-only">Underline select</label>
        <select onChange={selectHandler} id="underline_select" className="pr-[10px] block py-2.5 px-1 w-[90px] text-sm text-gray-500 bg-transparent border-0 border-b-2 border-[#8b8b8b] appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-[#969696] peer">
          <option className='bg-[#2d2930] text-[#ffffff]' value="default">Sort By</option>
          <option className='bg-[#2d2930] text-[#ffffff]' value="high">High Price</option>
          <option className='bg-[#2d2930] text-[#ffffff]' value="low">Low Price</option>
        </select>

        <div className='w-auto flex items-center relative'>
          <input className='w-[200px] h-[30px] rounded-md outline-none pl-[30px] bg-transparent border-[1px] border-[#9e9e9e] text-[12px] text-white' onChange={searchHandler} type="text" placeholder='Search' />
          <FiSearch className='text-[#9e9e9e] absolute left-[8px]' />
        </div>
      </div>

      <div className='grid grid-cols-1 s:grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8'>
        {select === 'high' && nftData.filter((data) => data.title.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => b.currentBid - a.currentBid)
          .map(data =>
            <Trend
              key={data.id}
              title={data.title}
              creator={data.creator}
              image={data.imgUrl}
              avatar={data.creatorImg}
              price={data.currentBid}
              id={data.id}
            />)}

        {select === 'low' && nftData.filter(data => data.title.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => a.currentBid - b.currentBid)
          .map((data) =>
            <Trend
              key={data.id}
              title={data.title}
              creator={data.creator}
              image={data.imgUrl}
              avatar={data.creatorImg}
              price={data.currentBid}
              id={data.id}
            />)}

        {select === 'default' && nftData.filter(data => data.title.toLowerCase().includes(search.toLowerCase()))
          .map((data) => (
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