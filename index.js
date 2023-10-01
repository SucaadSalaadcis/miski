const express = require("express");
const DB = require("mongoose");
const app = express();
require('dotenv').config();

const dbConnect = require("./dbCon");
dbConnect();

app.use(express.json());


// routes
const commentRoute = require('./routes/commentRoute')
const questionRoute = require('./routes/questionRoute');


/* app.get('/',(req,res)=>{
    res.send("Hello world");
}) */


app.listen(process.env.PORT,()=> console.log("Your Server Started..."));

app.use("/comment",commentRoute);
app.use("/question",questionRoute);

module.exports = app;
