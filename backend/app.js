console.log("hi"); //FLWI4zyea0d7vcLH
//(PW)    VRwPd89iaW0dqrd0
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes"); // insert route
const app = express();
const cors = require("cors");//add cors
//Middlewere
app.use(express.json());
app.use(cors());
app.use("/users", router);



//Conect in to the DB
mongoose
  .connect("mongodb+srv://admin:VRwPd89iaW0dqrd0@cluster0.d0qw4rz.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
