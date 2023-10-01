const  { questionModel } = require("../models/questionModel");

const { questionValidation } = require("../validation/questionVal");

const error = require('http-errors')

// Get 
const Get = async (req, res) => {
    try {
        const question = await questionModel.find()
        res.status(200).send(question);   
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Get by id 
const GetById = async(req,res) =>{
    try {
        let {id} = req.params;
        const findId = await questionModel.findById(id)
        res.status(200).send(findId);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Post 
const Post = async (req, res) => {
    try {
        let { error } = questionValidation(req.body)
        if (error) return res.send(error.message)

        let questionObj = new questionModel({
            post: req.body.post,
            subjectID: req.body.subjectID,
            userID: req.body.userID,
        })
        await questionObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: questionObj
        })

    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

}

// Put
const Put = async (req,res)=>{
    const {id} = req.params
    const updateQuestion = await questionModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateQuestion})
}

// Delete
const Delete =  async (req,res)=>{
    const id = req.params.id
    const deleteQuestion = await questionModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteQuestion})
}

module.exports = {
    Get,
    GetById,
    Post,
    Put,
    Delete
}
