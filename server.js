const express = require('express');
const app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "bc2b6d33a1bb4f",
  password: "e46585b9",
  database: "heroku_eb75923b7ca9e4b"
});
con.connect();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 
'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT);

