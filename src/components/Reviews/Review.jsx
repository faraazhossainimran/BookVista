import Rating from "./Rating";

const Review = ({review}) => {
    const {user_name, rating, review_text} = review
    const defaultImage = "https://i.ibb.co/j6TjQfR/7309681.jpg";
  return (
    <div>
      <div className="bg-[#f5f5fe] p-2 md:p-6">
        <div>
          <div className="flex">
            <div className="avatar">
              <div className="w-[70px] md:w-[70px] rounded-full">
                <img src={defaultImage} />
              </div>
            </div>
            <div>
              <h2 className="ml-2 text-lg mt-2 font-bold">{user_name}</h2>
              <h2 className="ml-2 text-lg">12-12-23</h2>
            </div>
          </div>
          <div className="py-6">
            <Rating rating={rating}></Rating>
            <p className="text-lg">
              {review_text}
            </p>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Review;
