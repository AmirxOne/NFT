import React from 'react';
//component
import Card from './Card';

const data = [
    {
        id:1,
        title:"Lorem ipsum dolor sit amet.",
        dis:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eligendi incidunt dolores itaque possimus mollitia natus numquam veniam laborum aut?",
        url:"AiOutlineWallet"
    },
    {
        id:2,
        title:"Lorem ipsum dolor sit amet.",
        dis:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eligendi incidunt dolores itaque possimus mollitia natus numquam veniam laborum aut?",
        url:"logo"
    },
    {
        id:3,
        title:"Lorem ipsum dolor sit amet.",
        dis:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eligendi incidunt dolores itaque possimus mollitia natus numquam veniam laborum aut?",
        url:"logo"
    },
    {
        id:4,
        title:"Lorem ipsum dolor sit amet.",
        dis:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eligendi incidunt dolores itaque possimus mollitia natus numquam veniam laborum aut?",
        url:"logo"
    },
]

const Cards = () => {
    return (
        <div className='w-full h-auto mb-10'>
            <div className='max-w-[640px] md:max-w-[900px] lg:max-w-[1024px] xl:max-w-[1320px] mx-auto h-full grid grid-cols-12 sm:gap-7 px-4'>
                {
                    data.map(item => <Card key={item.id} data={item}/>)
                }
            </div>
        </div>
    );
};

export default Cards;