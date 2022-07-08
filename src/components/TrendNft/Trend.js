import React, { useEffect, useState } from 'react'


import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Trend = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 3000)
    }, [])

    return (
        <SkeletonTheme baseColor="#2a2a36" highlightColor="#444">
            <div className='w-full aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#343444]'>
                <div className='relative w-full overflow-hidden h-[300px] object-cover' >
                    {!isLoading && 
                    <div>
                        <Skeleton className='absolute top-[-4px] h-[300px]' />
                    </div>
                    }
                    <img className='flex w-full h-full object-cover' src={props.image} alt="test" />
                </div>
                <div className='flex flex-col p-[10px]'>
                    <span className='flex font-medium text-[#ffffff] mb-[10px]'>{
                        !isLoading ? <Skeleton width={100} /> : props.title
                    }</span>

                    <div className='flex items-center justify-start w-full relative'>
                        <div className='w-[30px] h-[30px] mr-[15px] flex rounded-[50%] overflow-hidden'>
                            {!isLoading && <Skeleton className='h-[30px] top-[-4px]' width="30px" />}
                            {isLoading && <img src={props.avatar} alt="avatar" />}
                        </div>
                        <div>
                            {!isLoading && <div>
                                <Skeleton className='flex items-center' height="8px" width="40px" />
                                <Skeleton className='flex items-center' height="10px" width="60px" />
                            </div>}
                            {isLoading && <div>
                                <span className='flex mb-[2px] text-[#b6b6b6] text-[10px] sm:text-[10px]'>Created By</span>
                                <span className='flex text-[#ffffff] text-[12px]'>{props.creator}</span>
                            </div>}
                        </div>
                        <div className='flex flex-col absolute right-0'>
                            {!isLoading && <div className='flex flex-col items-end'>
                                <Skeleton className='flex items-center' height="8px" width="40px" />
                                <Skeleton className='flex items-center' height="10px" width="60px" />
                            </div>}
                            {isLoading && <div>
                                <span className='flex mb-[2px] text-[#b6b6b6] text-[10px]'>Current Bid</span>
                                <span className='flex text-[#ffffff] text-[12px]'>{props.price} ETH</span>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default Trend