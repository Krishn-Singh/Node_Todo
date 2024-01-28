//impoirt schema model to work on it
const Todo = require('../models/todo');

exports.getTodo =  async (req,res)=> {
    try {
         // fetch all todo item from database 
         const todos = await Todo.find({});
         //response
         res.status(200).json({
            success: true,
            data:todos,
            message:'Entire todo data is fetched'
         })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
                success:false,
                error:err.message,
                message:"server error"
        })

    }

}
exports.getToDobyId = async (req,res) => {
  try{  // extracting id to extract items on basis of id
    const id = req.params.id;
    const todos = await Todo.findById({_id:id})

    //data for given id is not found
    if(!todos) {
        return res.status(404).json({
            success:true,
            message:"No Data fopund with given Id"
        })
    }
    res.status(200).json({
        success:true,
        data:todos,
        message:`Todo ${id} data successfully fetchefdc `
    })
  }
catch(err){
    console.error(err);
    res.status(500).json({
            success:false,
            error:err.message,
            message:"server error"
    })
}
}