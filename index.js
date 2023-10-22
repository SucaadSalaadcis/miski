const express = require("express");
const cors = require('cors')
const app = express();
require('dotenv').config();

const dbConnect = require("./dbCon");
dbConnect();

app.use(express.json());
app.use(cors())


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
