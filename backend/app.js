require('dotenv').config();
const express=require('express')
const app=express();
exports.app = app;
const routes=require('./routes/index');
const path=require('path');

const connection=require('./db/connection');
connection();
app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views')); 



app.use('/',routes);
app.listen(3000,()=>console.log("Server started "));


