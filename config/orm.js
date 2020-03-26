//Import module for mysql connection
const c = require("../config/connection.js");

const orm = {
    getAll: function(cb){
        let q = "SELECT * FROM burgers;"
        c.query(q, (err, result)=>{
            if(err) throw err;
            cb(result);
        });
    },
    devour: function(id, cb){
        let q = "UPDATE burgers SET devoured = true WHERE id = " + id;
        c.query(q, (err, result)=>{
            if(err) throw err;
            cb(result);
        })
        
    }
};

module.exports = orm;