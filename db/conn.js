const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((e)=> {
    console.log(e);
})