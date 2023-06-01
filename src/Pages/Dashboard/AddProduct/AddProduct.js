import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import addP from '../../../assets/images/addPro.svg'

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handelLogin = data => {
        console.log(data);

    }

    return (
        <div>
            <div>
                <h1 className="text-5xl font-lobster text-primary text-center mt-20 mb-2 font-bold">Add Product!</h1>
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
                                    <input type="text" {...register("name", {
                                        required: "Name is required"
                                    })} className="input input-bordered w-full max-w-xs" />
                                    {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
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
                                    <select type="text" {...register("categories", {
                                        required: "Categories is required"

                                    })} className="select select-primary w-full max-w-xs">
                                        <option disabled selected>Book</option>
                                        <option>Tools</option>
                                        <option>Home Applieance</option>
                                        <option>Health</option>
                                        <option>Kitchen</option>
                                        <option>Electronic</option>
                                    </select>
                                    {errors.categories && <p className='text-red-500'>{errors.categories?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">GDR</span></label>
                                    <input type="text" {...register("gdr", {
                                        required: "GDR point is required",
                                        minLength: { value: 2, message: "GDR must be 2 digits" },
                                    })}
                                        className="input input-bordered w-full max-w-xs" />
                                    {errors.gdr && <p className='text-red-500'>{errors.gdr?.message}</p>}
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

export default AddProduct;