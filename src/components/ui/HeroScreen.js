import React from 'react';
//react icons
import {RiRocketLine} from 'react-icons/ri'
import {MdOutlineCreate} from 'react-icons/md'
// image
import Hero from '../../assets/images/hero.jpg'
// react router dom
import { Link } from 'react-router-dom';

const HeroScreen = () => {
    return (
        <section className=' text-white w-full mt-32'>
            <div className='max-w-[1320px] mx-auto h-full flex items-center justify-center'>
                <div className='w-1/2 flex flex-col items-start justify-center'>
                    <p className='font-bold leading-snug text-4xl'>Discover rare digital art and collect <span className='text-5xl bg-clip-text text-transparent bg-gradient-to-tr from-[#4b50e6] via-[#e250e5] to-[#4b50e6]'>sell extraordinary</span> NFTs</p>
                    <p className='mt-10 leading-10 text-stone-300'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti excepturi omnis neque adipisci sequi ullam unde in minus quis quos.
                    </p>
                    <div className='flex mt-10'>
                        <Link className='flex items-center px-5 py-2 border border-[#4b50e6] rounded-3xl' to='/market'><RiRocketLine className='mr-2'/>Explore</Link>
                        <Link className='flex items-center px-5 py-2 border border-[#4b50e6] rounded-3xl ml-5' to='/create'><MdOutlineCreate className='mr-2'/>Create</Link>
                    </div>
                </div>
                <div className='w-1/2 overflow-hidden flex mx-auto items-center justify-center '>
                    <img className='w-[500px] rounded-lg' src={Hero} alt="Hero"/>
                </div>
                
            </div>
        </section>
    );
};

export default HeroScreen;