const express = require('express'); 
const router = express.Router();

// import controller
const {createTodo} = require('../controller/createTodo');
//import gettodo controller 
const {getTodo} = require('../controller/getTodo');
// import update controller 
const {updateTodo} = require('../controller/updateTodo');
// import delete controller
const {deleteTodo} = require('../controller/deleteTodo')

//define api routes 
//mapped route with createtodo controller in below line
router.post('/createTodo',createTodo);
//route for get todo
router.get('/getTodo', getTodo)
//get todo by id
router.get('/getTodo/:id', getTodo)
//route for update todo
router.put('/updateTodo/:id', updateTodo)
// route for delete
router.delete('/deleteTodo/:id',deleteTodo)

module.exports = router;