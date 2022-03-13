var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Zdravo svete!');
})

var server = app.listen(5555, function () {
   var port = server.address().port
   
   console.log("Primer apliakcije koja slusa na portu %s", port)
})