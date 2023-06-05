import React from 'react';
import err from '../../assets/images/error.svg'
import { Link } from 'react-router-dom';

const Err = () => {
    return (
        <div>
            <img className='w-2/3  mt-32 mx-auto' src={err} alt="" />
            <div className=' flex justify-center'><button className='btn btn-lg   btn-primary text-white'><Link to='/'>Back to home</Link></button></div>
        </div>
    );
};

export default Err;