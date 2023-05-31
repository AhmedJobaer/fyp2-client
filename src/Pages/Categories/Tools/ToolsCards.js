import React from 'react';

const ToolsCards = ({ card }) => {
    const { itemName, img, description } = card;
    return (
        <div>
            <div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl shadow-primary mb-10 ">
                    <figure><img className='h-40' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title ">{itemName}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions ml-4 ">
                            <button className="btn btn-primary text-white">See Details</button>
                            <button className="btn btn-primary text-white">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsCards;