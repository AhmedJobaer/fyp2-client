import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import addP from '../../../assets/images/addPro.svg'
import { toast } from 'react-hot-toast';
const AskProduct = () => {


    const accessToken = localStorage.getItem('accessToken');
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const handelLogin = data => {
        console.log(data);
        askProduct(data.itemName, data.description, data.itemType, data.itemImg);
        reset();
    }


    const askProduct = (itemName, description, itemType, itemImg) => {
        const item = { itemName, description, itemType, itemImg };
        fetch('http://localhost:5000/api/askeditem/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'token': 'Bearer ' + accessToken
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log("askP", data);
                toast('You have Successfully added the product.');
                //setCreatedUserEmail(email);
            })
    }

    return (
        <div>
            <div>
                <h1 className="text-5xl font-lobster text-primary text-center mt-20 mb-2 font-bold">Ask Product!</h1>
                <div className="hero  mx-auto mt-12 mb-12 ">

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">

                            <img className='w-[500px]' src={addP} alt="" />
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className='lg:w-[400px] lg:mr-12  p-6 '>
                            <form onSubmit={handleSubmit(handelLogin)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Name</span></label>
                                    <input type="text" {...register("itemName", {
                                        required: "Name is required"
                                    })} className="input input-bordered w-full max-w-xs" />
                                    {errors.itemName && <p className='text-red-500'>{errors.itemName?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Description</span></label>
                                    <textarea type="text" {...register("description", {
                                        required: "Description is required",
                                        minLength: { value: 6, message: "Password must be 6 characters or longer" },
                                    })}
                                        className="input textarea textarea-primary h-28 input-bordered w-full max-w-xs" />
                                    {errors.description && <p className='text-red-500'>{errors.description?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Categories</span></label>
                                    <select type="text" {...register("itemType", {
                                        required: "Description is required"

                                    })} className="select select-primary w-full max-w-xs">
                                        <option value='book' selected>Book</option>
                                        <option value='tools'>Tools</option>
                                        <option value='homeAppliances'>Home Applieance</option>
                                        <option value='health'>Health</option>
                                        <option value='kitchen'>Kitchen</option>
                                        <option value='electronic'>Electronic</option>
                                    </select>
                                    {errors.itemType && <p className='text-red-500'>{errors.itemType?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Sample Image Link</span></label>
                                    <input type="text" {...register("itemImg", {
                                        required: "Link is required",
                                        minLength: { value: 2, message: "itemImg must be 2 digits" },
                                    })}
                                        className="input input-bordered w-full max-w-xs" />
                                    {errors.itemImg && <p className='text-red-500'>{errors.itemImg?.message}</p>}
                                </div>
                                <input className='btn w-[320px] text-white btn-primary mt-6' value="Submit" type="submit" />

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskProduct;