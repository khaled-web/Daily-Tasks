//installing express-package
const express = require('express');
const router = express.Router();

//importing Controller Filles
const {
 getAllTasks,
 createTask,
 getTask,
 updateTask,
 deleteTask
} = require('../controllers/tasks')

//activate router-property
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').patch(updateTask).get(getTask).patch(updateTask).delete(deleteTask)

//exporting router-property
module.exports = router