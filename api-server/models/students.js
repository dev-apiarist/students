// let express = require("express");

// const app = express();

// // Mongoose model
// let Student = require("../models/students");
// const students = require("../routes/student-route");
// let studentRoute = express.Router();

// // Get All students
// studentRoute.route("/").get((req, res) => {
//   Student.find((error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// module.exports = studentRoute;

const mongoose = require("mongoose");

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

module.exports = mongoose.model("Student", Student);
