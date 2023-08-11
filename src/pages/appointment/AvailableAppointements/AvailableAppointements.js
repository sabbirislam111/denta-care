import { format } from 'date-fns';
import React, { useState } from 'react';
import AppintmentOptions from '../AppointmentOptions/AppintmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import { Toaster } from 'react-hot-toast';
import Loading from '../../../component/Loading/Loading';



const AvailableAppointements = ({ selected }) => {

    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [bookingModalOptions, setBookingModalOptions] = useState(null);
    const date = format(selected, "PP");
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }




    //  useEffect(() => {
    //         fetch('http://localhost:5000/appointmentOptions')
    //           .then(res => res.json())
    //           .then(data => setAppointmentOptions(data))
    //     }, [])

    return (
        <div>
            <section className='my-14 items-center'>
                <p className='text-center text-secondary text-2xl'>Available appointment {format(selected, "PP")}</p>
            </section>
            <div className='grid gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {
                    appointmentOptions.map(options => <AppintmentOptions
                        key={options._id}
                        options={options}
                        setBookingModalOptions={setBookingModalOptions}
                    ></AppintmentOptions>)
                }
            </div>
            {
                bookingModalOptions &&
                <BookingModal
                    bookingModalOptions={bookingModalOptions}
                    setBookingModalOptions={setBookingModalOptions}
                    selectedDate={selected}
                    refetch={refetch}
                ></BookingModal>
            }
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default AvailableAppointements;