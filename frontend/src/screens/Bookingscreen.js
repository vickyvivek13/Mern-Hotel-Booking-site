
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment'

const { RangePicker } = DatePicker;

function Bookingscreen() {
   

    const [room, setroom] = useState();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const [fromdate, setfromdate] = useState()
    const [todate, settodate] = useState()
    const [totalamount, settotalamount] = useState()
    const from = moment(fromdate, 'DD-MM-YYYY')
    const to= moment(todate, 'DD-MM-YYYY')
    const totaldays = moment.duration(to.diff(from)).asDays()+1
    
    


    useEffect(() => {
        async function fetchData() {
            try {
                setloading(true)
                const data = (await axios.post('/api/rooms/getroombyid', { roomid: roomid })).data;
                
                setroom(data)
                setloading(false)
            } catch (error) {
                seterror(true)
                console.log(error)
                setloading(false)
            }

        }
        fetchData();
    }, [])
    const { roomid } = useParams();
    
    function filterByDate(dates) {

        setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
        settodate(moment(dates[1]).format('DD-MM-YYYY'))
        
    }

    async function bookRooms(){
        const bookingDetails = {
            room,
            userid : JSON.parse(localStorage.getItem('currentuser')).data._id,
            fromdate,
            todate,
            totaldays,
            
        }
        try {
            const result = await axios.post('/api/bookings/bookroom',bookingDetails)
            
        } catch (error) {
            
        }
        console.log(alert(`Booking successfull of ${room.name} for ${totaldays} days from ${fromdate} to ${todate}`))
        
    }
   function gettotal(){
    settotalamount(room.rentperday*totaldays)

   }
    
    return (
        <div className='container'>

            <div className='row mt-5'>
                <div className='col-md-3'>
                    <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />

                </div>



            </div>
            <div className='m-3'>

                {loading ? (<h1> Loading.....</h1>) : error ? (<h1> Error.... :\</h1>) : (<div>
                    <div className='row justify-content-center mt-3 bs'>

                        <div className='col-md-5'>
                            <h1>{room.name}</h1>
                            <img src={room.imageurls[0]} className='bigimg' />


                        </div>
                        <div className='col-md-50'>
                            <div>
                                <h1>Booking Details</h1>
                                <hr />

                                <b><p>Name: {room.name}</p>
                                    <p>From Date: {fromdate}</p>
                                    <p>To Date: {todate}</p>
                                    <p>Comfortable for less than {room.maxcount} people </p></b></div>
                            <div>
                                <b><h1>Amount</h1>
                                    <hr />
                                    <p>Total days :{totaldays} </p>
                                    <p>Rent per day : Rs.{room.rentperday}/- </p>
                                    <p>Total Amount :Rs.{totalamount}/-</p></b>
                                    <button onClick={gettotal}> Get totalamount </button>
                                <div> <button className='btn btn-primary'onClick={bookRooms}> Make Payment </button>    </div>
                            </div>


                        </div>

                    </div>



                </div>)}

            </div>
        </div>
    );
}

export default Bookingscreen;