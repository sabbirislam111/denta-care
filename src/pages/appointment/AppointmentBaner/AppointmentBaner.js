import React, { useState } from 'react';
import { format } from 'date-fns';
import backgroundImg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBaner = ({selected, setSelected}) => {
    const today = new Date();
    return (
        <div>
            <div className="hero py-10" style={{ backgroundImage: `url(${backgroundImg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='mr-14'>
                        <DayPicker
                            mode="single"
                            disabled={{ before: today }}
                            selected={selected}
                            onSelect={setSelected}
                            showOutsideDays
                           
                        ></DayPicker>
                        
                    </div>


                </div>

            </div>

            <div>
               
            </div>
        </div>
    );
};

export default AppointmentBaner;