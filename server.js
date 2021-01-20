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
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set('views', './views');
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start Server
app.listen(PORT, () => {
  console.log("The Big Fernand Burger Application is executing at localhost:" + PORT);
});