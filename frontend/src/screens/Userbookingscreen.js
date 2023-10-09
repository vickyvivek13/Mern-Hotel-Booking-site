import React ,{useEffect, useState}from 'react'
import axios from 'axios'
function Userbookingscreen() {
    const [bookingsbyuser , setbookingsbyuser] = useState()

    const userid = JSON.parse(localStorage.getItem('currentuser')).data._id;
    
    
    
    useEffect(()=>{
        async function fetchData(){
            try {
               const data = (await axios.get("/api/bookings/bookingsbyuser", {user : userid})).data
               setbookingsbyuser(data)
            } catch (error) {
                    console.log(error)                
            }

        }
        fetchData();

    },[])
    
    async function Cancel(){



    }


  return (
    <div className='row mt-5'>

    <div className='col-md-10'>

        <table className='table table-borderred table-dark'>
            <thead className='bs'>
                <tr>
                    <th>Booking id</th>
                    <th>Room</th>
                    <th>From</th>
                    <th>To</th>
                    <th>status</th>
                    <th>Cancel options</th>
                </tr>
            </thead>

            <tbody>
                {bookingsbyuser && (bookingsbyuser.map(bookings => {

                    return <tr>
                        <td>{bookings._id}</td>
                        <td>{bookings.room}</td>
                        <td>{bookings.fromdate}</td>
                        <td>{bookings.todate}</td>
                        <td>{bookings.status}</td>
                        <td>
                                    <button className='btn btn-primary m-4' onClick={() => Cancel(bookings._id)}> Cancle this Booking  </button>
                        </td>
                    </tr>

                }))}
            </tbody>
        </table>


    </div>

</div>
  )
}

export default Userbookingscreen