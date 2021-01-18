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
  



// 1. Inside your `burger` directory, create a folder named `config`.
// 2. Create a `connection.js` file inside `config` directory.
//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.
//    * Export the connection.
// 3. Create an `orm.js` file inside `config` directory.
//    * Import (require) `connection.js` into `orm.js`
//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`
//    * Export the ORM object in `module.exports`.