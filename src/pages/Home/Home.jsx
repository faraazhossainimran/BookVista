import Banner from "../../components/Banner/Banner"
import FeaturedRoom from "../../components/FeaturedRoom/FeaturedRoom"
import Promotions from "../../components/Promotions/Promotions"
import RoomsCarousel from "../../components/RoomsCarousel/RoomsCarousel"
import Rooms from "../Rooms/Rooms"
import FeaturedRooms from "./FeaturedRooms"
import ImageRorate from "./ImageRorate"



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Promotions></Promotions>
           <FeaturedRooms></FeaturedRooms>
           <RoomsCarousel></RoomsCarousel>
        </div>
    )
}

export default Home