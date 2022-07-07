import React, { Fragment } from 'react';
// component
import HeroScreen from '../components/ui/HeroScreen';
import Trend from '../components/TrendNft/Trends';
import Cards from '../components/CardNft/Cards';

const Home = () => {
    return (
        <Fragment>
            <HeroScreen />
            <Trend />
            <Cards/>
        </Fragment>
    );
};

export default Home;