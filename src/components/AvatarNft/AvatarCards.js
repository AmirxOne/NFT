import React from 'react';

// Component
import AvatarCard from './AvatarCard';

// SELLER__DATA
import { SELLER__DATA } from '../../assets/data/data'

const AvatarCards = () => {

    return (
        <div className='w-full h-auto  flex flex-col'>
            <div className='max-w-[640px] md:max-w-[900px] lg:max-w-[1024px] xl:max-w-[1320px] mx-auto h-full w-full px-4'>
                <h1 className='font-medium text-[30px] text-[#ffffff] flex mb-[50px] '>Top Seller</h1>
                
                <div className='max-w-[640px] md:max-w-[900px] lg:max-w-[1024px] xl:max-w-[1320px] mx-auto h-full grid grid-cols-12 gap-2 s:gap-3 sm:gap-4 px-4 mb-20'>
                    {
                        SELLER__DATA.map(item => <AvatarCard key={item.id} sellerData={item}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvatarCards;