import React from 'react';
import Banner from '../Banner/Banner';
import Borrow from '../Borrow/Borrow';
import Banner2 from '../Banner2/Banner2';
import AskItem from '../AskedItemToShare/AskItem';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner2></Banner2>
            {/* <Banner></Banner> */}
            <Borrow></Borrow>
            <AskItem></AskItem>
        </div>
    );
};

export default Home;