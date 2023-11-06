const Room = ({room}) => {
    const {room_description, price_per_night, room_image } = room;
  return (
    <div>
      <div className="">
        <figure>
          <img
          className="bg-gradient-to-r from-indigo-500"
            src={room_image}
            alt={`image of ${room_description}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{room_description}</h2>
        <p>Price Per night: ${price_per_night}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
