import React from 'react';

const BorrowCard = ({ card }) => {
    const { itemName, img, description } = card;
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl shadow-primary mb-10 ">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{itemName}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">BOOK NOW</button>
                </div>
            </div>
        </div>
    );
};

export default BorrowCard;