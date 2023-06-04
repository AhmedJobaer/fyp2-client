import React, { useContext, useEffect, useState } from 'react';
import BookCards from './BookCards';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Book = () => {

    const { user, logOut } = useContext(AuthContext);
    const itms = useLoaderData();
    console.log(itms[0].itemType);

    const e = user?.email;
    console.log(e);
    console.log(itms);

    const sortedData = itms.filter((item) => item.owner.email !== e);
    //console.log("sort    ", sortedData);

    return (
        <div>
            <div>
                <h1 className='text-center text-bold text-4xl mt-12 mb-6 font-lobster'>Available {itms[0].itemType} to Borrow</h1>
                <div className=' flex justify-center'>
                    <input type="text" placeholder="Search Your Need Item" className="input input-bordered rounded-3xl mx-auto text-center input-primary w-1/2" />
                </div>

                <div className='grid  place-items-center mt-10 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        sortedData.map(itm => <BookCards
                            key={itm._id}
                            itm={itm}
                        ></BookCards>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Book;