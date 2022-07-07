import React,{useState} from 'react';
// react icons
import{AiOutlineFire, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import{FaWallet} from 'react-icons/fa'
//react router dom
import { Link, NavLink } from 'react-router-dom';

const data_Nav = [
    {
        id:1,
        navTitle:"Home",
        url:"/home",
    },
    {
        id:2,
        navTitle:"Market",
        url:"/market",
    },
    {
        id:3,
        navTitle:"Create",
        url:"/create",
    },
    {
        id:4,
        navTitle:"Contact",
        url:"/contact",
    },
]

const Header = () => {

    const [show, setShow] = useState(false);
    const showHandler = () => {
        setShow(!show)
    }

    return (
        <header className='z-[1000] w-full h-[70px] fixed top-0 bg-[#14141fcb] backdrop-blur-[12px]'>
            <div className='max-w-[640px] md:max-w-[900px] lg:max-w-[1024px] xl:max-w-[1320px] mx-auto h-full px-4 flex items-center justify-between '>
                <div className='flex items-center bg-clip-text text-transparent bg-gradient-to-tr from-[#4b50e6] via-[#e250e5] to-[#4b50e6]'>
                    <AiOutlineFire className='text-5xl text-[#e250e5]'/>
                    <h1 className='text-4xl font-extrabold'>NFT.</h1>
                </div>
               
                <ul className={show ? 'a -right-0' : 'a -right-[1000px]'}>
                    {
                        data_Nav.map((item, i) => <li className='mb-12 md:mb-0' 
                        onClick={showHandler} key={item.id}>
                            <NavLink  className={(navClass) => navClass.isActive ? 'px-4 py-2 text-[#e250e5] ' : 'px-4 py-2' } to={item.url}>{item.navTitle}</NavLink > 
                            {/* ({isActive}) => isActive ? '' : '' */}
                            </li>)
                    }
                    <div onClick={showHandler} className='md:hidden absolute top-4 left-4'><AiOutlineClose className='text-2xl text-white'/></div>
                </ul>
                
                <div className='hidden md:flex hover:shadow-[0_0_10px] hover:shadow-[#4b50e6] focus: border border-[#4b50e6]  overflow-hidden rounded-3xl text-white'><Link className='px-5 py-2 text-sm w-full h-full flex items-center justify-center' to='/wallet'><FaWallet className='mr-2'/>Connect Wallet</Link></div>
                <div onClick={showHandler} className='flex md:hidden'>
                    <AiOutlineMenu className='text-2xl text-white'/>  
                </div>
            </div>
        </header>
    );
};

export default Header;