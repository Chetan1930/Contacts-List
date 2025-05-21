const express = require("express");
const routes = express.Router();
const User = require('../model/User');



// GET: Render login page
routes.get("/api/login", (req, res) => {
  res.render("login");
});

routes.get("/api/index", (req, res) => {
  res.render("index");
});

// GET: Render register page
routes.get("/api/register", (req, res) => {
  res.render("register");
});

// POST: Handle login form submission
routes.post("/api/login", (req, res) => {
  // handle login logic here...
  console.log(req.body);
  res.redirect("/api/index");
});

// POST: Handle register form submission
routes.post("/api/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    /* const existingUser = await User.findOne({ email });
     if (existingUser) {
       return res.send("User already exists !!");
     }
*/
    const newUser = new User({ username, email, password });
    console.log("->ye h data: ");
    console.log(newUser);
    await newUser.save();

    res.send("ho gya registor");
    /*
    res.redirect("/api/index");
    */
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error h mere bhai");
  }
});


module.exports = routes;
