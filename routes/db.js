var config = require('../routes/config');
var mysql = require('mysql');

var conn = mysql.createConnection({
    host     : config.dbhost,
    user     : config.dbusername,
    password : config.dbpassword,
    database : config.db
});

module.exports = conn;
