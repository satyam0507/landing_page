'use strict';

module.exports = function(app){
    app.use(function(req,res,next){
        
        if(req.accepts('html')==='html'){
            res.render('home');
            return;
        }
        if(req.accepts('json')==='json'){
            res.render('anything');
            return;
        }
        next();
    });
    app.use(function(err,req,res,next){
        console.log('err' +err.stack);
        res.status(500).send('Some error on our side sorry for that now i know that what is the err i will fix that ');
    });
}