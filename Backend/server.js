const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require('dotenv');
const {connectDB} = require("./config/db");

//ennv config
dotenv.config();

const app = express()

//routes import
const blogRoutes = require('./routes/blogRoutes')


//connect db
connectDB();

//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev')) // jb url hit hoga vo console pe show krega hehehhe

//routes
app.use("/api/v1/blog", blogRoutes)


app.get("/", (req,res)=>{
    res.status(200).send({
        message : "Node server working",
    });
});

//port 
const PORT = process.env.PORT ||  8080

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})