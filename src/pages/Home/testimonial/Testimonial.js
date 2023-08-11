import React from 'react';
import Testimonials from './Testimonials';
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'


const reviews = [
    {
        id: 1,
        name: 'John Doe',
        title: 'A dog',
        location: 'New York',
        img: person1,
        details : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
    },
    {
        id: 2,
        name: 'John Doe',
        title: 'A dog',
        location: 'New York',
        img: person2,
        details : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
    },
    {
        id: 3,
        name: 'John Doe',
        title: 'A dog',
        location: 'New York',
        img: person3,
        details : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
    }
]


const Testimonial = () => {

   


    return (

        <div className='grid justify-center'>
            <div>
                <div>
                    <h2 className='text-secondary text-3xl'>Testimonials</h2>
                    <p className='text-4xl'>What Our Patients Says</p>
                </div>
                <div>

                </div>
            </div>

        <div  className=' grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-20'>
            
            {
                reviews.map(reviws => <Testimonials
                    key={reviws.id}
                    reviws={reviws}
                ></Testimonials>)
            }
        </div>

        </div>
    );
};

export default Testimonial;