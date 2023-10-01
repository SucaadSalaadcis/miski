const mongoose=require('mongoose');
const fovschema= new mongoose.Schema({
   userID:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"userrout"
  },
  QuestionID:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"questionRoute"
}
},{timestamps: true})
const fovmodel=mongoose.model('fovaritemodel',fovschema)
module.exports=fovmodel