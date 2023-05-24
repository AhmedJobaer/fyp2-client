import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);
    //const [data, setData] = useState("");

    const handelSignUp = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="hero  mb-12 mt-12 shadow-xl shadow-primary bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register / Sign UP Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className='lg:w-[400px] lg:mr-12'>
                        <form onSubmit={handleSubmit(handelSignUp)}>


                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Name</span></label>
                                <input type="Text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Email</span></label>
                                <input type="email" {...register("email", {
                                    required: "Email is required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Password</span></label>
                                <input type="password" {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters or longer" },
                                })}
                                    className="input input-bordered w-full max-w-xs" />
                                {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                            </div>
                            <input className='btn w-full mt-4 text-white btn-primary' value="Resister" type="submit" />
                        </form>
                        <p>Already have an account to <span className='text-green-500'>PIES</span>? <Link className='text-primary' to="/login"> Please Login</Link></p>
                        <div className="divider">OR</div>
                        <button className='w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;