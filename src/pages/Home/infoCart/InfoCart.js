import React from 'react';
import Infocarts from './Infocarts';

import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoCart = () => {

    const cartsDetails = [
        {
            id: 1,
            title: 'Opening Hours',
            description: "Lorem Ipsum is simply dummy text of the pri",
            img: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            title: 'Visit our location',
            description: "Brooklyn, NY 10036, United States",
            img: marker,
            bgClass: 'bg-secondary'

        },
        {
            id: 3,
            title: 'Contact us now',
            description: "+000 123 456789",
            img: phone,
            bgClass: 'bg-primary'
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-6 my-10'>
           {cartsDetails.map( cart => <Infocarts
            key={cart.id}
            cart={cart}
           ></Infocarts>)}
        </div>
    );
};

export default InfoCart;