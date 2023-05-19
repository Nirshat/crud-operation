const express = require('express');

const app = express.Router();

const database = require('../../database'); // import database connection


app.use(express.urlencoded());

app.get('/', function(request, response, next){
        response.render('create');
});

app.post('/create-script', function(request, response, next){
    let fname = request.body.fname;
    let lname = request.body.lname;
    let age = request.body.age;
    let gend = request.body.gend;

    const query = `INSERT INTO users(fname, lname, age, gender) VALUES ('${fname}', '${lname}', '${age}', '${gend}')`;
    
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


// let query = "INSERT INTO `users`(`fname`, `lname`, `age`, `gender`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]')";