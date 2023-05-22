import React from 'react';
import ToolsCards from './ToolsCards';

const Tools = () => {

    const cardData = [
        {
            id: 1,
            itemName: 'Tool 1',
            ownerName: "Asif Ahmed",
            img: "https://c8.alamy.com/comp/H6RCW2/blue-office-tool-object-single-isolated-household-closeup-steel-metal-H6RCW2.jpg",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 2,
            itemName: 'Tool 2',
            ownerName: "Asif Ahmed",
            img: "https://static2.bigstockphoto.com/2/6/3/large1500/362688394.jpg",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 3,
            itemName: 'Tool 3',
            ownerName: "Asif Ahmed",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbGcy7VKiN2ygwWfupIQU-DmMd-E8Cb-IDA&usqp=CAU",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 4,
            itemName: 'Tool 4',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 5,
            itemName: 'Tool 5',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 6,
            itemName: 'Tool 6',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 7,
            itemName: 'Tool 7',
            ownerName: "Asif Ahmed",
            img: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649362057509-S1N5PDXY4FATUM00903T/SKS08671.jpg?format=1000w",
            description: "We highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App."
        },
        {
            id: 8,
            itemName: 'Tool 8',
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
                        cardData.map(card => <ToolsCards
                            key={card.id}
                            card={card}></ToolsCards>)
                    }
                </div>
                <div>
                    <h1 className='text-center text-bold text-2xl mt-12 mb-4'>Tell us your desire book!!</h1>
                    <div className="hero mb-12 bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Tell us your desire Tools!!</h1>
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
    );
};

export default Tools;