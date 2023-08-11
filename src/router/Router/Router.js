import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Appointment from "../../pages/appointment/Appointment/Appointment";
import Signup from "../../pages/Signup/Signup";

import PrivetRouter from "../privetRouter/PrivetRouter";
import DashboardLayout from "../../layout/DashboardLayout";

import MyAppointment from "../../pages/dashbord/myAppointment/MyAppointment";
import Allusers from "../../pages/dashbord/AllUsers/Allusers";
import AdminRouter from "../adminRoute/AdminRoute";
import AddDoctor from "../../pages/dashbord/AddDoctor/AddDoctor";
import ManageDoctor from "../../pages/dashbord/MangeDoctor/ManageDoctor";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <PrivetRouter><Appointment></Appointment></PrivetRouter>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivetRouter><DashboardLayout></DashboardLayout></PrivetRouter>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRouter><Allusers></Allusers></AdminRouter>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRouter><AddDoctor></AddDoctor></AdminRouter>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRouter><ManageDoctor></ManageDoctor></AdminRouter>
            },
        ]
    }
])

export default router