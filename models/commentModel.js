const mongoose = require("mongoose");

const commentSche = new mongoose.Schema({
    questionID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"questionRoute"
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"userrout"
    },
    comment: {
        type: String,
    },
},{timestamps: true});

const commentModel = mongoose.model('comment',commentSche);

module.exports = {
    commentModel
};