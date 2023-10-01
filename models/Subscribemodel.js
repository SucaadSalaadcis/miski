const mongoose=require('mongoose');
const Subscribeschema= new mongoose.Schema({
   SubjectID:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"subjectrout"
  },
  userID:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"userrout"
  }

},{timestamps: true})
const subscribemodel=mongoose.model('subscribemodels',Subscribeschema)
module.exports=subscribemodel