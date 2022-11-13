import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layouts/Root";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Contact from "../../Pages/Shared/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/User/SignUp/SignUp";
import SignIn from "../../Pages/User/SignIn/SignIn";

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
    ],
  },
]);
