import React from "react";

const FeaturedRoom = ({featuredRoom}) => {
    const {room_description, price_per_night, room_image, room_size } = featuredRoom;
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
            <button className="p-2 mt-4 px-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold">See More Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoom;
