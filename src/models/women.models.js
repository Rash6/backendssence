const mongoose = require("mongoose");

// makeup SCHEMA
// Step 1 :- creating the schema
const womenSchema = new mongoose.Schema(
    { 
      id:{type:Number,required:true},
      img:{type:String,required:true},
      name:{type:String,required:true},
      desc:{type:String,required:true},
      price:{type:String,required:true}
     
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // Step 2 : creating the model
  const women = mongoose.model("women",womenSchema); // user => users

  module.exports=women;
