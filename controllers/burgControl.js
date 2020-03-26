const express = require("express");
const burg = require("../models/burger.js");

var router = express.Router();

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

router.get("/api/devour/:id", function( req, res){
    const id = req.params.id;
    console.log("id in /api/devour ", id);
    res.json("we responded");
})


module.exports = router;