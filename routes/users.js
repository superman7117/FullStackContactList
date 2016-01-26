var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */

router.get('/', function(req,res){
  fs.readFile('./users.json', function(err, data){
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    var index = req.body;
    console.log(arr)
    res.render('addUsers', {title: "User page", user: arr})
  })
})

router.post('/', function(req, res, next) {
  fs.readFile('./users.json', function(err, data){
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    var user = req.body.newUser;
    arr.push({user: user});
    fs.writeFile('./users.json', JSON.stringify(arr),function(err){
      if(err) return res.status(400).send(err);
      res.send('This fucking happened!')
    })
  })
});

module.exports = router;
