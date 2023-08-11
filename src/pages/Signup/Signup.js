import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { register , formState: { errors } , handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const {createUser, setUserName} = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    // console.log("ToKeN", token)

 

    const handelSignup = (data) =>{
        console.log(data)
        createUser(data.email, data.password)
        .then(userCredential=> {
            const user = userCredential.user;

               
                const userInfo = {
                    displayName : user.name
                }
                setUserName(userInfo)
                .then(()=> {
                    saveUser(data.name, data.email);
                })
                .catch(err => console.error(err))
               
                
            
        })
        .catch(error => {
            setErrorMessage(error.message)
        })
    }




    const saveUser = (name, email) => {
        const user = {name, email}
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            // setCreatedUserEmail(email);
            getAccessToken(email);
           
        })
    }

   const getAccessToken = (email) => {
     fetch(`http://localhost:5000/jwt?email=${email}`)
     .then(res => res.json())
     .then(data => {
         if(data.accessToken){
            localStorage.setItem('access_token', data.accessToken)
            navigate('/')
         }
     })
   }
   
   if(token){
     navigate('/')
   }

    return (
        <div>
              <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96'>
                <h1 className='text-4xl'>signup</h1>
                <form onSubmit={handleSubmit(handelSignup)}>


                <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name",  { required: "Name is required" })} placeholder="Your Name" className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",  { required: "Email Address is required" })} placeholder="Your Email" className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        {errorMessage && <p className='text-red-600' >{errorMessage}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: {value: 6, message: "Password should be min 6 characters"}})} placeholder="Password" className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>

                    <button type="submit"  className="btn btn-primary w-full my-2">Sign up</button>
                    
                    <div className='flex justify-center'><span>Already have an account </span> <span className='text-secondary mx-3'><Link to='/login'> Please login</Link></span></div>
                    <div className="divider">OR</div>
                   
                </form>
                <button  className="btn btn-primary w-full">SIGNUP WITH GOOGLE</button>
            </div>
        </div>
        </div>
    );
};

export default Signup;