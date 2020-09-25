var mysql = require('mysql');

var con = mysql.createConnection({
  host: "",
  user: "",
  database : 'db_ragnarok',
  password: ""
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = con;