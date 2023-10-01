const  { commentModel } = require("../models/commentModel");

const { commentValidation } = require("../validation/commentVal");

const error = require('http-errors')

// Get 
const Get = async (req, res) => {
    try {
        const comment = await commentModel.find()
        res.status(200).send(comment);    
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Get by id 
const GetById = async(req,res) =>{
    try {
        let {id} = req.params;
        const findId = await commentModel.findById(id)
        res.status(200).send(findId);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Post
const Post = async (req, res) => {
    try {
        let { error } = commentValidation(req.body)
        if (error) return res.send(error.message)

        let commentObj = new commentModel({
            questionID: req.body.questionID,
            userID: req.body.userID,
            comment: req.body.comment,
        })
        await commentObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: commentObj
        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

}

// Put
const Put = async (req,res)=>{
    const {id} = req.params
    const updateComment = await commentModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateComment})
}

// Delete
const Delete =  async (req,res)=>{
    const id = req.params.id
    const deleteComment = await commentModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteComment})
}

module.exports = {
    Get,
    GetById,
    Post,
    Put,
    Delete
}
