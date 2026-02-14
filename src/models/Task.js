const mongoose = require("mongoose")
const User = require("./User")
const Task=new mongoose.Schema({
    title:{type:String,required:true,trim:true},
    description:{type:String,required:true,trim:true},
    status:{type:String,enum:['pending','completed'],default:"pending"},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
},{timestamps:true})

const TaskModel=mongoose.model('Task',Task)
module.exports={task:TaskModel}