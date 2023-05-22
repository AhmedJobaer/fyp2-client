import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div>
            <div className="hero shadow-xl mx-auto mt-12 mb-12 shadow-primary bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className='lg:w-[400px] lg:mr-12'>
                        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>


                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Email</span></label>
                                <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Password</span></label>
                                <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                                <label className="label"><span className="label-text">Forget Password?</span></label>
                            </div>
                            <input className='btn w-full text-white btn-primary' value="Login" type="submit" />
                        </form>
                        <p>New to <span className='text-green-500'>PIES</span>? <Link className='text-primary' to="/register"> Create a new Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;