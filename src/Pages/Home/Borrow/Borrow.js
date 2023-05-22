import React from 'react';
import BorrowCard from './BorrowCard';
//import clock from '../../../assets/icons/clock.svg'

const Borrow = () => {

    const cardData = [
        {
            id: 1,
            itemName: 'Shoe',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 2,
            itemName: 'Shoe',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 3,
            itemName: 'Shoe',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 4,
            itemName: 'Shoe',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 5,
            itemName: 'Shoe',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 6,
            itemName: 'Shoe',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 7,
            itemName: 'Shoe',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 8,
            itemName: 'Shoe',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
    ]

    return (
        <div>
            <h1 className='text-center text-bold text-2xl mt-12 mb-4'>Available to Borrow</h1>
            <input type="text" placeholder="Search Your Need Item" className="input input-bordered mx-auto text-center input-primary w-1/2" />

            <div className='grid mt-10 md:grid-cols-3 lg:grid-cols-4'>
                {
                    cardData.map(card => <BorrowCard key={card.id}
                        card={card}></BorrowCard>)
                }
            </div>
        </div>
    );
};

export default Borrow;