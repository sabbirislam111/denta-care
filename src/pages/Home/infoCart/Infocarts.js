import React from 'react';

const Infocarts = ({cart}) => {

    const {id, title, description, img, bgClass} = cart

    return (
        <div className={`card card-side bg-base-100 shadow-xl ${bgClass} text-white px-3`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Infocarts;