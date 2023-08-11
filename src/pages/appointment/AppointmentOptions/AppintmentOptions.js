import React from 'react';

const AppintmentOptions = ({ options, setBookingModalOptions }) => {

    const {name, slots} = options;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-secondary">{name}</h2>
                    <p className='text-center'>{slots?.length > 0 ? slots[0]: <>Not Available</>}</p>
                    <p className='text-center'>{<>Available {slots.length > 1 ? "slots": "slot"} {slots.length}</>}</p>
                    <div className="card-actions justify-center">
                        <label disabled={slots.length ===  0} onClick={()=> setBookingModalOptions(options)}  htmlFor="booking-modal" className="btn btn-primary text-white">BOOK APPOINTMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppintmentOptions;