const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("bodyParser");
const path = require("path");
const studentRoute = require("./routes/student-route");

// Mongoose connect
mongoose
  .connect("mongodb://127.0.0.1:27017/students")
  .then((x) => {
    console.log(
      `Connected to MongoDB Successfully! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongodb", err.reason);
  });

// Express app

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);

// route middleware
app.use("/api", studentRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => console.log(`Listening on ${port}..`));
