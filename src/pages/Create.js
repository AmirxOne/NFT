import React, { Fragment, useState } from 'react';

import Trend from '../components/TrendNft/Trend';
import pic from '../assets/images/img-05.jpg'
import avatar from '../assets/images/ava-05.png'
import Poster from '../components/Poster';

const Create = () => {
    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const priceHandler = (event) => {
        setPrice(event.target.value)
    }

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');

    return (
        <Fragment>
            <Poster />
            <div className='flex flex-col l:flex-row justify-between w-full xl:max-w-[1320px] lg:max-w-[1024px] md:max-w-[900px] sm:max-w-[640px] h-auto m-auto px-4'>
                <div className='flex flex-col items-start h-auto mb-[20px] lg:w-[30%] md:w-[40%] sm:w-[40%] lg:pr-[80px] sm:pr-[20px] s:px-[100px] l:px-0'>
                    <span className='text-white mb-2 flex'>Preview Item</span>
                    <Trend
                        image={pic}
                        title={title === '' ? "you'r title" : title}
                        creator={name === '' ? "you'r name" : name}
                        price={price === '' ? "-" : price}
                        avatar={avatar}
                    />
                </div>
                <form className='lg:w-[70%] md:w-[60%] sm:w-[60%] flex flex-col relative right-0'>
                    <label className='text-[#ffffff] text-[14px] mb-2'>Uploade File</label>
                    <div className='flex flex-col mb-[20px] border-[#727272] border-[1px] rounded-md p-[15px]'>

                        <input className='outline-0 text-white text-[12px]' type={'file'} />
                    </div>

                    <div className='flex flex-col mb-[20px]'>
                        <label className='text-[#ffffff] text-[14px] mb-2'>Title</label>
                        <input spellCheck={false} className='text-white outline-0 bg-transparent border-[1px] border-[#727272] rounded-md text-[14px] p-[8px] w-full' placeholder='Enter Title' type={'text'} onChange={titleHandler} />
                    </div>

                    <div className='flex flex-col mb-[20px]'>
                        <label className='text-[#ffffff] text-[14px] mb-2'>Name</label>
                        <input spellCheck={false} className='text-white outline-0 bg-transparent border-[1px] border-[#727272] rounded-md text-[14px] p-[8px] w-full' placeholder="EnterYou'r Name" type={'text'} onChange={nameHandler} />
                    </div>

                    <div className='flex flex-col mb-[20px]'>
                        <label className='text-[#ffffff] text-[14px] mb-2'>Price</label>
                        <input spellCheck={false} className='text-white outline-0 bg-transparent border-[1px] border-[#727272] rounded-md text-[14px] p-[8px] w-full' placeholder="Enter Price For Item (ETH)" type={'number'} min="0" onChange={priceHandler} />
                    </div>

                    <div className='flex w-full mb-[20px]'>
                        <div className='flex flex-col w-[50%] mr-2'>
                            <label className='text-[#ffffff] text-[14px] mb-2'>Starting Data</label>
                            <input className='text-[#999999] outline-0 bg-transparent border-[1px] border-[#727272] rounded-md text-[14px] p-[8px] w-full' type={'date'} />
                        </div>
                        <div className='flex flex-col w-[50%] ml-2'>
                            <label className='text-[#ffffff] text-[14px] mb-2'>Expiration Date</label>
                            <input className='text-[#999999] outline-0 bg-transparent border-[1px] border-[#727272] rounded-md text-[14px] p-[8px] w-full' type={'date'} />
                        </div>
                    </div>

                    <div className='flex flex-col mb-[20px]'>
                        <label className='text-[#ffffff] text-[14px] mb-2'>Description</label>
                        <textarea spellCheck={false} className='text-white outline-0 bg-transparent border-[1px] border-[#727272] rounded-md text-[14px] p-[8px] w-full min-h-[300px]' placeholder='Enter Description'></textarea>
                    </div>
                </form >
            </div >
        </Fragment>
    );
};

export default Create;