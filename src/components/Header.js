import React,{useState} from 'react';
// react icons
import{AiOutlineFire, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import{FaWallet} from 'react-icons/fa'
//react router dom
import { Link } from 'react-router-dom';

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

    const [bg, setBg] = useState(false);
    const clickHandler = (i) => {
        if(bg === i){
            return setBg(null)
        }
        setBg(i)
        setShow(!show)
    }

    const [show, setShow] = useState(false);
    const showHandler = () => {
        setShow(!show)
    }

    return (
        <header className='w-full h-[70px]'>
            <div className='max-w-[1320px] mx-auto h-full px-4 flex items-center justify-between '>
                <div className='flex items-center bg-clip-text text-transparent bg-gradient-to-tr from-[#4b50e6] via-[#e250e5] to-[#4b50e6]'>
                    <AiOutlineFire className='text-5xl text-[#e250e5]'/>
                    <h1 className='text-4xl font-extrabold'><span></span>NFT.</h1>
                </div>
               
                <ul className={show ? 'a -right-0' : 'a -right-[1000px]'}>
                    {
                        data_Nav.map((item, i) => <li className={bg === i ? "text-[#e250e5] mb-12 md:mb-0" : "text-white mb-12 md:mb-0"} 
                        onClick={() => clickHandler(i) } key={item.id}>
                            <Link className='px-4 py-2 ' to={item.url}>{item.navTitle}</Link>
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