
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

//code below copied from heroku
router.get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  //code above copied from heroku

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