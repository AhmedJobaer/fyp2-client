import React, { useEffect, useState } from 'react';
import BorrowCard from './BorrowCard';
//import clock from '../../../assets/icons/clock.svg'

const Borrow = () => {
    ;



    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    //console.log(items[10].owner.name);

    return (
        <div>
            <h1 className='text-center text-bold text-4xl mt-12 mb-6 font-lobster'>Available to Borrow</h1>
            <div className=' flex justify-center'>
                <input type="text" placeholder="Search Your Need Item" className="input input-bordered rounded-3xl mx-auto text-center input-primary w-1/2" />
            </div>

            <div className='grid place-items-center mt-10 md:grid-cols-3 lg:grid-cols-4'>
                {
                    items.map(item => <BorrowCard key={item._id}
                        item={item}></BorrowCard>)
                }
            </div>
        </div>
    );
};

export default Borrow;