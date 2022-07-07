import React, { Fragment } from 'react';
// component
import HeroScreen from '../components/ui/HeroScreen';
import Trend from '../components/TrendNft/Trend';

const Home = () => {
    return (
        <Fragment>
            <HeroScreen />
            <Trend />
        </Fragment>
    );
};

export default Home;