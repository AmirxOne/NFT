import React from 'react';
//react router dom
import { Route, Routes, Navigate } from 'react-router-dom'
// Components
import Layout from '../components/Layout';
import Contact from '../pages/Contact';
import Create from '../pages/Create';
import EditProfile from '../pages/EditProfile';
import Home from '../pages/Home';
import Market from '../pages/Market';
import NftDetails from '../pages/NftDetails';
import SellerProfile from '../pages/SellerProfile';
import Wallet from '../pages/Wallet';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                {/* <Route path='/' element={<Navigate to="/home" />} /> */}
                <Route index element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/create' element={<Create />} />
                <Route path='/edit-profile' element={<EditProfile />} />
                <Route path='/market' element={<Market />} />
                <Route path='/seller-profile' element={<SellerProfile />} />
                <Route path='/wallet' element={<Wallet />} />
                <Route path='/market/:id' element={<NftDetails />} />
            </Route>
        </Routes>
    );
};

export default Routers;