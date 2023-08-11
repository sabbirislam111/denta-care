import React from 'react';




const Testimonials = ({ reviws }) => {
    const { name, title, location, img, details } = reviws;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-24">
            <div className="card-body">
                <p>{details}</p>
                <div className="card-actions flex items-center mt-3">
                    <div>
                        <img className=' border-2 border-secondary rounded-full' src={img} alt=''></img>
                    </div>
                    <div>
                         <h2 className="card-title">{name}</h2>
                         <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;