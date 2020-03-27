//import orm module
const orm = require("../config/orm.js");

//intermediary object connecting controller to the orm
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
//export module
module.exports = burger;