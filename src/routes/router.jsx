import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Rooms from "../pages/Rooms/Rooms";
import Bookings from "../pages/Bookings/Bookings";
import SignUP from "../pages/SignUp/SignUP";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }, 
        {
            path: "/rooms",
            element: <Rooms></Rooms>,
            loader: ()=> fetch('http://localhost:5000/rooms'),
        },
        {
            path: "/rooms/:id",
            element: <RoomDetails></RoomDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
        },
        {
            path: "/bookings",
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }, 
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUP></SignUP>
        },
        {
            path: "/room-details",
            element: <RoomDetails></RoomDetails>
        },
      ]
    },
    
  ]);
  export default router;