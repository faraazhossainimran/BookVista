import React from "react";
import { Link } from "react-router-dom";

const FeaturedRoom = ({featuredRoom}) => {
    const {room_description, price_per_night, room_image, room_size, _id } = featuredRoom;
  return (
    <div className="">
      <div className="relative">
        <figure className="">
          <img
            src={room_image}
            alt="Shoes"
          />
        </figure>
        <p className="absolute top-4 right-4 text-white bg-black p-2">{room_size}</p>
        <div className="">
          <h2 className="card-title mt-4">{room_description}</h2>
          <p className=" text-lg">Price per night: {price_per_night}</p>
          <div className="">
            <button className="p-2 mt-4 px-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold"><Link to={`http://localhost:5173/rooms/${_id}`}>See More Details</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoom;
