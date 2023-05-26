import React from 'react';
import BookCards from './BookCards';
import { useForm } from 'react-hook-form';

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

    const { register, formState: { errors }, handleSubmit } = useForm();
    const handelNeed = data => {
        console.log(data);
    }

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
                            <div className='lg:w-[400px] lg:mr-12'>
                                <form onSubmit={handleSubmit(handelNeed)}>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"><span className="label-text">Name</span></label>
                                        <input type="text" {...register("name", {
                                            required: "Name is required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                        {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"><span className="label-text">Writer Name</span></label>
                                        <input type="text" {...register("wName", {
                                            required: "Writer Name is required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                        {errors.wName && <p className='text-red-500'>{errors.wName?.message}</p>}
                                    </div>

                                    <input className='btn mt-4 w-full text-white btn-primary' value="Submit" type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;