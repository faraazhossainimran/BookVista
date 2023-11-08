import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero md:h-[700px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/N9YftrN/Screenshot-2023-11-08-190359.png",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="glass text-neutral-content">
          <div className="p-8 md:w-[600px] md:border-l-4">
            <div className="m-2">
            <h1 className="mb-5 text-3xl font-bold mx-2">THE MOST LUXURIOUS HOTEL IN TOWN.</h1>
            <p className="mb-5 mx-2">
            Our luxurious accommodations and impeccable service are sure to make your stay unforgettable.
            </p>
            <button className="p-3 bg-black text-white mx-2 font-semibold"><Link to={'/rooms'}>BOOK YOUR STAY</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
