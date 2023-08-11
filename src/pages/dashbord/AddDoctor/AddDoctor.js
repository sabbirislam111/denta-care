import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState(' ');
    const imageHostingKey = process.env.REACT_APP_Imagebb_key;

    const {data: specialties=[], isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
           const res = await fetch('http://localhost:5000/appointmentbookingspecialty');
           const data = res.json();
           return data;
        }
    })



    if(isLoading){
        return <h1>Loading...</h1>
    }

    const handelAddDoctor = (value) => {
        // console.log(value.image)
        const imageFile = value.image[0]
        const formData = new FormData()
        formData.append("image", imageFile)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageData => {
            if(imageData.success){
                console.log(imageData.data.url)
                const doctor = {
                    name: value.name,
                    email: value.email,
                    specialty: value.specialties,
                    image: imageData.data.url
                }
                // save doctor information in database
                fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization:`bearer ${localStorage.getItem('access_token')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result => {
                    if(result.message !== "Doctor all ready exist"){
                       return toast.success(`${doctor.name} add successfully`)
                    }
                    console.log(result.message)
                    
                    return toast.error(`${doctor.name} id all ready exist`)
                })
                
            }
        })

    }



    return (
        <div>
          
            <div className='w-96'>
                <h1 className='text-4xl'>Add a doctor</h1>
                <form onSubmit={handleSubmit(handelAddDoctor)}>

                <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Doctor Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is Required" })} placeholder="Enter Doctor Name" className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="Your Email" className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">specialties</span>
                        </label>
                        <select type="select"  {...register("specialties", { required: "specialties is required" })} className="input input-bordered w-full ">  
                        <option disabled selected>Please Select</option>
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }  
                        </select>
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Upload Photo</span>
                        </label>
                        <input type="file" {...register("image", { required: "image is required" })} className="file-input file-input-bordered w-full" />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>

                    <div>
                        {errorMessage && <span className='text-red-600'>{errorMessage}</span>}
                    </div>
    
                    <button type="submit" className="btn btn-primary w-full my-2">Add Doctor</button>

                    
                    

                </form>
                
               
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default AddDoctor;