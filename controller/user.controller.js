const express = require('express');

const userRouter = express.Router();
const pool = require('../db.js');
const { getUsers } = require('../service/users.services.js');

userRouter.post('/user/validateuser', async (req, res, next)=>{
    try {
        const user = req.body;
        if(Object.keys(user).length == 0){
            throw new Error("user d")
        }
        res.status(200).send(user.id);
        // getUsers()        
        // const users = await pool.query("SELECT * FROM iprepq_users")
        // if(users.rows.length === 0){
        //     throw new Error("No user found")
        // }
        // res.json(users.rows);
    } catch (error) {
        return next(error);
    }
})

module.exports = userRouter;