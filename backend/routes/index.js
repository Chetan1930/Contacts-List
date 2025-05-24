const express = require("express");
const routes = express.Router();
const User = require('../models/User');



// GET: Render login page
/*
routes.get("/api/login", (req, res) => {
  res.render("login");
});

routes.get("/api/index", (req, res) => {
  res.render("index");
});



// POST: Handle login form submission
routes.post("/api/login", (req, res) => {
  // handle login logic here...
  console.log(req.body);
  res.redirect("/api/index");
  });
  
  */
 
 // GET: Render register page
 routes.get("/api/register", (req, res) => {
   res.render("register");
 });

 // POST: Handle register form submission
 routes.post("/api/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newUser = await User.create({ username, email, password });
    console.log(newUser);
    res.status(201).json({ message: 'Info saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error h mere bhai");
  }
});

module.exports = routes;
