const express = require('express');

const app = express.Router();

const database = require('../../database'); // import database connection


app.use(express.urlencoded());

app.get('/', function(request, response, next){
    let query = "SELECT * FROM users ORDER BY fname";
    database.query(query, function(error, data){
        if(error)
        {
            throw error;
        }
        else
        {
            response.render('retrieve', {retrieve:data});
        }
    });
});

module.exports = app;