// import modules
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgControl.js");

const PORT = process.env.port || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//set routes
app.use(routes);

app.listen(PORT, ()=>{
    console.log("listening on localhost:" + PORT);
});