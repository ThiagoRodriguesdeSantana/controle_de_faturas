var app = require('./config/custom-express')();
// eslint-disable-next-line no-unused-vars
var mongoose = require('./config/mongoose.js');

app.listen(3000,function(){
    // eslint-disable-next-line no-console
    console.log('Servidor rodando na porta 3000');
});

