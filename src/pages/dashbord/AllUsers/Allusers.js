import React, { useContext } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../context/Authprovider';


const Allusers = () => {

    const {user} = useContext(AuthContext)

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/users?email=${user.email}`,{
                headers: {
                    authorization:`bearer ${localStorage.getItem('access_token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


const handelMakeAdmin = (_id) => {
    fetch(`http://localhost:5000/users/admin/${_id}`,{
        method: "PATCH",
        headers: {
            authorization:`bearer ${localStorage.getItem('access_token')}`
        },
        
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount === 1){
            toast.success("Make Admin Successfully")
            refetch();
        }
        
    })
    
}


    return (
        <div className='w-full'>
            <h1 className='text-2xl'>All Users</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                
                    <thead>
                        <tr>
                            <th>S.L</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                       {
                        users.map((user, i) =>
                        <tr key={user._id}>
                        <th>{i+1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role !== 'admin'&& <button onClick={()=> handelMakeAdmin(user._id)} className='btn-xs btn-primary'>Make Admin</button>}</td>
                        <td><button className='btn-xs btn-warning'>Delete</button></td>
                    </tr>)
                       }
                      
                    </tbody>
                </table>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Allusers;