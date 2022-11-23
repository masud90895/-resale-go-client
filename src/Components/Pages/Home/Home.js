import React from 'react';
import Advertised from './Advertised';
import Banner from './Banner';
import Review from './Review';
import SecentHandProduct from './SecentHandProduct';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertised/>
            <SecentHandProduct/>
            <Review/>
        </div>
    );
};

export default Home;