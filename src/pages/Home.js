import React, { Fragment } from 'react';
// component
import HeroScreen from '../components/ui/HeroScreen';
import Trend from '../components/TrendNft/Trends';
import Cards from '../components/CardNft/Cards';
import AvatarCards from '../components/AvatarNft/AvatarCards';

const Home = () => {
    return (
        <Fragment>
            <HeroScreen />
            <Trend />
            <AvatarCards/>
            <Cards/>
        </Fragment>
    );
};

export default Home;