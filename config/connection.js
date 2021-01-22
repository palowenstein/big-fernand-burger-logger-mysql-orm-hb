// Set up MySQL connection (networkOne).
const mysql = require("mysql");

// Heroku Settings


mysql://bd5538220a60b5:b9636c76@us-cdbr-east-03.cleardb.com/heroku_f9724ab1dde3e41?reconnect=true

let networkOne;

if (process.env.CLEARDB_DATABASE_URL) {
  networkOne = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
  networkOne = mysql.createConnection({
    host: "us-cdbr-east-03.cleardb.com",
    port: 3306,
    user: "bd5538220a60b5",
    password: "b9636c76",
    database: "heroku_f9724ab1dde3e41"
  });
    
// Make connection.
  networkOne.connect();


/* // Local Settings
  let networkOne = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Insert your local password here",
    database: "bigFernand_db"
  });
  
//  Make connection (networkOne).
  networkOne.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + networkOne.threadId);
  }); */


  // Export connection (networkOne) for our ORM to use.
  module.exports = networkOne;
  
// Note: `let`, is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm.
// It also signals that the variable will be used only in the block it’s defined in, which is not always the entire containing function.

// 1. Inside your `burger` directory, create a folder named `config`.
// 2. Create a `connection.js` file inside `config` directory.
//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.
//    * Export the connection.