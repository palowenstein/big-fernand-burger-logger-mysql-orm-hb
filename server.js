const express = require("express");

const path = require('path');

const PORT = process.env.PORT || 4000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('views', './views');
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controllers.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("The Big Fernand Buger Application is executing at localhost:" + PORT);
});

// Except for line 3 (const path) and line 24 ("./controllers/burger_controllers.js"), the code above is extracted from activity #17 / week 13 ("MVC") which was done in class. The var(s) express, PORT, app were converted to const(s).