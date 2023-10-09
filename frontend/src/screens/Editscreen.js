import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

 function Editscreen() {

    
    const [room, setroom] = useState([]);
    const [newroomname, setnewroomname] = useState()
    const [newroomtype, setnewroomtype] = useState()
    const[newroomrent, setnewroomrent] = useState()
    
    
    
    


    useEffect(() => {
        async function fetchData() {
            try {
                
                const data = (await axios.post('/api/rooms/getroombyid', { roomid: roomid })).data
                
                setroom(data)
                
            } catch (error) {
                
                console.log(error)
                
            }

        }
        fetchData();
        
    }, [])
    const { roomid } = useParams();
   
 const updatename =(_id)=>{
    axios.put('/api/rooms/updateroomname',{ _id: _id ,newroomname:newroomname})
    
    console.log(alert('The name is updated'))

    window.location.reload()
    
 }   

 const updatetype =(_id)=>{
    axios.put('/api/rooms/updateroomtype',{ _id: _id ,newroomtype:newroomtype})
    console.log(alert('The type is updated'))
    window.location.reload()
    
 }   

 const updaterent =(_id)=>{
    axios.put('/api/rooms/updateroomrent',{ _id: _id ,newroomrent:newroomrent})
    console.log(alert('The rent is updated'))
    window.location.reload()
 }   




    return (
        <div ><b>
            <p>Name of the room :{room.name} </p>
            <input type= "text"  onChange = {(event) =>{
                setnewroomname(event.target.value)
            }}></input>
            <button onClick={()=>updatename(room._id)}>Update</button>


            <p>Type of room : {room.type}</p>
            <input type= "text" onChange = {(event) =>{
                setnewroomtype(event.target.value)
            }}></input>
            <button onClick={()=>updatetype(room._id)}>Update</button>


            <p>Rent per day : {room.rentperday}</p>
            <input type= "text"onChange = {(event) =>{
                setnewroomrent(event.target.value)
            }} ></input></b>
            <button onClick={()=>updaterent(room._id)}>Update</button>
            

        </div>
    )
}

export default Editscreen