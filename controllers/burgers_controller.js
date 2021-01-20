// 3. Inside the `burgers_controller.js` file, import the following: Express, `burger.js`.
// 4. Create the `router` for the app, and export the `router` at the end of your file.

const express = require('express');
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require ('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(data => {
      let burgerObject = {
        burgers: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });
  router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name", "eaten_burger"
    ], [
      req.body.burger_name, req.body.eaten_burger], result => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      eaten_burger: req.body.eaten_burger
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use.
module.exports = router;