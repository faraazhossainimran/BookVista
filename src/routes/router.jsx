import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Rooms from "../pages/Rooms/Rooms";
import Bookings from "../pages/Bookings/Bookings";
import SignUP from "../pages/SignUp/SignUP";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }, 
        {
            path: "/rooms",
            element: <Rooms></Rooms>
        },
        {
            path: "/bookings",
            element: <Bookings></Bookings>
        }, 
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUP></SignUP>
        },
      ]
    },
    
  ]);
  export default router;