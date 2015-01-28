var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('hello world');
});


app.get('/nickname', function(request, response){
    response.send('smoggy bison');
});

app.listen(process.env.PORT || 4000);