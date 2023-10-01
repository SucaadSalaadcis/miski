const joi = require("joi");

function commentValidation(commentObj){
  let commentVal = joi.object({
    questionID: joi.string().required(),
    userID: joi.string().required(),
    comment: joi.string().required().min(3).max(80),
  })
  return commentVal.validate(commentObj);
}

module.exports = {
  commentValidation
};