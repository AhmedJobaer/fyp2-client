import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import addP from '../../../assets/images/addPro.svg'
import { AuthContext } from '../../../context/AuthProvider';

const AddProduct = () => {


    const accessToken = localStorage.getItem('accessToken')
    console.log(accessToken);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token, setToken] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user.email);

    const handelLogin = data => {
        console.log(data);
        addProduct(data.itemName, data.description, data.itemType, data.gdr, data.itemImg);

    }

    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2EwNDY2NjQ5N2NkNTgwMDgzZmVhZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODU3MjE4MTIsImV4cCI6MTY4NTk4MTAxMn0.St741pX_3Kou7M1vKhNS5_4epUqyTz3jCnFV6-6wtjs

    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2EwNDY2NjQ5N2NkNTgwMDgzZmVhZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODU3MzE5OTAsImV4cCI6MTY4NTk5MTE5MH0.wgdHrY_Akcm3fQ-cNO-IS0oB-bC4VGnCnWiTfISlCJI




    // useEffect(() => {
    //     fetch(`http://localhost:5000/api/auth/jwt?email=${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setToken(data))
    // }, [])


    const addProduct = (itemName, description, itemType, gdr, itemImg) => {
        const item = { itemName, description, itemType, gdr, itemImg };
        fetch('http://localhost:5000/api/items/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'token': 'Bearer ' + accessToken
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log("addP", data);
                toast('You have Successfully added the product.')
                //setCreatedUserEmail(email);
            })
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
                                        required: "Categories is required"

                                    })} className="select select-primary w-full max-w-xs">
                                        <option disabled selected value='book'>Book</option>
                                        <option value='tools'>Tools</option>
                                        <option value='homeAppliances'>Home Appliance</option>
                                        <option value='health'>Health</option>
                                        <option value='kitchen'>Kitchen</option>
                                        <option value='electronic'>Electronic</option>
                                        <option value='food'>Food</option>
                                    </select>
                                    {errors.itemType && <p className='text-red-500'>{errors.itemType?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">GDR</span></label>
                                    <input type="number" {...register("gdr", {
                                        required: "GDR point is required",
                                        minLength: { value: 2, message: "GDR must be 2 digits" },
                                    })}
                                        className="input input-bordered w-full max-w-xs" />
                                    {errors.gdr && <p className='text-red-500'>{errors.gdr?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"><span className="label-text">Image Link</span></label>
                                    <input type="text" {...register("itemImg", {
                                        required: "Image Link is required",
                                        minLength: { value: 2, message: "GDR must be 2 digits" },
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

export default AddProduct;