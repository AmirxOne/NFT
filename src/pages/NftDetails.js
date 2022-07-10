import React,{useState} from 'react';
// react router dom
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
// Components
import Poster from '../components/Poster';
// data
import { nftData } from '../assets/data/data';
// react icons
import { BsBasket } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import { FiSend, FiMoreVertical, FiHeart } from 'react-icons/fi'

const NftDetails = () => {

    const params = useParams();
    const id = params.id - 1;

    const dataD = nftData.find(item => item.id === id + 1)
    const {title, desc, imgUrl, creator, creatorImg} = dataD

    //cuntionall
    const [show ,setShow] = useState(false);
    const clickHandler = () => {
        setShow(!show)
    }

    return (
            <>
                <Poster/>
                <div className='text-white w-full lg:mt-32'>
                    <div className='max-w-[640px] md:max-w-[900px] lg:max-w-[1024px] xl:max-w-[1320px] mx-auto h-full px-4 flex flex-col lg:flex-row items-center justify-center'>
                        <div className='w-[290px] md:w-[600px] rounded-2xl overflow-hidden'><img src={imgUrl} alt="NFT_Image" /></div>
                        <div className='w-full lg:w-1/2 flex flex-col items-center justify-center lg:items-start text-white p-2 md:p-8 md:px-16 lg:px-8'>
                            <h1 className='font-bold text-4xl mt-5 md:mt-0 mb-8'>{title}</h1>
                            <div className='w-full flex items-center justify-between text-white mb-5 xl:mb-8'>
                                <div className='flex items-center justify-center'>
                                    <span className='rounded-full bg-black h-7 w-7 flex items-center justify-center mr-1 cursor-pointer'><AiOutlineEye className='text-sm'/></span>
                                    234
                                    <span 
                                    onClick={clickHandler} 
                                    className='rounded-full bg-black h-7 w-7 flex items-center justify-center ml-2 mr-1 cursor-pointer'>
                                        <FiHeart className={show ? 'text-sm fill-red-600 stroke-red-600' : 'text-sm fill-transparent stroke-white'}/></span>
                                    125
                                </div>
                                <div className='flex items-center justify-center'>
                                    <span className='rounded-full bg-[#343444] h-7 w-7 flex items-center justify-center mr-2 cursor-pointer'><FiSend className='text-sm'/></span>
                                    <span className='rounded-full bg-[#343444] h-7 w-7 flex items-center justify-center cursor-pointer'><FiMoreVertical className='text-sm'/></span>
                                </div>
                            </div>
                            <div className='bg-[#343444] rounded-lg w-[190px] h-20 mb-10 flex items-center justify-center p-4'>
                                <span className='w-10 mr-3 ring-2 ring-[#5142fc] rounded-full'><img src={creatorImg} alt="avatar" /></span>
                                <div className='flex flex-col'>
                                    <span className='text-xs font-thin'>Created By</span>
                                    <span className='font-medium'>{creator}</span>
                                </div>
                            </div>
                            <p className='mb-10 text-stone-200 leading-9 text-center md:text-left'>{desc}</p>
                            <Link className='w-full flex font-medium items-center justify-center bg-[#5142fc] hover:bg-white hover:ring-2 hover:ring-[#5142fc] hover:text-[#5142fc] transition-all duration-300 rounded-full py-2' to='/wallet'><BsBasket className='mr-2'/>Place a Bid</Link>
                        </div>
                    </div>
                </div>
            </>
    );
};

export default NftDetails;