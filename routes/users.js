var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */

router.get('/', function(req,res){
  console.log("\n\nINDEXXXXED", req.body.newUser)
  fs.readFile('./users.json', function(err, data){
    // if(err) return res.status(400).send(err);
    // var arr = JSON.parse(data);
    // var index = req.body;
    // var indexed = arr[index];
    res.render('./users', {title: "User Page"})
  })
})


module.exports = router;
