const express = require("express");
const burg = require("../models/burger.js");

var router = express.Router();

module.exports = router;

router.get("/", function(req,res){
    console.log("it worked");
    burg.getAll(data =>{
        console.log("our data: ", data);
        let burgObj = {
            burgers: data
        };
        res.render("index", burgObj);
    });
});