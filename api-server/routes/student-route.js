const mongoose = require("mongoose");
const { nextTick } = require("process");
const students = require("../models/students");

const Schema = mongoose.Schema;
// Define collection and schemalet
Student = new Schema(
  {
    name: { type: String },
    email: { type: String },
    cohort: { type: String },
    phoneNumber: { type: Number },
  },
  { collection: "students" }
);

// mongoose functions 

// create(), findById(), findByIdAndUpdate(), findOneAndRemove()

studentRoute('/create').get(req,res) =>{
  Student.create((error, data)) =>{
    if(error){
      return next(error)

    }else{
      res.json(data)
    }
  }
}
module.exports = mongoose.model("Student", Student);
