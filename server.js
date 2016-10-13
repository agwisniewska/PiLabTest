    var express  = require('express');
    var app      = express();                               
    var mongoose = require('mongoose');  
    var mongodb = require('mongodb');                 
    var morgan = require('morgan');           
    var bodyParser = require('body-parser');   
    var methodOverride = require('method-override'); 

    var MongoClient = mongodb.MongoClient;

    var url = 'mongodb://localhost:27017/zadanietestowe';

    // mongoose.connect('mongodb://localhost/myapp');

    app.use(express.static(__dirname + '/'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());


    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            //HURRAY!! We are connected. :)
             console.log('Connection established to', url);



            var collection = db.collection('breadcrumbs');

          
      
       
         }
        });
   
    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");

    app.get('/api/breadcrumbs', function(request, response) {
        response.json(localStorage.getItem('breadcrumbs'));
    });

    app.post('/api/breadcrumbs', function(request, response) {
      console.log(request.body)
      var breadcrumb = request.body;
      // response.json(localStorage.setItem('breadcrumbs', breadcrumb));
    });


