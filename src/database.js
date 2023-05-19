const mysql = require('mysql');

const db = mysql.createConnection({
    host:'', // localhost for scratch
    database:'', // database name
    user:'', // username in xampp phyMyAdmin or any database application
    password:'' // password in xampp phpMyAdmin or any database application
});



db.connect(function(error){
    if(error)
    {
        throw error;
    }
    else
    {
        console.log('MySQL DB connected successfully! :)');
    }
});

module.exports = db;
// allows you to access/use this code/script from other files
