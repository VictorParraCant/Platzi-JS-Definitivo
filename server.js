var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', { title: 'Plaztigram' })
})

app.get('/signup', function(req, res) {
  res.render('index', { title: 'Plaztigram - Signup' })
})

app.get('/signin', function(req, res) {
  res.render('index', { title: 'Plaztigram - Signin' })
})

app.listen(3000, function(err) {
  if (err) return console.log('Error!'), process.exit(1);
  console.log('Server escuchando en el puerto 3000')
})
