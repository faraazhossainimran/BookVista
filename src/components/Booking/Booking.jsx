

const Booking = ({ booking, handleBookingDelete }) => {

  const {
    bookedRoom_Price_per_night,
    bookedRoom_room_description,
    bookedRoom_room_image,
    bookedRoom_size,
    _id,
  } = booking;

  return (
    <>
      <tr>
        <th>
          {/* <label className=" flex justify-end">
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={bookedRoom_room_image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold text-lg">
                {bookedRoom_room_description}
              </div>
            </div>
          </div>
        </td>
        <td className="text-lg">$ {bookedRoom_Price_per_night}</td>
        <td className="text-lg">{bookedRoom_size}</td>
        <td className="text-lg opacity-50">10-12-23</td>
        <th>
          <button
            className="btn btn-ghost btn-md"
            onClick={() => handleBookingDelete(_id)}
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default Booking;
