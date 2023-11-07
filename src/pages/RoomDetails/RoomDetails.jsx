import { useLoaderData } from "react-router-dom"
import RoomDetail from "../../components/RoomDetail/RoomDetail";
import RoomDetailsCarousel from "./RoomDetailsCarousel";
import RoomsCarousel from "../../components/RoomsCarousel/RoomsCarousel";
import Promotions from "../../components/Promotions/Promotions";
import FeaturedRoom from "../../components/FeaturedRoom/FeaturedRoom";


const RoomDetails = () => {
    const roomDetails = useLoaderData()
    return (
        <div>
           <RoomDetail roomDetails={roomDetails}></RoomDetail>
           {/* <FeaturedRoom></FeaturedRoom> */}
           <Promotions></Promotions>
           <RoomDetailsCarousel roomDetails={roomDetails}></RoomDetailsCarousel>
        </div>
    )
}

export default RoomDetails