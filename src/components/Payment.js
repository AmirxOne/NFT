import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';

import { IoCloseSharp } from 'react-icons/io5'

const Payment = (props) => {
    const box = useRef('');

    const clickHandler = () => {
        box.current.style.display = 'none';
        props.onCloseBox()
    }

    if (props.state === 'open') {
        box.current.style.display = 'flex';
    }

    const elem = (
        <div ref={box} className='hidden justify-center items-center fixed z-[2000] w-full backdrop-blur-[5px] h-screen bg-[#31313177] top-0 left-0'>
            <div className='relative flex flex-col justify-start items-center w-[500px] bg-[#282930] mx-[20px] rounded-xl overflow-hidden'>
                <span className='text-white my-4 flex'>Place a Bid</span>
                <div className='flex flex-col items-start w-[80%] mb-[20px]'>
                    <span className='text-white text-[12px] mb-2'>you must bid at least <span className='font-medium'>5.86 ETH</span></span>
                    <input className='text-white outline-0 bg-transparent border-[1px] border-[#727272] rounded-md text-[12px] p-[8px] w-full h-[30px]' type="text" spellCheck={false} placeholder='00 : 00 ETH' />
                </div>

                <div className='flex flex-col items-start w-[80%] mb-8'>
                    <span className='text-white text-[12px] mb-2'>Enter Quantity, 5 available</span>
                    <input className='text-white outline-0 bg-transparent border-[1px] border-[#727272] rounded-md text-[12px] p-[8px] w-full h-[30px]' type="text" spellCheck={false} placeholder='Enter Quantity' />
                </div>

                <div className='w-[80%] flex justify-between mb-4'>
                    <span className='text-white text-[14px]'>you must bid at least</span>
                    <span className='text-white text-[14px] font-medium'>5.89 ETH</span>
                </div>

                <div className='w-[80%] flex justify-between mb-4'>
                    <span className='text-white text-[14px]'>service fee</span>
                    <span className='text-white text-[14px] font-medium'>0.89 ETH</span>
                </div>

                <div className='w-[80%] flex justify-between mb-4'>
                    <span className='text-white text-[14px]'>you must bid at least</span>
                    <span className='text-white text-[14px] font-medium'>2.5 ETH</span>
                </div>

                <button className='overflow-hidden text-white text-[14px] rounded-2xl w-[110px] h-[35px] mt-[20px] mb-4 bg-[#4A5BE9]'>
                    <Link className='flex items-center justify-center text-center w-full h-full' to='/wallet'>place a bid</Link>
                </button>

                <button onClick={clickHandler} className='bg-[#4A5BE9] w-8 h-8 rounded-bl-xl top-0 right-0 absolute flex items-center justify-center'><IoCloseSharp color='#ffffff' /></button>
            </div>

        </div>
    )

    return (
        ReactDOM.createPortal(elem, document.querySelector("#payment"))
    )
}

export default Payment