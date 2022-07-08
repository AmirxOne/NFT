import React from 'react';


const AvatarCard = ({sellerData}) => {
    const {sellerName, sellerImg, currentBid} = sellerData

    return (
        <div className='xl:col-span-2 s:col-span-4 sm:col-span-3 col-span-6  bg-[#343444] rounded-2xl text-white flex lg:flex-row flex-col items-center justify-center py-4 px-2 md:px-3 sm:mb-0'>
            <div className='w-16 h-16 mb-4 lg:mr-4 md:mb-0 flex items-center justify-center '>
                <img className='object-cover ring-2 ring-[#5142fc] rounded-full' src={sellerImg} alt="Avatar" />
            </div>
            <div className='flex flex-col'>
                <span className='font-bold'>{sellerName}</span>
                <span className='text-sm'>{currentBid}</span>
            </div>
        </div>
    );
};

export default AvatarCard;