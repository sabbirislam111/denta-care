import React from 'react';
import doctorsmall from '../../../assets/images/doctor-small.png';
import appoinmentBg from '../../../assets/images/appointment.png'


const ApoinmentSec = () => {
    return (
        <div className="hero mt-44 mb-12 text-white" style={{ backgroundImage: `url(${appoinmentBg})` }} >
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctorsmall} className="max-w-sm rounded-lg h-[500px] -mt-24 -mb-4" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default ApoinmentSec;