const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('ZdraVO svete!')
});

app.listen(port, function() {
  console.log(`Aplikacija pokrenuta na portu ${port}!`)
});