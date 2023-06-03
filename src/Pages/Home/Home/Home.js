import React from 'react';
import Banner from '../Banner/Banner';
import Borrow from '../Borrow/Borrow';
import Banner2 from '../Banner2/Banner2';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner2></Banner2>
            {/* <Banner></Banner> */}
            <Borrow></Borrow>
        </div>
    );
};

export default Home;