import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import login from '../../assets/images/Lion2.svg';

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);



    const [signUpError, setSignUPError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';




    const handelSignUp = data => {


        console.log(data);


        setSignUPError('');



        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                toast('Congratulation!! You receive 500 GDR points.')
                navigate(from, { replace: true });


                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        console.log(data);
                        saveUser(data.name, data.email, data.password);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }



    const saveUser = (name, email, password) => {
        const user = { name, email, password };
        console.log(user);
        fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log("save user", data);
                //setCreatedUserEmail(email);
            })
    }





    return (

        <div>

            <h1 className="text-5xl font-lobster text-primary text-center mt-20 mb-2 font-bold">Sign Up!</h1>
            <div className="hero shadow-xl mx-auto mt-12 mb-12 shadow-primary">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="text-center lg:text-left">
                        <div className="text-center lg:text-left">

                            <img className='w-[500px]' src={login} alt="" />
                        </div>
                    </div>



                    <div className='lg:w-[400px] lg:mr-12 border-8 border-solid border- p-6 border-primary'>
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
                            {/* <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Type Address</span></label>
                                <input type="text" {...register("address1", {
                                    required: "address is required",
                                    minLength: { value: 2, message: "address must be 6 characters or longer" },
                                })}
                                    className="input input-bordered w-full max-w-xs" />
                                {errors.address1 && <p className='text-red-500'>{errors.address?.message1}</p>}
                            </div> */}


                            <input className='btn w-full mt-4 text-white btn-primary' value="Resister" type="submit" />
                            {signUpError && <p className='text-red-500'>{signUpError}</p>}
                        </form>
                        <p>Already have an account to <span className='text-green-500'>PIES</span>? <Link className='text-primary' to="/login"> Please Login</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;