var express = require('express');
var router = express.Router();
var db = require('../routes/db');

module.exports.getProve = function(req, res, next) {
    console.log("ok");

    var id = 1; //req.params.id; se dovessimo recuperare il parametro id in GEt dall'URL, altrimenti metto solo il codice per effettuare la query
    if(id == 0){
        res.send('Parameter error: invalid parameters');
    }else{
        db.query("SELECT * FROM annotator WHERE id = " + id, function(err, rows, fields) {
            if(err){
                res.send('Query error: ' + err.sqlMessage);
            }else{
                res.json(rows);
    }
    });
    }
};

