var express = require ('express');
var CodeBreaker = require ('./main');

var app = express();
//para heroku
app.set('port', (process.env.PORT || 3000));
app.get('/setSecret/:secret', function(req, res){
  number = req.params.secret;
  CodeBreaker.setSecret(number);
  res.send({message: 'ok, let the game begin'})
});

app.get('/guess/:number', function(req, res){
  number = req.params.number;
  let result =CodeBreaker.codeBreaker(number);
  res.send({message:result })
});

app.listen(app.get('port'),function(){
  console.log('Node app listening');
});

module.exports = app;
