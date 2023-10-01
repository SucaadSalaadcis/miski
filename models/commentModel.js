const mongoose = require("mongoose");

const commentSche = new mongoose.Schema({
    questionID:{
        type: Number,
    },
    userID: {
        type: Number,
    },
    comment: {
        type: String,
    },
},{timestamps: true});

const commentModel = mongoose.model('comment',commentSche);

module.exports = {
    commentModel
};