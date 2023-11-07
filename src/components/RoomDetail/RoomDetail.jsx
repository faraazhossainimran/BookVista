import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const RoomDetail = ({ roomDetails }) => {
  const {user} = useContext(AuthContext)
  const {
    room_description,
    price_per_night,
    room_image,
    room_size,
    _id,
    room_details,
  } = roomDetails;
  const userEmail = user ? user.email : '';
const handleRoomBooking = () => {
    const bookedRoom = {
        bookedRoom_room_description: room_description,
        bookedRoom_Price_per_night: price_per_night,
        bookedRoom_room_image: room_image,
        bookedRoom_size: room_size,
        userEmail,
    }
    console.log(bookedRoom);
    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(bookedRoom)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}
  return (
    <div>
      <div className="container mx-auto pt-12 w-[1200px]">
        {/* <p className="text-center py-2 text-xl">Size: {room_size}</p> */}
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3">
            <div className=" card-compact ">
              <figure>
                <img
                  className="md:h-[700px] object-cover"
                  src={room_image}
                  alt="Shoes"
                />
              </figure>
              <div className="">
                <h1 className="text-3xl font-semibold  py-4">
                  {room_description}
                </h1>
                <p className="text-lg my-2">{room_details}</p>
              </div>
            </div>
          </div>
          <div className="">
          <ul className="menu bg-base-200 md:w-96 rounded-box ">
            <li className="text-2xl font-semibold p-2">{room_description}</li>
            <li>
              <span className="font-semibold text-lg">Price: {price_per_night}</span>
            </li>
            <li>
            <span className="font-semibold text-lg">Size: {room_size}</span>
            </li>
            <li>
            {/* <span className="font-semibold text-lg">Details: {room_details}</span> */}
            </li>
            <button className="btn" onClick={()=> handleRoomBooking()}>Book Now</button>
          </ul>
          <ul className="menu bg-base-200 md:w-96 rounded-box mt-12 ">
            <li className="text-2xl font-semibold p-2">Need Assistant?</li>
            <li>
              <span className="font-semibold text-lg">Call at: 01923456789</span>
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
