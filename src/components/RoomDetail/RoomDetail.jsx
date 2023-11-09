import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Reviews from "../Reviews/Reviews";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RoomDetail = ({ roomDetails }) => {
  const { user } = useContext(AuthContext);
  const {
    room_description,
    price_per_night,
    room_image,
    room_size,
    _id,
    room_details,
  } = roomDetails;
  const userEmail = user ? user.email : "";
  const handleRoomBooking = () => {
    const bookedRoom = {
      bookedRoom_room_description: room_description,
      bookedRoom_Price_per_night: price_per_night,
      bookedRoom_room_image: room_image,
      bookedRoom_size: room_size,
      userEmail,
    };
    // console.log(bookedRoom);
    fetch("https://bookvista-server-with-jwt.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedRoom),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire(
          'Room Booked!',
          `You have booked the room`,
          'success'
        )
      });
  };
  return (
    <div>
      <div className="container mx-auto pt-12 md:w-[1200px]">
        {/* <p className="text-center py-2 text-xl">Size: {room_size}</p> */}
        <div className="grid md:grid-cols-4 m-2 gap-6">
          <div className="md:col-span-3 ">
            <div className=" card-compact p-4 bg-[#f5f5fe] ">
              <figure>
                <img
                  className="md:h-[700px] object-cover"
                  src={room_image}
                  alt="Shoes"
                />
              </figure>
              <div className="">
                <h1 className="text-3xl font-semibold py-4">
                  {room_description}
                </h1>
                <p className="text-lg my-2">{room_details}</p>
              </div>
            </div>
            <Reviews _id={_id}></Reviews>
          </div>
          <div className="">
            <ul className="menu bg-[#f5f5fe] m-2 md:w-96 rounded-box ">
              <li className="text-2xl font-semibold p-2">{room_description}</li>
              <li>
                <span className="font-semibold text-lg">
                  Price: {price_per_night}
                </span>
              </li>
              <li>
                <span className="font-semibold text-lg">Size: {room_size}</span>
              </li>
              <li>
                {/* <span className="font-semibold text-lg">Details: {room_details}</span> */}
              </li>
              <Link
                className="btn p-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold"
                onClick={() => {
                  if (user?.email) {
                    handleRoomBooking();
                  }
                }}
                to={user?.email ? "/bookings" : "/login"}
              >
                Book Now
              </Link>
            </ul>
            <ul className="menu bg-[#f5f5fe] m-2 md:w-96 rounded-box mt-12 ">
              <li className="text-2xl font-semibold p-2">Need Assistant?</li>
              <li>
                <span className="font-semibold text-lg">
                  Call at: 01923456789
                </span>
              </li>
              <li>
                {/* <span className="font-semibold text-lg">Size: {room_size}</span> */}
              </li>
              <li>
                {/* <span className="font-semibold text-lg">Details: {room_details}</span> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
