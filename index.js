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

const corsOptions = {
    origin: 'http://localhost:8080',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  };
  
  app.use(cors(corsOptions));
  app.use(express.json()); 

app.listen(PORT, ()=>{ 
console.log(`server has started runniing on ${PORT}` )           
})
  app.options('/api/v1/createTodo', cors());
//connect to db
const dbConnect = require('./config/database');
dbConnect();

//default routes
app.get("/", (req,res) => {
    res.send(`<h1>This is my homepage </h1>`);
})