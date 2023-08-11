import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import Services from './Services';

const sercivecart = [
    {
        id: 1,
        img: fluoride,
        title: "Fluoride Treatment",
        details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    },
    {
        id: 2,
        img: cavity,
        title: "Cavity Filling",
        details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    },
    {
        id: 3,
        img: whitening,
        title: "Teeth Whitening",
        details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    }
]

const Service = () => {
    return (

        <div className='mx-auto my-24 grid justify-center'>
            <h1 className='text-center text-2xl text-secondary'>OUR SERVICES</h1>
            <h6 className='text-center text-4xl'>Services We Provide</h6>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 '>
                {sercivecart.map(cart => <Services
                    key={cart.id}
                    cart={cart}
                ></Services>)}
            </div>


            <div className="hero  mt-36">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl"  alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;