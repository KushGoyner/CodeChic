const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
      
  },
  { timestamps: true }
);

mongoose.models = {}

export default mongoose.model("User",UserScheme);