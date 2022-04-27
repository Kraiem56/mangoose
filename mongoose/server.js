const express=require("express");
const app=express();
require("dotenv").config({path:"./config/.env"})
const connectDb=require("./config/connectDB");
const User = require("./models/users");
connectDb();
const Users=require('./models/users');
app.use(express.json());
const PORT=process.env.PORT || 3000
    app.post("/post",async(req,res)=>{
        const { FullName,Age,FavoriteFoods}=req.body
        try {
            const newUser=new Users({
                FullName,Age,FavoriteFoods
            })
            await newUser.save()
            res.send(newUser)
        } catch (error) {
            console.log(error)
        }
    });
    app.get("/get",async(req,res)=>{
         
        try {
             const Users= await users.find(req.params.id)
             res.send(Users)
        } catch (error) {
            console.log(error)
        }
    });
    app.get("/get/:id",async(req,res)=>{
         
        try {
             const TheUsers= await users.findById(req.params.id)
             res.send(TheUsers)
        } catch (error) {
            console.log(error)
        }
    });
    app.delete("/delete/:id",async(req,res)=>{
         
        try {
             const DeletedUsers= await users.findByIdAndDelete(req.params.id)
             res.send("the user is deleted")
        } catch (error) {
            console.log(error)
        }
    });
    app.put("/edit/:id",async(req,res)=>{
         
        try {
             const editUsers= await users.findByIdAndUpdate(req.params.id,{...users.body},{new:true})
             res.send(editUsers)
        } catch (error) {
            console.log(error)
        }
    });








app.listen(PORT,err=>err
    ?console.log(err)
    :console.log(`server is successfully running on port ${PORT}`))