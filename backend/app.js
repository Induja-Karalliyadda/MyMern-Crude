const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./Model/UserModel"); // Make sure you have the User model in the correct path
const router = require("./Routes/UserRoutes"); // insert route

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/", router);

// Connect to the DB
mongoose
  .connect("mongodb+srv://admin:VRwPd89iaW0dqrd0@cluster0.d0qw4rz.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => console.log(err));

// Login-----------------------------------
const userModel = require('./Model/UserModel'); // Import the model



app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  // Log the data received from the frontend
  console.log("Received data from frontend:", { email, password });
  
  try {
    const user = await userModel.findOne({email});
    if (!user) {
      console.log("User not found for email:", email); // Log when user not found
      return res.json({ status: "error", message: "User not found" });
    }
    
    // Use bcrypt to compare hashed passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      console.log("Password matched for user:", user); // Log when password matches
      return res.json({ status: "ok" });
    } else {
      console.log("Incorrect password for user:", user); // Log when password is incorrect
      return res.json({ status: "error", message: "Incorrect password" });
    }
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});