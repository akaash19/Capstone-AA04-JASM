const express = require('express');
const app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "b8e379f3ec9790",
  password: "b150f196",
  database: "heroku_b6b8224d147a38f"
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

