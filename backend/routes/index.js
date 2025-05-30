const express = require("express");
const routes = express.Router();
const User = require('../models/User');



/* starting from here i will write the production code.... */ 

routes.get('/contacts', async (req,res)=>{
  try{
      const allData= await User.find();
      res.json(allData);

  }
  catch(err){
    ()=>console.error("kuch toh dikkat ho rhi h fetch krne mei ",err)
  }
});

routes.get('/contacts/:id', async (req,res)=>{
  try{
      const allData= await User.find({_id: req.params.id});
      if(allData.length === 0){
        return res.status(404).json({message: "ye contact toh h hi nhi database mei"});
      }       
      res.json(allData);

  }
  catch(err){
    ()=>console.error("kuch toh dikkat ho rhi h fetch krne mei ",err)
  }
});



routes.post("/contacts", async (req, res) => {
  
  try {
    const { username, email, phone } = req.body;

    if (!username || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if(User.find({email})){
      console.log("duplicate Exists");
      return res.status(401).json({error:"Duplicate ho gya ye toh "});
    }

    const newUser = await User.create({ username, email, phone });
    console.log(newUser);
    res.status(201).json({ message: 'Info saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send("contact save nhi ho pa rhe h ");
  }

  });
  

 // POST: Handle register form submission
 routes.put("/contacts/:id", async (req, res) => {
  try {
    const { username, email, phone } = req.body;

    const updateContact = await User.findByIdAndUpdate(
      req.params.id,
      { username, email, phone },
      { new: true, runValidators: true }
    );

    if (!updateContact) {
      return res.status(404).json({ message: "ye contact toh h hi nhi database mei" });
    }

    res.status(200).json(updateContact);  
  } catch (err) {
    res.status(500).json({ message: "Update nhi ho pa rha hain", err });
  }
});


routes.delete('/contacts/:id', async(req,res)=>{
  try{
    const deletedContact = await User.findByIdAndDelete(req.params.id);

    if(!deletedContact){
      return res.status(404).json({message: "ye contact toh nhi database mei "});
    }

    res.status(200).json({message: "ho gya bhai delete"});
  }
  catch(err){
     res.send(500).json({message: "Delete nhi ho pa rha hain",err})
  }
});

module.exports = routes;
