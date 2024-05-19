var express = require('express')

var router = express.Router();


router.route('/').get(function(req,res){
    res.type('text/plain')
    const headers = Object.entries(req.headers)
    .map(([key, value]) => `${key}: ${value}`)
  res.send(headers.join('\n'))
  console.log(req.ip)
})

module.exports = router;
