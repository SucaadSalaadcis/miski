const joi = require("joi");

function questionValidation(questionObj){
    const questionVal = joi.object({
    post: joi.string().required().min(3).max(90),
    subjectID: joi.string().required(),
    userID: joi.string().required()

    })
    return questionVal.validate(questionObj);

}
module.exports = {
    questionValidation
}