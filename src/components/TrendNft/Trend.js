import React, { Fragment } from 'react'

const Trend = (props) => {
    return (
        <Fragment>
            <div className='w-full aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#343444]'>
                <div className='w-full overflow-hidden object-cover' >
                    <img className='flex' src={props.image} alt="test" />
                </div>
                <div className='flex flex-col p-[10px]'>
                    <span className='flex font-medium text-[#ffffff] mb-[10px]'>{props.title}</span>

                    <div className='flex items-center justify-start w-full relative'>
                        <div className='w-[30px] h-[30px] mr-[15px] flex rounded-[50%] overflow-hidden'>
                            <img src={props.avatar} alt="avatar" />
                        </div>
                        <div>
                            <span className='flex mb-[2px] text-[#b6b6b6] text-[10px] sm:text-[10px]'>Created By</span>
                            <span className='flex text-[#ffffff] text-[12px]'>{props.creator}</span>
                        </div>
                        <div className='flex flex-col absolute right-0'>
                            <span className='flex mb-[2px] text-[#b6b6b6] text-[10px]'>Current Bid</span>
                            <span className='flex text-[#ffffff] text-[12px]'>{props.price} ETH</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Trend