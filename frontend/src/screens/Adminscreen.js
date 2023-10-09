import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom'



function Adminscreen() {
    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('currentuser')).data.isAdmin) {
            window.location.href = "/home"
        }
    })
    return (
        <div className='mt-3 ml-3 mr-3 bs'>

            <b>
                <h1>Admin Panel</h1></b>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Bookings" key="1">
                    <Bookings />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Rooms" key="2">
                    <Rooms />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Add Room" key="3">
                    <Addroom />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Users" key="4">
                    <Users />
                </Tabs.TabPane>
            </Tabs>

        </div>
    )
}

export default Adminscreen





export function Bookings() {
    const [bookings, setbookings] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {

                const data = await (await axios.get("/api/bookings/getallbookings")).data
                setbookings(data)


            } catch (error) {
                console.log(error)


            }

        }
        fetchData();
    }, [])

    return (

        <div className='row'>

            <div className='col-md-10'>

                <table className='table table-borderred table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>Booking ID</th>
                            <th>Room</th>
                            <th>From</th>
                            <th>To</th>
                            <th>status</th>

                        </tr>
                    </thead>

                    <tbody>
                        {bookings.length && (bookings.map(bookings => {

                            return <tr>
                                <td>{bookings._id}</td>
                                <td>{bookings.room}</td>
                                <td>{bookings.fromdate}</td>
                                <td>{bookings.todate}</td>
                                <td>{bookings.status}</td>

                            </tr>

                        }))}
                    </tbody>
                </table>


            </div>

        </div>
    )
}

export function Rooms() {
    const [rooms, setrooms] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {

                const data = await (await axios.get("/api/rooms/getallrooms")).data
                setrooms(data)


            } catch (error) {
                console.log(error)


            }

        }
        fetchData();
    }, [])


    const ClearroomData = (id) => {

        axios.delete(`/api/rooms/deleteroom/${id}`)
        window.location.reload()

    }



    return (

        <div className='row'>

            <div className='col-md-10'>

                <table className='table table-borderred table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>Room ID</th>
                            <th>name</th>
                            <th>Type</th>
                            <th>Rent per day</th>
                            <th>Max people </th>
                            <th>Phone number </th>
                            <th>Delete Option</th>
                            <th>Edit Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.length && (rooms.map(room => {
                            return <tr>
                                <td>{room._id}</td>
                                <td>{room.name}</td>
                                <td>{room.type}</td>
                                <td>{room.rentperday}</td>
                                <td>{room.maxcount}</td>
                                <td>{room.phonenumber}</td>
                                <td>
                                    <button className='btn btn-primary m-4' onClick={() => ClearroomData(room._id)}> Delete room  </button>
                                </td>
                                <td>
                                    <Link to={`/room/${room._id}`}>
                                        <button className='btn btn-primary m-4'> Edit </button>
                                    </Link>
                                </td>
                            </tr>
                        }))}
                    </tbody>
                </table>


            </div>

        </div>
    )
}
export function Users() {
    const [users, setusers] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {

                const data = await (await axios.get("/api/users/getallusers")).data
                setusers(data)


            } catch (error) {
                console.log(error)


            }

        }
        fetchData();
    }, [])

    const ClearuserData = (id) => {

        axios.delete(`/api/users/deleteuser/${id}`)
        window.location.reload()

    }



    return (
        <div className='row'>
            <div className='col-md-12'>
                <h1>Users</h1>
                <table className='table table-dark table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>User Email</th>
                            <th>Is Admin</th>
                            <th>Delete Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && (users.map(user => {
                            return <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                                <td>
                                    <button className='btn btn-primary m-4' onClick={() => ClearuserData(user._id)}> Delete User  </button>
                                </td>

                            </tr>
                        }))}
                    </tbody>
                </table>

            </div>

        </div>

    )
}



export function Addroom() {

    const [name, setname] = useState('')
    const [rentperday, setrentperday] = useState()
    const [maxcount, setmaxcount] = useState()
    const [description, setdescription] = useState()
    const [phonenumber, setphonenumber] = useState()
    const [type, settype] = useState()
    const [imageurl1, setimageurl1] = useState()
    const [imageurl2, setimageurl2] = useState()
    const [imageurl3, setimageurl3] = useState()

    async function addrooom() {

        const newroom = {
            name,
            rentperday,
            maxcount,
            description,
            phonenumber,
            type,
            imageurls: [imageurl1, imageurl2, imageurl3]

        }

        try {
            const result = await (await axios.post('/api/rooms/addroom', newroom)).data
            setname('')
            setrentperday('')
            setmaxcount('')
            setdescription('')
            setphonenumber('')
            settype('')
            setimageurl1('')
            setimageurl2('')
            setimageurl3('')
            console.log(alert(`New Room ${name} is been added to the database`))

        } catch (error) {
            console.log(error)

        }


    }


    return (
        <div className='row'>
            <div className='col-md-5'>
                <input type="text" className='form-control' placeholder='roomname'
                    value={name} onChange={(e) => { setname(e.target.value) }}
                />
                <input type="text" className='form-control' placeholder='rent per day'
                    value={rentperday} onChange={(e) => { setrentperday(e.target.value) }}
                />
                <input type="text" className='form-control' placeholder='max count'
                    value={maxcount} onChange={(e) => { setmaxcount(e.target.value) }}
                />
                <input type="text" className='form-control' placeholder='description'
                    value={description} onChange={(e) => { setdescription(e.target.value) }}
                />
                <input type="text" className='form-control' placeholder='phone number'
                    value={phonenumber} onChange={(e) => { setphonenumber(e.target.value) }}
                />

            </div>
            <div className='col-md-5'>
                <input type="text" className='form-control' placeholder='type'
                    value={type} onChange={(e) => { settype(e.target.value) }}
                />
                <input type="text" className='form-control' placeholder='img url 1'
                    value={imageurl1} onChange={(e) => { setimageurl1(e.target.value) }}
                />
                <input type="text" className='form-control' placeholder='img url 2'
                    value={imageurl2} onChange={(e) => { setimageurl2(e.target.value) }}
                />
                <input type="text" className='form-control' placeholder='img url 3'
                    value={imageurl3} onChange={(e) => { setimageurl3(e.target.value) }}
                />

                <div className='text-right'>
                    <button className='btn btn-primary mt-2' onClick={addrooom}>Add Room</button>
                </div>

            </div>

        </div>
    )
}