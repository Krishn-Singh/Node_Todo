//import todoSchema
const Todo = require('../models/todo');

//define route handler
exports.createTodo = async (req,res) => {
    try {

        //extract title and description from request body
        const {title,description} = req.body; // here data is fatched 
        //create a new Todo object and insert in DB.
        // create method is used to insert 
        const response = await Todo.create({title,description}); // here data is inserted

        // send a json rersponse with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Data entered successfully"
            }
        );
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
        ); 

    }
} 