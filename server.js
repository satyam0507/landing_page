'use strict';

var express = require('express');
var exphbs = require('express-handlebars');
var route = require('./routes/route.js');

var app = express();

var hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir:'hbs/layouts/',
    partialsDir:['hbs/partials/','hbs/views/partials']
});
app.engine('.hbs',hbs.engine);
app.set('view engine', '.hbs');
app.set('views', 'hbs/views');

app.use(express.static('static/'));



app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})


route(app);