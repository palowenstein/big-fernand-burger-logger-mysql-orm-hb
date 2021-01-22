const express = require('express');
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require ('../models/burger');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll( result => 
    res.render('index', {burgers: result}))
});

router.post('/burger/insert1', (req, res) => {
    burger.insertOne(req.body.burger_name, 0, result => {
        res.redirect('/');
    });
});

router.post('/burger/update1/:id', (req, res) => {
    burger.updateOne(req.params.id, result => {
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;

// 3. Inside the `burgers_controller.js` file, import the following: Express, `burger.js`.
// 4. Create the `router` for the app, and export the `router` at the end of your file.