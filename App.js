const express = require('express');
const questionsController = require('./controller/questions.controller');

//Dotenv config
require('dotenv').config();

const App = express();

//MiddleWare
App.use(express.json());

//Routes
App.use('/api',questionsController);


App.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on HOST http://localhost:${process.env.PORT}`);
})