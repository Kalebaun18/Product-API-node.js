const express = require("express");
const mongo = require("./db/conn");
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;


app.get("/",(req,res) => {
    res.send(" Home Page");
});

const prd = require("./routes/product");
app.use("/product", prd);

if(mongo){
    app.listen(port,()=> {
        console.log('connection is setup at' ,port);
    });
}
