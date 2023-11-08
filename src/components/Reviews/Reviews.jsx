import { useContext, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Review from "./Review";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

AiFillStar;
const Reviews = ({ _id }) => {
  const {user} = useContext(AuthContext)
  const [postedReviews, setPostedReviews] = useState([]);
  const url = `http://localhost:5000/reviews/${_id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPostedReviews(data);
      });
  }, []);
  const handleReviews = (e) => {
    e.preventDefault();
    const form = e.target;
    const user_name = form.username.value;
    const userPhoto = form.photo.value;
    const rating = form.rating.value;
    const review_text = form.review.value;
    const reviewData = {
      user_name,
      rating,
      userPhoto,
      review_text,
    };
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Good job!",
          text: "Your review is added!",
          icon: "success"
        });
      });
  };

  return (
    <div className="my-6">
      <h2 className="text-3xl font-semibold py-6 flex">
        <AiFillStar className="text-4xl text-amber-500 mr-2"></AiFillStar>
        Total Reviews: {postedReviews?.reviews?.length}
      </h2>
      {postedReviews?.reviews?.map(review => <Review review={review}></Review>)}

      <h2 className="text-3xl font-semibold py-6">
        Post a Review
        <form onSubmit={handleReviews}>
          <input
          required
            type="text"
            name="username"
            placeholder="Username"
            className="input input-bordered w-full py-2 mt-4"
          />
          <input
          required
            type="text"
            name="photo"
            placeholder="Photo url"
            className="input input-bordered w-full py-2 mt-4"
          />
          <input
            required
            type="number"
            name="rating"
            placeholder="give rating"
            className="input input-bordered w-full py-2 mt-4"
          />
          <textarea
          required
            placeholder="Comment"
            name="review"
            className="textarea textarea-bordered textarea-xs w-full py-2 mt-4"
          ></textarea>
          <input
            className={!user?.email ? 'btn mt-4' : 'btn b-0 p-4 mt-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold'}
            type="submit"
            value="Add Review"
            disabled={!user?.email ? true : false}
          ></input>
        </form>
      </h2>
    </div>
  );
};

export default Reviews;
