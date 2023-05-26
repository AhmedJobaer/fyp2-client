import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handelLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    return (
        <div>
            <div className="hero shadow-xl mx-auto mt-12 mb-12 shadow-primary bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className='lg:w-[400px] lg:mr-12'>
                        <form onSubmit={handleSubmit(handelLogin)}>


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
                                <label className="label"><span className="label-text">Forget Password?</span></label>
                            </div>
                            <input className='btn w-full text-white btn-primary' value="Login" type="submit" />
                            <div>
                                {loginError && <p className='text-red-500'>{loginError}</p>}
                            </div>
                        </form>
                        <p>New to <span className='text-green-500'>PIES</span>? <Link className='text-primary' to="/register"> Create a new Account</Link></p>
                        <div className="divider">OR</div>
                        <button className='w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;