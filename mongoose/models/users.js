const mongoose=require("mongoose")
const Schema=mongoose.Schema
const userSchema=new Schema({
    FullName:String,
    Age:Number,
    FavoriteFoods:String
})
module.exports=mongoose.model("User",userSchema)