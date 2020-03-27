
//import modules, instantiate router
const express = require("express");
const burg = require("../models/burger.js");
const router = express.Router();

//set default route to return all burgers from db
router.get("/", function(req,res){
    console.log("it worked");
    burg.getAll(data =>{
        //make object from response from db
        let burgObj = {
            burgers: data
        };
        //let handlebars render the burger object
        res.render("index", burgObj);
    });
});

//route for changing a burgers state to devoured
router.get("/api/devour/:id", function( req, res){
    const id = req.params.id;
    console.log("id in /api/devour ", id);
    burg.devour(id, result => {res.json(result)});
});

//route for adding a burger to the list
router.post("/api/devour/", function(req, res){
    burg.add(req.body, result => res.json(result));
})

//export module
module.exports = router;