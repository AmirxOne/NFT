import React from 'react';
//react router dom
import { useLocation } from 'react-router-dom'
// images
import bgContact from '../assets/images/bg.jpg'

const Poster = () => {

    const loc = useLocation()
    console.log(loc)

    return (
        <div className='w-full h-64 -top-[70px] relative'>
            <img className='object-cover h-64 w-full' src={bgContact} alt="" />
            <div className='text-white absolute top-1/2 left-[44%] font-extrabold text-4xl '>
                {loc.pathname === "/contact" ? <span>Contact</span> : <span>Create Item</span>}
            </div>
        </div>
    );
};

export default Poster;