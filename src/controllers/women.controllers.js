const express = require("express");
const app=express();

const Women=require("../models/women.models")


// USERS CRUD
app.get("", async (req, res) => {
    try {
      const women = await Women.find().lean().exec();
  
      return res.status(200).send({ women: women }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  
  module.exports=app;