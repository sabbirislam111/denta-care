import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/Authprovider';
import { useQuery } from 'react-query';
import { FaEllipsisVertical } from "react-icons/fa6";
import HandlingCancel from '../../../component/HandlingCancel';


const MyAppointment = () => {

    const { user } = useContext(AuthContext);

    // const url = `http://localhost:5000/bookings?email=${user.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access_token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })






    // const [openOptions, setOpenOptions] = useState(false)
    const handelReschedule = () => {
        console.log("rescheduling")

    }

    const [cancelId, setCancelId] = useState('')
    const handelCancel = (id) => {
        setCancelId(id)
    }



    


    return (
        <div className='w-full'>
            <h1 className='text-2xl'>MyAppointment</h1>
            <div className="">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings && bookings.map((booking, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{booking.username}</td>
                                <td>{booking.service}</td>
                                <td>{booking.slotDate}</td>
                                <td>{booking.slot}</td>
                                <td>


                                    <div className="dropdown">
                                        <label tabIndex={0} className="btn m-1">
                                            <FaEllipsisVertical />
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-26">
                                            <li onClick={handelReschedule} className='hover:bg-warning rounded '><a className='hover:text-white'>Reschedule</a></li>
                                            <li onClick={()=>handelCancel(booking._id)} className='hover:bg-[#ef4444] rounded '><a>
                                                    <HandlingCancel
                                                        id={cancelId}
                                                    />
                                                </a></li>
                                        </ul>
                                    </div>



                                </td>
                            </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;



