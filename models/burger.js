// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm');

// The code below calls the ORM functions using burger specific input for the ORM.
const burger = {
  
  selectAll: (cb) => {
    orm.selectAll("burgers", res => {
      cb(res);
    });
  },

  insertOne: (burger, devoured, cb) => {
    orm.insertOne("burgers", burger, devoured, res => {
      cb(res);
    });
  },

  updateOne: (objColVals, cb) => {
    orm.updateOne("burgers", objColVals, res => {
      cb(res);
    });
  },

};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;