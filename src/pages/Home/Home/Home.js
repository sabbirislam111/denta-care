import React from 'react';
import Hero from '../Hero/Hero';
import InfoCart from '../infoCart/InfoCart';
import Service from '../services/Service';
import ApoinmentSec from '../apoinmentSec/ApoinmentSec';
import Testimonial from '../testimonial/Testimonial';
import ContactUs from '../contactUs/ContactUs';


const Home = () => {
    return (
        <div className='mt-2 my-10'>
            <Hero></Hero>
            <InfoCart></InfoCart>
            <Service></Service>
            <ApoinmentSec></ApoinmentSec>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;