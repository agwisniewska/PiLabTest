var express = require('express');
var app = express();
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/zadanietestowe';
var breadcrumbs;


app.use(express.static(__dirname + '/'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());


MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);
        breadcrumbs = db.collection('breadcrumbs');

        var breadcrumb1 = {
            name: 'accounts',
            class: 'a',
            icon: 'briefcase',
            title: 'Account',
            titletext: 'Set: Accounts',
            content: 'Type: Deposit',
            additional: 'Age: From 29 years to 80...',
            href: '/#/breadcrumbs/accounts',
            template: 'You are on accounts page. Check console!',

        };
        var breadcrumb2 = {
            name: 'calls',
            class: 'b',
            icon: 'phone',
            title: 'Calls',
            titletext: 'Set: Call',
            content: 'Type: Bussines',
            additional: 'Number: 509 876 345',
            href: '/#/breadcrumbs/calls',
            template: 'You are on calls page',
        };
        var breadcrumb3 = {
            name: 'clients',
            class: 'c',
            icon: 'user',
            title: 'Clients',
            titletext: 'Set: Clients',
            content: 'Name: John Snow',
            additional: '',
            href: '/#/breadcrumbs/clients',
            template: 'You are on clients page',
        };
        var breadcrumb4 = {
            name: 'details',
            class: 'b',
            icon: 'info',
            title: 'Details',
            titletext: 'Set: Details',
            content: 'Details: Add new collection',
            additional: '',
            href: '/#/breadcrumbs/details',
            template: 'You are on details page',
        };
        var breadcrumb5 = {
            name: 'steps',
            class: 'a',
            icon: 'step-forward',
            title: 'Steps',
            titletext: 'Set: Steps',
            content: 'Info: New steps',
            additional: '',
            href: '/#/breadcrumbs/steps',
            template: 'You are on steps page',
        };


        breadcrumbs.find(
            {
                $or: [
                    {name: 'calls'}, {name: 'clients'}, {name: 'steps'}, {name: 'accounts'}, {name: 'details'}
                ]
            }).toArray(function (err, result) {
            if (err) {
                console.log(err);
            } else if (result.length) {
                console.log('Found:', result.length);
            }

            else {
                console.log('No document(s) found with defined "find" criteria!');
                breadcrumbs.insert([breadcrumb1, breadcrumb2, breadcrumb3, breadcrumb4, breadcrumb5], function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Inserted documents into the "breadcrumbs" collection');
                    }
                });
            }

        });
    }
});


app.listen(8080);
console.log("App listening on port 8080");

app.get('/api/breadcrumbs', function (request, response) {
    breadcrumbs.find().toArray(function (err, result) {
        if (err) {
            console.log(err);
        } else if (result.length) {
            response.json(result);
        } else {
            console.log('No document(s) found with defined "find" criteria!');
        }
    });
});

app.post('/api/breadcrumbs', function (request, response) {
    var breadcrumb = request.body;
    breadcrumbs.insert({
        "name": breadcrumb.name,
        "class": breadcrumb.class,
        "icon": breadcrumb.icon,
        "title": breadcrumb.title,
        "titletext": breadcrumb.titletext,
        "content": breadcrumb.content,
        "additional": breadcrumb.additional,
        "href": breadcrumb.href,
        "template": breadcrumb.template
    })
});


