import { useLoaderData } from "react-router-dom"
import RoomDetail from "../../components/RoomDetail/RoomDetail";


const RoomDetails = () => {
    const roomDetails = useLoaderData()
    const {_id} = roomDetails;
    return (
        <div>
            {_id}
        </div>
    )
}

export default RoomDetails