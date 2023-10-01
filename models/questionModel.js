const mongoose = require("mongoose");

const questionSche = new mongoose.Schema({
    post:{
        type: String,
    },
    subjectID:{
        type: Number,
    },
    userID:{
        type: Number,
    }

},{timestamps: true});

const questionModel = mongoose.model('question', questionSche);

module.exports = {
    questionModel
};