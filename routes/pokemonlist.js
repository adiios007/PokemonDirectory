var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/pokemon-list', function(req, res, next) {
    var sql='SELECT * FROM pokemon';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('pokemon-list', { title: 'Pokemon List', pokeData: data});
  });
});

module.exports = router;