const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    database:'crud_node',
    user:'iamthedev',
    password:'orenodatabase69'
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