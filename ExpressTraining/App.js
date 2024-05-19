var express = require('express')
var admin = require('./admin')
var headrs = require('./headers')
var cors = require("cors")
const bodyParser = require('body-parser');

const mysql = require('mysql2')

var authentication = require('./basic_auth')
var verifyToken = require('./verify_token')
var app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.json());
app.use(bodyParser.raw());


app.use(cors())
app.use('/admin',verifyToken,admin)
app.use('/auth',authentication)
app.use('/headers',headrs)
var port = 4000

app.listen(port,function(){
    console.log('Running Server.;')
})