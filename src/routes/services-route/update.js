const express = require('express');

const app = express.Router();

const database = require('../../database'); // import database connection


app.use(express.urlencoded());

// retrieve certain user's data
app.get('/:id', function(request, response, next){
    const id = request.params.id; // store the retrieved id/unique key/primary key

    const query = `SELECT * FROM users WHERE id = '${id}'`;

    database.query(query, function(error, data) {
        if(error)
        {
            throw error;
        }
        else
        {
            // send response
            response.render('update', {update:data[0]});
            // i assume that update:data[0] is the index of id column in database???
        }
    });
});


// update user's info
app.post('/update-script/:id', function(request, response, next){

    const id = request.params.id;
    let fname = request.body.fname;
    let lname = request.body.lname;
    let age = request.body.age;
    let gend = request.body.gend;

    const query = `UPDATE users SET fname='${fname}', lname='${lname}', age='${age}', gender='${gend}' WHERE id='${id}'`;
    
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
