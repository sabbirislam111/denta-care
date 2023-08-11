import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';
import { Toaster, toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState(' ');
    const [loginUserEmail, setLoginUserEmail] = useState(' ');
    

    const { userLogIn } = useContext(AuthContext);
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

   

    console.log("EMAIL", loginUserEmail);


   

    const handelLogin = (value) => {
        setErrorMessage(' ')
        userLogIn(value.email, value.password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(userCredential)
                // setLoginUserEmail(user.email);
                getAccessToken(user.email)
                toast.success(`${user.email} Logged in Successfully`, { duration: "800" });

            })
            .catch(err => {
                setErrorMessage(err.message)
            });
    }


    const getAccessToken = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data.accessToken){
               localStorage.setItem('access_token', data.accessToken)
               navigate(from, { replace: true });
            }
        })
      }

   

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96'>
                <h1 className='text-4xl'>Log-in</h1>
                <form onSubmit={handleSubmit(handelLogin)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="Your Email" className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required" })} placeholder="Your Password" className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <div>
                        {errorMessage && <span className='text-red-600'>{errorMessage}</span>}
                    </div>
                    <h1 className='mt-2'>forgot password?</h1>


                    <button type="submit" className="btn btn-primary w-full my-2">Log in</button>

                    <div className='flex justify-center'><span>New to doctor portal </span> <span className='text-secondary mx-3'><Link to='/signup'> Create account</Link></span></div>
                    <div className="divider">OR</div>

                </form>
                <button className="btn btn-primary w-full">SIGNUP WITH GOOGLE</button>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default Login;