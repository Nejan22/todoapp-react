const { response } = require('express');
const Task = require('./model');


const getTasks = (req,res)=>{
    Task.find()
        .then(response=>{
            res.json({response})
        })
        .catch(error=>{
            res.json({message:error})
        })
}

const addTask = (req,res)=>{
    const newtask = new Task({
        id:req.body.id,
        taskname:req.body.taskname,
    });
    newtask.save()
        .then(response=>{
            res.send({response});
        })
        .catch(error=>{
            res.send({message:error});
        });
};

const updateTask = (req,res)=>{
    const {id,taskname}= req.body;
    Task.updateOne({id:id},{$set:{taskname:taskname}})
        .then(response=>{
            res.json({response});
        })
        .catch(error=>{
            res.json({message:error});
        })
}

const completeTask = (req,res)=>{
    const id = req.body.id;
    Task.deleteOne({id:id})
        .then(response=>{
            res.json({response});
        })
        .catch(error=>{
            res.json({message:error});
        })
}

exports.getTasks = getTasks;
exports.addTask = addTask;
exports.updateTask = updateTask;
exports.completeTask = completeTask;