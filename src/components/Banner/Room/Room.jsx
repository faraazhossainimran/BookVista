import moment from "moment/moment";
import { Link } from "react-router-dom";

const Room = ({room}) => {
    const {room_description, price_per_night, room_image, room_size, _id } = room;
  return (
    <div>
      <div className="relative">
          <img
          className="md:h-[600px] object-cover"
            src={room_image}
            alt={`image of ${room_description}`}
          />
        <div className="absolute top-0 md:h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <h2 className="card-title mr-12 text-white font-bold text-3xl mt-4 ml-4">{room_description}</h2>
        <p className="text-white mt-2 ml-4 font-semibold text-xl">Price Per night: ${price_per_night}</p>
          <div className="card-actions">
            <button className="text-white font-semibold mt-8 ml-4 p-2 md:border-4"><Link to={`http://localhost:5173/rooms/${_id}`}>See More Details</Link></button>
          </div>
        </div>
        <div>
        <p className="absolute bottom-4 right-4 text-white bg-black p-4">{room_size}</p>
        </div>
      </div>
    </div>
  );
};

export default Room;