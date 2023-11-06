import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero md:h-[700px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
