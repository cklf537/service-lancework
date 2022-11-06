const express = require('express');

const router = express.Router();

//Get all questions from the DB
router.get('/questions',(req, res)=>{
    res.json({'data':'questions'});
})

//POsT
router.post('/questions',(req, res)=>{
    res.json({'data':'questions'});
})

//Delete
router.delete('/questions/:id',(req, res)=>{
    res.json({'name':`${req.body.name}`});
})

//Update
router.patch('/questions/:id',(req, res)=>{
    res.json({'data':'questions'});
})

module.exports = router;