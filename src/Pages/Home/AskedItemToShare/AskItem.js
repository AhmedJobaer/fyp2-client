import React, { useEffect, useState } from 'react';
import ReqCard from './ReqCard';

const AskItem = () => {


    const [reqItems, setReqItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/askeditem')
            .then(res => res.json())
            .then(data => setReqItems(data))
    }, [])


    console.log(reqItems);

    return (
        <div className=' bg-lime-50 mb-8 rounded-lg pt-8 pb-8 '>
            <h1 className='text-center font-extrabold text-6xl mt-24 mb-6 font-lobster'>Requested Items</h1>
            <div className=' flex justify-center'>
                <input type="text" placeholder="Search Your Need Item" className="input mb-12 input-bordered rounded-3xl mx-auto text-center input-primary w-1/2" />
            </div>

            <div className='grid place-items-center ml-6 mb-14 mt-10 md:grid-cols-3 lg:grid-cols-4'>
                {
                    reqItems.map(item => <ReqCard
                        key={item._id}
                        item={item}
                    >

                    </ReqCard>)
                }
            </div>
        </div>
    );
};

export default AskItem;