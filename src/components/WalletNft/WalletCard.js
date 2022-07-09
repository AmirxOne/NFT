import React from 'react';

// react icons
import { FaBitcoin } from 'react-icons/fa'

const WalletCard = ({walletData}) => {

const {title, desc, icon} = walletData

    return (
        <div className='xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12  bg-[#343444] rounded-2xl flex flex-col text-white p-7 mb-7 sm:mb-0'>
            <div className='flex justify-center items-center'>
                <div className='shadow-2xl w-14 h-11 rounded-lg flex justify-center items-center '><FaBitcoin className='text-4xl text-white'/></div>
            </div>
            <div className='mt-4 font-extrabold text-lg text-center'>
                {title}
            </div>
            <div className='mt-4 leading-7 text-sm text-center'>
                {desc}
            </div>
        </div>
    );
};

export default WalletCard;