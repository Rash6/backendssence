const express = require("express");
const cors=require("cors")
const mongoose = require("mongoose");
const port=process.env.PORT || 8000;
const connect=require("./configs/db");

const men=require("./models/men.models.js");
const women=require("./models/women.models.js");
const everything=require("./models/everything.models.js");



const mencontroller=require("./controllers/men.controller.js")
const womencontroller=require("./controllers/women.controllers.js")
const everythingcontroller = require("./controllers/everything.controllers.js");




const app = express();

app.use(express.json());
app.use(cors());

app.use("/mens",mencontroller);
app.use("/womens",womencontroller);
app.use("/everythings", everythingcontroller);



module.exports = app;






app.listen(port,async()=>{
    try{
        await connect();
    }
    catch(err){
        console.log(err)
    }

    console.log(`listening on port ${port}`)
   
})