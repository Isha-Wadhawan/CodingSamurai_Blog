const mongoose = require("mongoose")

const connectDB = async () =>{

    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB");
    }
    catch(err){
        console.log(`Not connected to DB ${err}`)
    }

}

module.exports = {connectDB};