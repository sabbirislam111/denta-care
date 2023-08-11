import { format } from 'date-fns';
import React, { useContext, useEffect } from 'react';
import DateSelect from '../DateSelect/DateSelect';
import { AuthContext } from '../../../context/Authprovider';
import { Toaster, toast } from 'react-hot-toast';

const BookingModal = ({ bookingModalOptions, selectedDate, setBookingModalOptions, refetch }) => {
    const { name, slots } = bookingModalOptions;
    const date = format(selectedDate, "PP");
    const { user } = useContext(AuthContext);


    const handelBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slotDate = form.slotedate.value;
        const slot = form.slot.value;
        const username = form.name.value;
        const email = form.email.value;
        const number = form.number.value;

        const Booking = {
            service: name,
            username,
            email,
            number,
            slot,
            slotDate
        }
        console.log(Booking);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(Booking)
        })
            .then(res => res.json())
            .then(data => {
                setBookingModalOptions(null)

                if (data.acknowledged) {
                    const confirm = window.confirm('Are you sure you want to')
                    if (confirm) {
                        toast.success("Booking confirmed")
                        refetch()
                    }

                }
                else {
                    toast.error(data.message)
                }

            })



    }




    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className='my-5'>
                        <form onSubmit={handelBooking}>
                            <input type="text" name="slotedate" value={date} disabled className="input input-bordered input-primary w-full " /><br /><br />
                            <select name='slot' className="select select-primary w-full ">
                                {
                                    slots.map(options => <DateSelect
                                        option={options}
                                    ></DateSelect>)
                                }
                            </select><br /><br />
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered input-primary w-full " /><br /><br />
                            <input type="email" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered input-primary w-full " /><br /><br />
                            <input type="number" name='number' placeholder="Phone Number" className="input input-bordered input-primary w-full " /><br /><br />
                            <button type='submit' className='w-full btn btn-primary input-bordered'>SUBMIT</button>

                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;