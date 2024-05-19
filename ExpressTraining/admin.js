var express = require('express')
var router = express.Router()
var ProductModel = require('./Product')
const conn = require('./database_connection')
  
var products = require('./products')
router.route('/')
   .post(function(req,res){
     res.send(req.body)
   })

router.route('/products').get(function(req,res){
    console.log(req.headers)
    res.send(JSON.stringify(products))
})
router.route('/getclient').get(function(req,res){
    console.log(req.headers.authorization)
    let query = 'SELECT * FROM Client;'
    conn.query(query, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
    
})
router.route('/addclient').post(function(req,res){
  console.log(req)
  let first_name = req.body.first_name
  let last_name = req.body.last_name
  let query = `INSERT INTO client(first_name,last_name) VALUES('${first_name}','${last_name}')`
  conn.query(query, (err,data)=>{
    if(err) return res.json(err);
    return res.json(data)
})
})
router.route('/setclient').put(function(req,res){
  console.log(req)
  let id = req.body.ID
  let newFirstName = req.body.new_first_name
  let query = `UPDATE Client SET first_name = ${newFirstName} WHERE id = ${id}`;
  conn.query(query,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})
router.route('/testreq').post(function(req,res){
  const data = req.body
  res.send(data)
})

module.exports = router