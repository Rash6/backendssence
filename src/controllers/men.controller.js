const express = require("express");
const app=express();

const Men=require("../models/men.models")


// USERS CRUD
app.get("", async (req, res) => {
    try {
      const men = await Men.find().lean().exec();
  
      return res.status(200).send({ men: men }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message:err.message });
    }
  });
  
  module.exports=app;