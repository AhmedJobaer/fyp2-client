import React from 'react';
import Banner from '../Banner/Banner';
import Borrow from '../Borrow/Borrow';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Borrow></Borrow>
        </div>
    );
};

export default Home;