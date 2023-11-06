import { useLoaderData } from "react-router-dom"
import RoomDetail from "../../components/RoomDetail/RoomDetail";
import RoomDetailsCarousel from "./RoomDetailsCarousel";
import RoomsCarousel from "../../components/RoomsCarousel/RoomsCarousel";


const RoomDetails = () => {
    const roomDetails = useLoaderData()
    const {_id} = roomDetails;
    return (
        <div>
           <RoomDetailsCarousel roomDetails={roomDetails}></RoomDetailsCarousel>
        </div>
    )
}

export default RoomDetails