import React from 'react';
import { Link } from 'react-router-dom';

const BookCards = ({ itm }) => {

    const { id, itemName, itemImg, gdr, owner, description } = itm;

    return (
        <div className="card card-compact w-72 bg-base-100 shadow-md shadow-primary mb-10 ">
            <figure><img className='h-40 w-fit rounded-lg' src={itemImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-serif justify-center">{itemName}</h2>
                <h2 className='card-title mt-[-10px] text-sm justify-center font-serif text-green-500'>GDR: {gdr}</h2>
                <div className='flex items-center mb-2 justify-center'>
                    <div className="avatar mr-4">
                        <div className="w-14 rounded-full">
                            <img src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png" alt='' />
                        </div>
                    </div>
                    <div >
                        <h2 className='font-thin font-lobster text-xl'>{owner?.name}</h2>
                        <div class="rating w-20">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn font-serif btn-sm btn-primary text-white"><Link to='/card-details'>Book NoW</Link></button>
                    <button className="btn font-serif  btn-sm btn-primary text-white"><Link to='/card-details'>See Detail</Link></button>
                </div>
            </div>
        </div>
    );
};

export default BookCards;