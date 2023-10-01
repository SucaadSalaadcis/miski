const mongoose = require("mongoose");

const questionSche = new mongoose.Schema({
    post:{
        type: String,
    },
    subjectID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subjectrout"
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"userrout"
    }

},{timestamps: true});

const questionModel = mongoose.model('question', questionSche);

module.exports = {
    questionModel
};