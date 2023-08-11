import React, { useState } from 'react';
import AppointmentBaner from '../AppointmentBaner/AppointmentBaner';
import AvailableAppointements from '../AvailableAppointements/AvailableAppointements';



const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBaner
                selected={selected}
                setSelected={setSelected}
            ></AppointmentBaner>
            <AvailableAppointements 
                selected={selected}
            ></AvailableAppointements>
        </div>
    );
};

export default Appointment;