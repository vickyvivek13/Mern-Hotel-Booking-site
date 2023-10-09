const express = require("express");
const roomModel = require("../models/room");

const router = express.Router();

const Room = require('../models/room')

router.get("/getallrooms", async(req,res)=>{

   try {
    const rooms = await Room.find({})
     res.send(rooms)
   } catch (error) {
        return res.status(400).json({ message: error});
   }

});

router.post('/getroombyid', async(req,res)=>{
   const roomid = req.body.roomid

   try {
    const room = await Room.findOne({_id : roomid })
     res.send(room)
   } catch (error) {
        return res.status(400).json({ message: error});
   }

});


router.post('/addroom', async(req , res)=>{
   try {
      const newroom = new Room(req.body)
      await newroom.save()

      res.send('new room added')

   } catch (error) {
      return res.status(400).json({error});
   }
});
router.delete("/deleteroom/:id", async(req,res)=>{
   const roomid = req.params.id
   await Room.findByIdAndRemove(roomid).exec();
   res.send("deleted")
   
});

router.put("/updateroomname", async(req , res)=>{
   const newroomname = req.body.newroomname
   const _id = req.body._id
   try {
      await Room.findById(_id , (error,updatedName)=>{
         updatedName.name = newroomname
         updatedName.save()
         res.send("updated")
      })
   } catch (error) {
      
   }
})

router.put("/updateroomtype", async(req , res)=>{
   const newroomtype = req.body.newroomtype
   const _id = req.body._id
   try {
      await Room.findById(_id , (error,updatedtype)=>{
         updatedtype.type = newroomtype
         updatedtype.save()
         res.send("updated")
      })
   } catch (error) {
      
   }
})

router.put("/updateroomrent", async(req , res)=>{
   const newroomrent = req.body.newroomrent
   const _id = req.body._id
   try {
      await Room.findById(_id , (error,updatedrent)=>{
         updatedrent.rentperday = newroomrent
         updatedrent.save()
         res.send("updated")
      })
   } catch (error) {
      
   }
})


module.exports=router