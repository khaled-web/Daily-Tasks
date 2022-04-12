const mongoose = require('mongoose');

// const connectString = 'mongodb://khaled-86:Esok86921517@nodeexpressprojects-shard-00-00.6dd89.mongodb.net:27017,nodeexpressprojects-shard-00-01.6dd89.mongodb.net:27017,nodeexpressprojects-shard-00-02.6dd89.mongodb.net:27017/DailyTasks?ssl=true&replicaSet=atlas-4f7lmx-shard-0&authSource=admin&retryWrites=true&w=majority'

const connectDB = (url) => {
 return mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
 })
}

module.exports = connectDB;