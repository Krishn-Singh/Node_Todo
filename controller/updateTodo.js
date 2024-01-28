const Todo = require('../models/todo');

exports.updateTodo = async (req,res) => {
try{
    const {id} = req.params;
    const {title,description} = req.body;

    const todos = await Todo.findByIdAndUpdate({_id:id},
        {title,description,updatedAt:Date.now()},
    )
    res.status(200).json({
        success:true,
        data:todos,
        messsage:`Todo ${id} data updated successfully`
    })
}
catch(error){
    console.error(err);
    res.status(500).json({
            success:false,
            error:err.message,
            message:"server error"
    })
}

}