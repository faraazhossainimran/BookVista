import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Room from "../../components/Banner/Room/Room";
import RoomsCarousel from "../../components/RoomsCarousel/RoomsCarousel";
import { useLoaderData } from "react-router-dom";
const Rooms = () => {
  const roomsData = useLoaderData()
  
  console.log('from database', roomsData);
  return (
    <div>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 gap-4 content-center">
          {roomsData.map((room) => (
            <Room key={room.room_id} room={room}></Room>
          ))}
        </div>
      </div>
      <RoomsCarousel></RoomsCarousel>
    </div>
  );
};

export default Rooms;
