const mongoose=require("mongoose")


module.exports=connectDb=async()=>{
    try {
        await mongoose.connect(process.env.db)
        console.log("Database is Successfully connect")
    } catch (error) {
        console.log(error.message)
    }
}