var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Ey!');
})

app.listen(3000, function(err) {
  if (err) return console.log('Error!'), process.exit(1);
  console.log('Corriendo en el puerto 3000')
})
