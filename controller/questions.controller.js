const express = require('express');

const router = express.Router();
const pool = require('../db.js');

//Get all questions from the DB
router.get('/questions', async (req, res, next)=>{
    try {
        const users = await pool.query("SELECT * FROM iprepq_users")
        res.json(users.rows);
    } catch (error) {
        return next(error);
    }
})

//POsT
router.post('/questions', async (req, res, next)=>{
    const getUser = ()=> undefined;
    try {
        const user = getUser();
        if(!user){
            throw new Error("Data Not found")
        }
        return res.status(200).json({'data':'questions'});
    } catch (error) {
        return next(error);
    }
})

//Delete
router.delete('/questions/:id', async (req, res)=>{
    res.json({'name':`${req.body.name}`});
})

//Update
router.patch('/questions/:id', async (req, res)=>{
    res.json({'data':'questions'});
})

module.exports = router;