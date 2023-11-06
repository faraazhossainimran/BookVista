const RoomsCarousel = () => {
  return (
    <div>
      <div className="carousel grid md:grid-cols-4 carousel-center">
        <div className="carousel-item relative">
          <img
          className="relative"
            src="https://i.ibb.co/5KnZ9ys/girl-in-the-pool-on-a-sunset-background-F5-LL5-H7.jpg"
            alt="Rooms photos"
          /> 
           <h1 className="absolute text-2xl text-white font-semibold h-full flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"><span className="mt-4 ml-4 mr-12">Private Pool</span></h1>
        </div>
        <div className="carousel-item relative">
          <img
            className="bg-gradient-to-r from-indigo-500"
            src="https://i.ibb.co/rQffKRg/floating-breakfast-at-amazing-hotel-villa-in-blue-2021-04-06-20-00-21-utc.jpg"
            alt="Rooms photos"
          />
          <h1 className="absolute text-2xl text-white font-semibold h-full flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"><span className="mt-4 ml-4 mr-12">Premium Foods</span></h1>
        </div>
        <div className="carousel-item relative">
          <img
            src="https://i.ibb.co/DR0ZGKs/housekeeper-cleaning-a-hotel-room-2021-04-02-19-56-56-utc.jpg"
            alt="Rooms photos"
          />
            <h1 className="absolute text-2xl text-white font-semibold h-full flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"><span className="mt-4 ml-4 mr-12">King bed</span></h1>
        </div>
        <div className="carousel-item relative">
          <img
            src="https://i.ibb.co/gWJHjHZ/julian-hochgesang-nq-Zv8jtw-LTY-unsplash.jpg"
            alt="Rooms photos"
          />
            <h1 className="absolute text-2xl text-white font-semibold h-full flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"><span className="mt-4 ml-4">Soft Lighting</span></h1>
        </div>
      </div>
    </div>
  );
};

export default RoomsCarousel;
