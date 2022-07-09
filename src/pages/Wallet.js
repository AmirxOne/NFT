import React from 'react';
// Component
import Poster from '../components/Poster'
import WalletCard from '../components/WalletNft/WalletCard';

const data = [
      {
        title: "Bitcoin",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!",
        icon: "Logo",
        id:1,
      },
      {
        title: "Coinbase",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!",
        icon: "Logo",
        id:2,
      },
      {
        title: "Metamask",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!",
        icon: "Logo",
        id:3,
      },
      {
        title: "Authereum",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!",
        icon: "Logo",
        id:4,
      },
]

const Wallet = () => {
    return (
        <>
            <Poster/>
            <h1 className='px-4 font-semibold text-4xl mb-10 text-white text-center'>Connect your wallet</h1>
            <p className='px-2 s:px-10 lg:px-80 text-lg text-center text-stone-300 leading-10 mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum aperiam cumque fugit suscipit animi natus nostrum voluptatem iste quam!</p>
            <div className='max-w-[640px] md:max-w-[900px] lg:max-w-[1024px] xl:max-w-[1320px] mx-auto h-full grid grid-cols-12 sm:gap-5 px-4'>
                {
                    data.map(item => <WalletCard key={item.id} walletData={item}/> )
                }
            </div>
        </>
    );
};

export default Wallet;