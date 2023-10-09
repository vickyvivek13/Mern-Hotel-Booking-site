const express = require("express");
const router = express.Router();
const Booking = require("../models/booking")
const Room = require('../models/room')

router.post("/bookroom", async(req,res)=> {
    const{
        room,
        userid,
        fromdate,
        todate,
        totaldays,
    }= req.body

    try {
        const newbooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            fromdate,
            todate,
            totaldays
        })
        const booking = await newbooking.save()
    
        res.send('room booked')
    } catch (error) {
        return res.status(400).json({ error })
    }

});

router.get("/getallbookings", async (req,res)=>{
    try {
        const bookings = await Booking.find()
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error });
    }
})

router.get("/bookingsbyuser", async(req , res )=>{
    const userid = req.body.user
    
    try {
        const bookingsofuser = await Booking.findById( userid = userid)
        res.send(bookingsofuser)
    } catch (error) {
        return res.status(400).json({error});
    }
})


module.exports = router