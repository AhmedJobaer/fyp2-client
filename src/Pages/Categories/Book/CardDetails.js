import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {

    const item = useLoaderData();
    console.log(item);

    const { owner } = item;

    return (
        <div>
            <div className="hero mt-4 mb-4 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" flex-shrink-0 w-1/2 text-bold ">
                        <div className='text-1xl '>
                            <h2>Name: {item?.itemName}</h2>
                            <h2>Location: Mahallah Zubiar</h2>
                            <h2>GDR: {item?.gdr}</h2>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-primary  text-white mt-4">Book Now</button>
                            <button className="btn btn-primary  text-white mt-4">Contact Owner</button>
                        </div>
                        <div className="divider"></div>
                        <div className='flex'>
                            <div className="avatar mr-4">
                                <div className="w-14 rounded-full">
                                    <img src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png" alt='' />
                                </div>
                            </div>
                            <div>
                                <h2>{owner?.name}</h2>
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal">OR</div>
                    <div className="mr-15"  >
                        <img src={item?.itemImg} alt=''></img>
                    </div>

                </div>
            </div>

            <div className='ml-16 mb-5'>
                <h2 className='text-2xl text-primary'>Description</h2>
                <div className="divider w-32 text-lime-600 mt-[-5px]"></div>
                <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias pariatur quasi, est a ex exercitationem? Ipsam cupiditate id ab eaque iste quibusdam doloremque blanditiis vero, libero inventore vitae? Nihil, rerum?</p>
            </div>

        </div>
    );
};

export default CardDetails;