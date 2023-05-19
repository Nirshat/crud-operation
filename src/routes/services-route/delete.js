const express = require('express');

const app = express.Router();

const database = require('../../database'); // import database connection


app.use(express.urlencoded());

app.post('/:id', function(request, response, next){
    const id = request.params.id;
    const query = `DELETE FROM users WHERE id='${id}'`;

    database.query(query, function(error, data){
        if(error){
            throw error;
        }
        else{
            // it means the data has been succesfully stored
            response.redirect("/retrieve");
        }
    })
});

module.exports = app;