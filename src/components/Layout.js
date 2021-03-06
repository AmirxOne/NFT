import { Outlet } from 'react-router-dom';

import React from 'react';
//Components
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <div className='mt-[70px]'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;