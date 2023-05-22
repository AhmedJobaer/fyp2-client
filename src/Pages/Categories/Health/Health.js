import React from 'react';
import HealthCard from './HealthCard';

const Health = () => {


    const cardData = [
        {
            id: 1,
            itemName: 'Mercury Thermometer',
            ownerName: "Asif Ahmed",
            img: "https://www.shutterstock.com/image-vector/mercury-thermometer-scale-home-equipment-260nw-1327272743.jpg",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 2,
            itemName: 'Blood Pressure Monitor',
            ownerName: "Asif Ahmed",
            img: "https://kinsmedic.com.my/wp-content/uploads/2021/02/BEURER-BM40-Blood-Pressure-Monitor.jpg",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 3,
            itemName: 'Glucometers',
            ownerName: "Asif Ahmed",
            img: "https://www.verywellhealth.com/thmb/JhRw4wLSrHK0LWzG9PJLdLox1jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VW-Health-v1-The-7-Best-Glucometers-of-2021-4686590-recirc-c1abf3dd8c3a41c59c66be1cdcfa7c9f.jpg",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 4,
            itemName: 'Book 1',
            ownerName: "Asif Ahmed",
            img: "https://i2.wp.com/www.beyondborders254.com/wp-content/uploads/2019/01/Medical-tools.jpg?fit=1023%2C683&ssl=1",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 5,
            itemName: 'Fast Aid box',
            ownerName: "Asif Ahmed",
            img: "https://medicalcallservice.com/wp-content/uploads/2019/11/Doctor-Office-Supplies.jpg",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 6,
            itemName: 'Book 1',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 7,
            itemName: 'Book 1',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 8,
            itemName: 'Book 1',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
    ]

    return (
        <div>
            <div>
                <div>
                    <h1 className='text-center text-bold text-2xl mt-12 mb-4'>Available BOOK to Borrow</h1>
                    <input type="text" placeholder="Search Your Need Item" className="input input-bordered mx-auto text-center input-primary w-1/2" />

                    <div className='grid mt-10 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            cardData.map(card => <HealthCard
                                key={card.id}
                                card={card}
                            ></HealthCard>)
                        }
                    </div>
                    <div>
                        <h1 className='text-center text-bold text-2xl mt-12 mb-4'>Tell us your desire health item!!</h1>
                        <div className="hero mb-12 bg-base-200">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Tell us your health item!!</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="Book Name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Description</span>
                                            </label>
                                            <input type="text" placeholder="Description" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Sample Image</span>
                                            </label>
                                            <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Health;