require('express-async-errors');
const express = require('express');
const app = express();

//importing routes
const taskRoutes = require('./routes/tasks')

//importing connectDB
const connectDB = require('./db/connect')

//dotenv...to Run URL at file_connect.js in folder_db
require('dotenv').config();

//middleware...to use req.body
app.use(express.json());
//middleware..."present files"
app.use(express.static('./public/'))


// error handler
// incase of...Route isn't found
const notFoundMiddleware = require('./middleware/not-found');
// incase of...There are an error
const errorHandlerMiddleware = require('./middleware/error-handler');


// extra packages

// routes
// Get All Tasks
app.use('/api/v1/tasks', taskRoutes)
app.use('/api/v1/tasks/:id', taskRoutes)



// ActivateMiddleware...incase of route isn't found
app.use(notFoundMiddleware);
// ActivateMiddleware...incase of there are an error
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 1000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();