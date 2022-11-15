import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layouts/Root";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Contact from "../../Pages/Shared/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/User/SignUp/SignUp";
import SignIn from "../../Pages/User/SignIn/SignIn";
import Profile from "../../Pages/User/Profile/Profile";
import ForgetPassword from "../../Pages/User/ForgetPassword/ForgetPassword";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "appointment", element: <Appointment></Appointment> },
      { path: "reviews", element: <Reviews></Reviews> },
      { path: "contact", element: <Contact></Contact> },
      { path: "sign-up", element: <SignUp></SignUp> },
      { path: "sign-in", element: <SignIn></SignIn> },
      { path: "profile", element: <Profile></Profile> },
      { path: "forget-password", element: <ForgetPassword></ForgetPassword> },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
]);
