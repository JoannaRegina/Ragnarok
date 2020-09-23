var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database : 'db_ragnarok',
  password: "bcd127"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = con;