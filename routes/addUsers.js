var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */

router.get('/', function(req,res){
  fs.readFile('./users.json', function(err, data){
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    console.log("arr",arr)
    res.render('addUsers', {title: "User Listing", user: arr})
  })
})

router.post('/', function(req, res, next) {
  console.log(req.body)
  fs.readFile('./users.json', function(err, data){
    if(err) return res.status(400).send(err);
  //   console.log(data);
    var arr = JSON.parse(data);
    var user = req.body.newUser;
    arr.push({user: user});
    console.log("ARRR", arr);
    fs.writeFile('./users.json', JSON.stringify(arr),function(err){
      if(err) return res.status(400).send(err);
      res.send('This fucking happened!')
    })
  })
});

module.exports = router;
