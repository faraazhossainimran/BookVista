import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
import Room from '../../components/Banner/Room/Room';
import RoomsCarousel from '../../components/RoomsCarousel/RoomsCarousel';
const Rooms = () => {
  const [rooms, setRooms] = useState([])
    useEffect(()=>{
        fetch('rooms.json')
        .then(res => res.json())
        .then(data => {
          setRooms(data)
          console.log(data);
        })
    },[])
  return (
    <div>
      <div className='grid grid-cols-2'>
      {rooms.map(room => <Room key={room.room_id} room={room}></Room>)}
      </div>
      <RoomsCarousel></RoomsCarousel>
    </div>
  );
};

export default Rooms;
