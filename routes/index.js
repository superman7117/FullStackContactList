var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */

router.get('/', function(req,res){
    res.render('./index', {title: "Add Users"})
})


module.exports = router;
