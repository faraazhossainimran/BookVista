import { useLoaderData } from "react-router-dom";
import Booking from "../../components/Booking/Booking";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
const Bookings = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  const [bookingsDetails, setBookingsDetails] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookingsDetails(data);
      });
  }, []);
  const handleBookingDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete your bookings?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Not Now`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remainingBookings = bookingsDetails.filter(booking => booking._id !== id)
            setBookingsDetails(remainingBookings);
          })
          .catch((error) => {
            console.error("Error deleting booking:", error);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  console.log(bookingsDetails);
  return (
    <div className="container mx-auto py-12">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Room Booked</th>
              <th className="text-lg">$Price</th>
              <th className="text-lg">Size</th>
              <th className="text-lg">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookingsDetails.map((booking) => (
              <Booking
                key={booking._id}
                booking={booking}
                handleBookingDelete={handleBookingDelete}
              ></Booking>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
