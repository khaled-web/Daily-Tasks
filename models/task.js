const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, 'must provide name'],
  trim: true,
  maxLength: [100, 'name can not be more than 20 characters']
 },

 completed: {
  type: Boolean,
  default: false
 }
})
//exporting the template dataBase
module.exports = mongoose.model('Task', TaskSchema);