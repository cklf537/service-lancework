const express = require('express');
const questionsController = require('./controller/questions.controller');
const cors = require('cors');
const errorHandlerMW = require('./middleWare/errorHandlerMilldeWare');
const { getUsers } = require('./service/users.services');
const userController = require('./controller/user.controller');

//Dotenv config
require('dotenv').config();

const App = express();

//MiddleWare
App.use(express.json());
App.use(cors());


//Routes
App.use('/api',questionsController);
App.use('/api',userController);



App.use(errorHandlerMW);
App.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on HOST http://localhost:${process.env.PORT}`);
})