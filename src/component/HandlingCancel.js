

import React, { useContext } from 'react';
import { AuthContext } from '../context/Authprovider';
import { useQuery } from 'react-query';

const HandlingCancel = (props) => {
    const {id} = props;
    const { user, cancel, setCancel } = useContext(AuthContext);

    console.log(cancel.split(' ')[1]);
    // Define the showModal function
    const showModal = () => {
        const modal = document.getElementById('my_modal_3');
        modal.showModal();
    };


    // const { data: allBookings = [], refetch } = useQuery({
    //     queryKey: ['bookings'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/allbookings`)
    //         const data = await res.json();
    //         return data;
    //     }
    // })


    const cancelAppointment = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, { 
            method: 'DELETE' 
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    // alert("user delete successfully")
                    // const remainingUser =  allBookings.filter(content => content._id !== id._id)
                    // refetch();
                    // return remainingUser;
                    
                }
            })
    }



    return (
        <div>
            <button onClick={showModal}>Cancel</button>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg text-warning">Are you Sure!</h3>
                    <p className="py-4">Do you want to Cancel your Appointment?</p>
                    <button onClick={() => cancelAppointment(id)} className='btn mr-3 btn-success'>Yes</button>
                    <button  className='btn btn-warning'>No</button>
                </form>
            </dialog>
        </div>
    );
};

export default HandlingCancel;