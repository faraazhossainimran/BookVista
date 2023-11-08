const Rating = ({ rating }) => {
    return (
      <div className="rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <input
            key={value}
            type="radio"
            name="rating"
            className="mask mask-star-2 bg-orange-400"
            checked={rating === value}
            readOnly
          />
        ))}
      </div>
    );
  };
export default Rating