//import orm module
const orm = require("../config/orm.js");

const burger = {
    getAll: function(cb){
        orm.getAll(r=> {
            cb(r);
        });
    },
};

module.exports = burger;