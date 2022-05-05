const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
       "mongodb+srv://admin:admin@cluster0.8dj0b.mongodb.net/ssense?retryWrites=true&w=majority"
    );
  };

  module.exports=connect;