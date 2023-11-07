import { AiFillStar } from "react-icons/ai";
AiFillStar;
const Reviews = () => {
    const handleReviews = (e) => {
        e.preventDefault()
        const form = e.target;
        const username = form.username.value;
        const rating = form.rating.value;
        const review = form.review.value;
        const reviewData = {
            username, 
            rating, 
            review,
        }
        console.log(reviewData);
    }
  return (
    <div className="my-6">
      <h2 className="text-3xl font-semibold py-6 flex">
        <AiFillStar className="text-4xl text-amber-500 mr-2"></AiFillStar>
        Reviews (2)
      </h2>
      <div className="bg-[#f5f5fe] p-4">
        <div>
          <div className="flex">
            <div className="avatar">
              <div className="w-[70px] rounded-full">
                <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
            <div>
              <h2 className="ml-2 text-lg mt-2 font-bold">Imran Hossain</h2>
              <h2 className="ml-2 text-lg">12-12-23</h2>
            </div>
          </div>
          <div className="py-6">
            <p className="text-xl py-2">Reviews Given: 5</p>
            <p className="text-lg">
              This is a very good room service. This is a very good room
              serviceThis is a very good room serviceThis is a very good room
              serviceThis is a very good room serviceThis is a very good room
              serviceThis is a very good room serviceThis is a very good room
              serviceThis is a very good room serviceThis is a very good room
              serviceThis is a very good room serviceThis is a very good room
              service
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <div className="flex">
            <div className="avatar">
              <div className="w-[70px] rounded-full">
                <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
            <div>
              <h2 className="ml-2 text-lg mt-2 font-bold">Imran Hossain</h2>
              <h2 className="ml-2 text-lg">12-12-23</h2>
            </div>
          </div>
          <div className="py-6">
            <p className="text-xl py-2">Reviews Given: 5</p>
            <p className="text-lg">
              This is a very good room service. This is a very good room
              serviceThis is a very good room serviceThis is a very good room
              serviceThis is a very good room serviceThis is a very good room
              serviceThis is a very good room serviceThis is a very good room
              serviceThis is a very good room serviceThis is a very good room
              serviceThis is a very good room serviceThis is a very good room
              service
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-semibold py-6">
        Post a Review
        <form onSubmit={handleReviews}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input input-bordered w-full py-2 mt-4"
          />
          <input
            type="number"
            name="rating"
            placeholder="give rating"
            className="input input-bordered w-full py-2 mt-4"
          />
          <textarea
            placeholder="Comment"
            name="review"
            className="textarea textarea-bordered textarea-xs w-full py-2 mt-4"
          ></textarea>
          <input className="btn input input-bordered w-full py-2 mt-4" type="submit" value="Add Review"></input>
        </form>
      </h2>
    </div>
  );
};

export default Reviews;
