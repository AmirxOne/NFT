import React from 'react';
//Components
import Routers from '../routes/Routers'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <Header/>
            <div>
                <Routers/>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;