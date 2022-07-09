import React from 'react';
//components
import Poster from '../components/Poster';


const Contact = () => {
    return (
        <div>
            <Poster/>
            <div className='w-full flex flex-col items-center justify-center text-white'>
                <h1 className='px-4 font-semibold text-4xl mb-10'>Drop a Message</h1>
                <p className='px-2 s:px-10 lg:px-80 text-lg text-center text-stone-300 leading-10 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum aperiam cumque fugit suscipit animi natus nostrum voluptatem iste quam!</p>
            </div>
            <form className='  md:w-[636px] flex flex-col mx-auto px-4' action="">
                    <div className='flex flex-col mb-5'>
                        <input 
                            spellCheck={false} 
                            className='text-white outline-0 bg-transparent border-[1px] border-[#727272] rounded-md text-sm p-2 w-full' 
                            placeholder='Enter Your Name' 
                            type='text' />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <input 
                            spellCheck={false} 
                            className='text-white outline-0 bg-transparent border border-[#727272] rounded-md text-sm p-2 w-full' 
                            placeholder='Enter Your Email' 
                            type={'text'}/>
                    </div>
                    <div className='flex flex-col mb-5'>
                        <input 
                            spellCheck={false} 
                            className='text-white outline-0 bg-transparent border border-[#727272] rounded-md text-sm p-2 w-full' 
                            placeholder='Enter Subject' 
                            type={'text'}/>
                    </div>
                    <div className='flex flex-col mb-5'>
                        <textarea 
                            spellCheck={false} 
                            className='text-white outline-0 bg-transparent border border-[#727272] rounded-md text-sm p-2 w-full min-h-[250px]' 
                            placeholder='Write Message'>
                        </textarea>
                    </div>
                    <button className='mx-auto mt-5 px-5 py-2 bg-stone-100 rounded-md w-44'>Send a Message</button>
            </form>
        </div>
    );
};

export default Contact;