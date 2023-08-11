import React from 'react';

const Services = ({cart}) => {
    const {img, title, details} = cart
    return (
        <div className="card card-compact w-96 bg-base-100 flex shadow-xl p-8">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body text-center">
            <h2 className="card-title justify-center">{title}</h2>
            <p >{details}</p>
        </div>
    </div>
    );
};

export default Services;