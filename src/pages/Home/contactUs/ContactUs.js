import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className='py-36 grid justify-center' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='text-center mb-16'>
                <h2 className='text-secondary text-3xl'>Testimonials</h2>
                <p className='text-4xl text-white'>What Our Patients Says</p>
            </div>
            <div>
            <form>
                <input type="email" name='email' placeholder='Enter your email' className='w-96 border-2  p-2 bg-slate-300 rounded-lg'></input>
                <br></br>
                <br></br>
                <input type="text" name='subject' placeholder='Subject' className='w-96 border-2  p-2 bg-slate-300 rounded-lg'></input>
                <br></br>
                <br></br>
                <textarea type="email" name='email' placeholder='Your Email' className='w-96 h-24 border-2  p-2 bg-slate-300 rounded-lg'></textarea>
                <br></br>
                <br></br>
                <button className='btn w-96 bg-secondary' type='submit'>SUBMIT</button>
            </form>
        </div>
        </div>
    );
};

export default ContactUs;