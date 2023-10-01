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
const subrout = require('./routes/subjectrout')
const route = require('./routes/userrout');
const subscribe=require('./routes/Subscriberotes')
const fav=require('./routes/Fouvfireroute')


/* app.get('/',(req,res)=>{
    res.send("Hello world");
}) */
app.listen(process.env.PORT,()=> console.log("Your Server Started..."));
app.use("/comment",commentRoute);
app.use("/question",questionRoute);
app.use("/subject",subrout);
app.use("/User",route);
app.use('/subscribemodels',subscribe)
app.use('/fovaritemodel',fav)

module.exports = app;
