// to connect database with node 
const mongoose = require('mongoose');

//to access .env file data
require('dotenv').config();

// function work is to establish connection b/w app and dB 
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    // it returns a promise
    .then(()=> console.log('Database connnection successfull'))
    .catch((error)=> {
        console.log('error in establising connection')
        console.log(error.message)
        process.exit(1);
    })
}
module.exports = dbConnect;