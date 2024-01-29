const express = require('express');
const app=express();
const cors = require('cors');
//import config from env file
require('dotenv').config();
const PORT = process.env.PORT || 5000;

//middleware to parse json request body
app.use(express.json())

//import routes fot todo Api
const todoRoutes = require('./routes/todos');

//mount the todo API routes 
app.use("/api/v1",todoRoutes);
  
app.use(express.json()); 

//connect to db
const dbConnect = require('./config/database');
dbConnect(); 

app.listen(PORT, ()=>{ 
console.log(`server has started runniing on ${PORT}` )           
})

//default routes
app.get("/", (req,res) => {
    res.send(`<h1>This is my homepage </h1>`);
})