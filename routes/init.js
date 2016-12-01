'use strict';
var exphbs = require('express-handlebars');
var route = require('./route.js');
var routeErr = require('./routeErr.js');

module.exports = function (app) {

    var hbs = exphbs.create({
        defaultLayout: 'main',
        extname: '.hbs',
        layoutsDir: 'hbs/layouts/',
        partialsDir: ['hbs/partials/', 'hbs/views/partials']
    });
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
    app.set('views', 'hbs/views');

    route(app);

    routeErr(app);

};