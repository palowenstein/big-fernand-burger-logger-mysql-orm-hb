// Set up MySQL connection (network).
const mysql = require("mysql");

let network = mysql.createConnection({
    host: "localhost",
    port: 4000,
    user: "root",
    password: "",
    database: "bigFernand_db;"
  });
  
  // Make connection (network).
  network.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + network.threadId);
  });
  
  // Export connection (network) for our ORM to use.
  module.exports = network;
  
// Note: `let`, is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm.
// It also signals that the variable will be used only in the block it’s defined in, which is not always the entire containing function.

// 1. Inside your `burger` directory, create a folder named `config`.
// 2. Create a `connection.js` file inside `config` directory.
//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.
//    * Export the connection.