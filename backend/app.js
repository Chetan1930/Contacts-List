const { config } = require('dotenv');
const express=require('express')
const mongoose=require('mongoose')
const app=express()
const routes=require('./routes/index.js');
const path=require('path');

config();  // This actually loads the .env variables


const connection=require('./db/connection');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
connection();
app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views')); 



app.use('/',routes);
app.listen(3000,()=>console.log("Server started "));


