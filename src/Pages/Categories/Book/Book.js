import React from 'react';
import BookCards from './BookCards';

const Book = () => {

    const cardData = [
        {
            id: 1,
            itemName: 'Book 1',
            ownerName: "Asif Ahmed",
            img: "https://realtoughcandy.com/wp-content/uploads/2021/03/introduction-to-computer-science-books-cover.jpg",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 2,
            itemName: 'Python Programming',
            ownerName: "Asif Ahmed",
            img: "https://images-na.ssl-images-amazon.com/images/I/41VkICdTF5L.jpg",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 3,
            itemName: 'C++ Programming',
            ownerName: "Asif Ahmed",
            img: "https://cf.shopee.com.my/file/d57b5420676cc7420269335dfddbfacd",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 4,
            itemName: 'Book 1',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 5,
            itemName: 'Book 1',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
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
                <h1 className='text-center text-bold text-2xl mt-12 mb-4'>Available BOOK to Borrow</h1>
                <input type="text" placeholder="Search Your Need Item" className="input input-bordered mx-auto text-center input-primary w-1/2" />

                <div className='grid mt-10 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        cardData.map(card => <BookCards
                            key={card.id}
                            card={card}
                        ></BookCards>)
                    }
                </div>
                <div>
                    <h1 className='text-center text-bold text-2xl mt-12 mb-4'>Tell us your desire book!!</h1>
                    <div className="hero mb-12 bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Tell us your desire book!!</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Book Name</span>
                                        </label>
                                        <input type="text" placeholder="Book Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Writer Name</span>
                                        </label>
                                        <input type="text" placeholder="Writer Name" className="input input-bordered" />
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
    );
};

export default Book;