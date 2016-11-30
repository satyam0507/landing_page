'use strict';

var express = require('express');
var init = require('./routes/init.js');

var app = express();

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.use(express.static('static/'));

init(app);
