import React, { useState, useEffect } from 'react'
import axios from "axios";
import Room from '../components/Room';





function Homescreen() {
    const [rooms, setrooms] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()
    
    useEffect(() => {
        async function fetchData() {
            try {
                setloading(true)
                const data = (await axios.get('/api/rooms/getallrooms')).data;
                setrooms(data)
                setloading(false)
            } catch (error) {
                seterror(true)
                console.log(error)
                setloading(false)
            }

        }
        fetchData();
    }, [])

    


    return (
        <div className='landing'>
        <div className='container'>
            





            <div className='row'>
                {loading ? (<h1>Loading....</h1>) : error ? (<h1>Error :/</h1>) : (rooms.map(room => {
                    return <div className='com-md-9 mt-3'>
                        <Room room ={room} />
                    </div>;
                }))}
            </div>


        </div></div>
    )
}

export default Homescreen