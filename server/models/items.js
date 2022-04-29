const  mongoose  = require("mongoose");

const ItemsSchema =  new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
})

const items = mongoose.model("Items",ItemsSchema);
module.exports = items;