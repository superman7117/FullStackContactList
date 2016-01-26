var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */

router.get('/:index', function(req,res){
  // console.log('here', req.params.index)
  fs.readFile('./users.json', function(err, data){
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    var index = req.params.index;
    var indexed = arr[index];
    console.log("\n\nINDEXXXXED", indexed)
    res.render('users', {title: "User Page", index: indexed})
  })
})
router.get('/', function(req,res){
  fs.readFile('./users.json', function(err, data){
    if(err) return res.status(400).send(err);
    var arr = JSON.parse(data);
    console.log("arr",arr)
    res.render('addUsers', {title: "User Listing", user: arr})
  })
})

router.post('/adduser', function(req, res, next) {
  console.log(req.body)
  fs.readFile('./users.json', function(err, data){
    if(err) return res.status(400).send(err);
  //   console.log(data);
    var arr = JSON.parse(data);
    var user = req.body.newUser;
    var email = req.body.newEmail;
    var phone = req.body.newPhone;
    arr.push({
      user: user,
      email: email,
      phone: phone,
    });
    console.log("ARRR", arr);
    fs.writeFile('./users.json', JSON.stringify(arr),function(err){
      if(err) return res.status(400).send(err);
      res.send('This fucking happened!')
    })
  })
});
router.post('/remove/:index', function(req, res, next) {
  console.log(req.body)
  fs.readFile('./users.json', function(err, data){
    if(err) return res.status(400).send(err);
  //   console.log(data);
    var arr = JSON.parse(data);
    var index = req.params.index;
    console.log('\n\n!!!!!!!!',index);
		var removed = arr.splice(index, 1);
		fs.writeFile('./users.json', JSON.stringify(arr), function(err, data) {
			if (err) return res.status(400).send(err);
      res.send('This fucking happened!')
    })
  })
});

// router.get('/', function(req, res){
//   res.render('users')
// })

module.exports = router;
