const mongoose =require("mongoose");

var mongoURL = 'mongodb+srv://vivek:vivek@cluster0.angr0ky.mongodb.net/mern-rooms'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error',()=>{
    console.log("Data base connection error")
})

connection.on('connected',()=>{
    console.log("connected to data base")
})

module.exports=mongoose