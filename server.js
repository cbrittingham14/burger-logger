// import modules
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgControl.js");

//set port for heroku || local
const PORT = process.env.port || 8080;

//instantiate express and apply settings
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//set routes
app.use(routes);

//tell server to listen
app.listen(PORT, ()=>{
    console.log("listening on localhost:" + PORT);
});