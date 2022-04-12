//Activate SchemaModel
const Task = require('../models/task');
//Activate http-status-code
const {
 StatusCodes
} = require('http-status-codes');
const {
 BadRequestError,
 NotFoundError
} = require('../errors');

//Get All Tasks
const getAllTasks = async (req, res) => {
 try {
  const tasks = await Task.find({});
  res.status(StatusCodes.OK).json({
   tasks
  })
 } catch (error) {
  throw new BadRequestError('Please Double Check Your Data')
 }
}

//Create Single Task
const createTask = async (req, res) => {
 try {
  const task = await Task.create(req.body);
  res.status(StatusCodes.CREATED).json({
   task
  })

 } catch (error) {
  throw new BadRequestError('please Double Check Your Data');

 }
}

// Get Single Task
const getTask = async (req, res) => {
 try {
  const {
   id: taskID
  } = req.params;

  const task = await Task.findOne({
   _id: taskID
  });

  if (!task) {
   res.status(StatusCodes.NOT_FOUND).json({
    msg: `No task with id: ${taskID}`
   })
  }

  res.status(StatusCodes.CREATED).json({
   task
  })

 } catch (error) {
  throw new BadRequestError('Double Check on your taskID')
 }

}

//Update Single Task
const updateTask = async (req, res) => {
 try {
  const {
   id: taskID
  } = req.params;

  const task = await Task.findOneAndUpdate({
   _id: taskID,
  }, req.body, {
   // to stop change the task with empty value
   new: true,
   runValidators: true
  })

  if (!task) {
   res.status(StatusCodes.NOT_FOUND).json({
    msg: `No task with id: ${taskID}`
   })
  }

  res.status(StatusCodes.OK).json({
   task
  })

 } catch (error) {
  throw new BadRequestError('Double Check you TaskID')
 }
}

//Delete Single Task
const deleteTask = async (req, res) => {
 try {
  const {
   id: taskID
  } = req.params;
  const task = await Task.findOneAndDelete({
   _id: taskID
  })

  if (!task) {
   res.status(StatusCodes.NOT_FOUND).json({
    msg: `No Task with id: ${taskID}`
   })
  }
  res.status(StatusCodes.CREATED).json({
   task
  })
 } catch (error) {
  throw new BadRequestError('Double Check Your Data')
 }
}

//Exporting the controller functions
module.exports = {
 getAllTasks,
 createTask,
 getTask,
 updateTask,
 deleteTask
}