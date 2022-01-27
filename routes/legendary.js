var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('', function(req, res, next) {
    var sql='SELECT * FROM pokemon where legendary="True"';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('legendary', { title: 'Pokemon Legend', pokeData: data});
  });
});
module.exports = router;