import React from 'react';
//react router dom
import { useLocation } from 'react-router-dom'
// images
import bgContact from '../assets/images/bg.jpg'

const Poster = () => {
    const loc = useLocation()

    return (
        <div className='w-full h-64 -top-[70px] relative'>
            <img className='object-cover h-64 w-full' src={bgContact} alt="" />
            <div className='text-white absolute top-1/2 font-extrabold text-4xl w-full text-center '>
                {loc.pathname === "/contact" && <span>Contact</span>}
                {loc.pathname === "/create" && <span>Create Item</span>}
                {loc.pathname === "/wallet" && <span>Connect Wallet</span>}
            </div>
        </div>
    );
};

export default Poster;