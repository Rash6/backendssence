const mongoose = require("mongoose");

// USER SCHEMA
// Step 1 :- creating the schema
const menSchema = new mongoose.Schema(
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
  const men = mongoose.model("men",menSchema); // user => users

  module.exports=men;


 
