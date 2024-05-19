const express = require('express')

var router = express.Router();

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const conn = require('./database_connection');
const { use } = require('./admin');

// User Registration    :

router.route('/register').post(function(req,res){
    try{
        const{username,password} = req.body
        const hashedPassword = bcrypt.hash(password,10);
        const query = `INSERT INTO User(user_name,password) VALUES ('${username}','${password}');`
        conn.query(query, (err,data)=>{
            if (err) return res.json(err)

            return res.json(data)
        })
    }
    catch(error){

    }
})

// Authentication   :

router.route('/login').post(async function(req,res){
    try{
        
        const{username,password} = req.body
        //const query = `SELECT * FROM User WHERE user_name = '${username}'`
        let user = [];
        return new Promise((resolve, reject)=>{
            conn.query(`SELECT * FROM User WHERE user_name = '${username}'`,  (error, elements)=>{
                if(error){
                    return reject(error);
                }
                user = elements;
                return resolve(elements);
                
            });
        }).then(()=>{
            console.log(user.length)
        if(user.length === 0){
            res.json({ error: 'Authentication failed' })
        }else if(user != null){
            const token = jwt.sign({ userId: user._id }, ',Bzbxr2_b#wHpgt', {
                expiresIn: '1h',
                });
            res.json({ token })
        }
        })
        
    }catch(err){

    }
})
module.exports = router;