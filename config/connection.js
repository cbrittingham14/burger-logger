//import mysql
const mysql = require("mysql");

//code below copied from heroku
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
//code above copied from heroku

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