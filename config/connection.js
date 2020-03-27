//import mysql
const mysql = require("mysql");

//create connection, set database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_db"
});
//connect to db
connection.connect(err =>{
    if(err) throw err;
    console.log("connected at " + connection.threadId);
})
//export module
module.exports = connection;