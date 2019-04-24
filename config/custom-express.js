
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors')



module.exports = function(){

    var app = express();

    app.use(bodyParser.json());
    app.use(cors())

    consign()
        .include('controllers')
        .then('models')
        .into(app);

    return app;
};
