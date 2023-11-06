const RoomDetailsCarousel = ({ roomDetails }) => {
  console.log(roomDetails.room_images);
  return (
    <div>
      <div className="relative">
        <div className="carousel h-[400px] grid md:grid-cols-3 gap-6 carousel-center">
          {roomDetails.room_images.map((room_img) => 
            <>
              <div className="carousel-item relative">
                <img
                  className="object-cover"
                  src={room_img}
                  alt="Rooms photos"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsCarousel;
