function soma(a, b) {
    return a + b;
  }

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    return a/b;
}

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultadoSoma = soma(body.a, body.b);
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultadoSoma}`);
});

app.post('/subtracao', function (req, res) {
    var body = req.body;
    var resultadoSub = subtracao(body.a, body.b);
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultadoSub}`);
});

app.post('/multiplicacao', function (req, res) {
    var body = req.body;
    var resultadoMult = multiplicacao(body.a, body.b);
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultadoMult}`);
});

app.post('/divisao', function (req, res) {
    var body = req.body;
    var resultadoDiv = divisao(body.a, body.b);
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultadoDiv}`);
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

