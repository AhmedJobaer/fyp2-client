import React from 'react';
import { Link } from 'react-router-dom';

const BookCards = ({ card }) => {

    const { id, itemName, img, description } = card;

    return (
        <div>
            <div className="card card-compact w-72 bg-base-100 shadow-xl shadow-primary mb-10 ">
                <figure><img className='h-40' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">{itemName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white"><Link to='/card-details'>See Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCards;