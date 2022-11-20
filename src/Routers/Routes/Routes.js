import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layouts/Root";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Contact from "../../Pages/Shared/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Doctors from "../../Pages/Doctors/Doctors";
import SignUp from "../../Pages/User/SignUp/SignUp";
import SignIn from "../../Pages/User/SignIn/SignIn";
import Profile from "../../Pages/User/Profile/Profile";
import ForgetPassword from "../../Pages/User/ForgetPassword/ForgetPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import MyAppointment from "../../Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Dashboard/ManageDoctors/ManageDoctors";
import Payments from "../../Dashboard/Payments/Payments";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "appointment", element: <Appointment></Appointment> },
      { path: "doctors", element: <Doctors></Doctors> },
      { path: "contact", element: <Contact></Contact> },
      { path: "sign-up", element: <SignUp></SignUp> },
      { path: "sign-in", element: <SignIn></SignIn> },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      { path: "forget-password", element: <ForgetPassword></ForgetPassword> },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      {
        path: "/dashboard/my-appointment",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-doctors",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-doctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:bookingId",
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-navy.vercel.app/bookings/${params.bookingId}`
          ),
        element: (
          <PrivateRoute>
            <Payments></Payments>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
