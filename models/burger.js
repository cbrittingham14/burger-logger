//import orm module
const orm = require("../config/orm.js");

const burger = {
    getAll: function(cb){
        orm.getAll(r => cb(r));
    },
    devour: function(id, cb){
        orm.devour(id, r => cb(r));
    },
    add: function(burg, cb){
        orm.add(burg, r => cb(r));
    }
};

module.exports = burger;