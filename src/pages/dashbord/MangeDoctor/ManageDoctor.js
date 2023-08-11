import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import DeletingModal from '../DeletingModal/DeletingModal';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors');
            const data = await res.json();
            return data;
        }
    })


    const handelDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/doctors/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.deletedCount);
                if (data.deletedCount === 1) {
                    refetch()
                    toast.success("Doctors deleted successfully")
                }
            })
    }

    if (isLoading) {
        <h1>Loading...</h1>
    }

    return (
        <div className='w-full'>
            <h1 className='text-2xl'>MyAppointment</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>specialty</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            doctors.map(doctor => <tr key={doctor._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{doctor.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {doctor.specialty}
                                    <br />

                                </td>
                                <td>{doctor.email}</td>
                                <th>
                                    <label onClick={()=> setDeletingDoctor(doctor)} htmlFor="my_modal_6" className="btn">Delete Doctor</label>

                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Confirm!</h3>
                                            <p className="py-4">Are you sure you want to delete {doctor.name}</p>
                                            <div className="modal-action">
                                            <button className='btn' onClick={()=>handelDelete(doctor._id)}>Yes</button>
                                                <label htmlFor="my_modal_6" className="btn">No</label>
                                                
                                            </div>
                                        </div>
                                    </div>


                                </th>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>specialty</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </tfoot>

                </table>

            </div>

                <Toaster></Toaster>
        </div>
    );
};

export default ManageDoctor; 