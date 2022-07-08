import React from 'react';
// react icons
import { AiOutlineWallet } from 'react-icons/ai';

const Card = ({data}) => {
    const {title, dis} = data
    return (
        <div className='xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12  bg-[#343444] rounded-lg flex flex-col text-white p-7 mb-7 sm:mb-0'>
            <div>
                <div className='shadow-2xl w-14 h-14 bg-[#5142fc] rounded-lg flex justify-center items-center '><AiOutlineWallet className='text-3xl'/></div>
            </div>
            <div className='mt-4 font-extrabold text-lg'>
                {title}
            </div>
            <div className='mt-4 leading-8'>
                {dis}
            </div>
        </div>
    );
};

export default Card;