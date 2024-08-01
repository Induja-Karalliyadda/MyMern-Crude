const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,//dataType
        require:true,
    },
    gmail:{
        type:String,//dataType
        require:true,
    },
    age:{
        type:Number,//dataType
        require:true,
    },
    address:{
        type:String,//dataType
        require:true,
    },
      
});

module.exports = mongoose.model(
    "UserModel",//file name
    userSchema // function name
)