import React, { useEffect, useState } from 'react'
import FeaturedRoom from '../../components/FeaturedRoom/FeaturedRoom'

const FeaturedRooms = () => {
    const [featuredRooms, setFeaturedRooms] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/rooms')
        .then(res => res.json())
        .then(data => {
            setFeaturedRooms(data)
        })
    },[])
    return (
        <div className='container mx-auto my-12'>
            <div className='m-8'>
            <h1 className='text-3xl text-center font-bold pt-6'>Rooms and Suites</h1>
            <p className='text-center mb-12 mt-4'>Our suites provide all the amenities you need for a relaxing beach vacation, including a private balcony overlooking the ocean, plush bedding, and a full kitchen.</p>
            </div>
            <div className='grid m-4 md:m-0 md:grid-cols-3 md:gap-24 gap-8'>
            
            {featuredRooms.map(featuredRoom => <FeaturedRoom key={featuredRoom.room_id} featuredRoom={featuredRoom}></FeaturedRoom>)}
        </div>
        </div>
    )
}

export default FeaturedRooms