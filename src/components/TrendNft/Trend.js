import React, { useEffect, useState } from 'react'
// React router dom
import { Link } from 'react-router-dom'


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
        <SkeletonTheme baseColor="#2a2a36" highlightColor="#ffffff10">
            <div className='w-full  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#343444]'>
                <div className='relative w-full h-[340px] xl:h-[298px] lg:h-[230px] md:h-[273px] sm:h-[186px] s:h-[240px] object-contain overflow-hidden ' >
                    {!isLoading &&
                        <div className='h-full'>
                            <Skeleton className='absolute top-[-3px] h-full' />
                        </div>
                    }
                    <img className='flex w-full h-full object-cover' src={props.image} alt="test" />
                </div>
                <div className='flex flex-col p-[10px]'>
                    <Link to={`/home/${props.id}`} className='flex font-medium text-[#ffffff] mb-[10px]'>{
                        !isLoading ? <Skeleton width={100} /> : props.title
                    }</Link>

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
                            {isLoading && <div className='flex flex-col items-end'>
                                <span className='flex mb-[2px] text-[#b6b6b6] text-[10px]'>Current Bid</span>
                                <span className='flex text-[#ffffff] text-[12px]'>{props.price} ETH</span>
                            </div>}
                        </div>
                    </div>
                    <div className='mt-[15px]'>
                        {!isLoading && <div className='w-[80px] h-[30px] overflow-hidden text-[12px] rounded-xl text-white'><Skeleton className='absolute top-[-3px]' width="100%" height="100%" /></div>}

                        {isLoading && <button className='hover:bg-[#3c49bd] transition-all duration-300 w-[80px] h-[30px] bg-[#4A5BE9] text-[12px] rounded-xl mt-1 text-white'>Plase Bid</button>}
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default Trend