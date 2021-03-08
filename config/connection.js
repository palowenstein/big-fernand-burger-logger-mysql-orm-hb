// Set up MySQL connection (networkOne).
const mysql = require("mysql");

// Heroku Settings (CLEARDB). This bypasses the local db altogether.
let networkOne = mysql.createConnection({
    host: "us-cdbr-east-03.cleardb.com",
    user: "bd5538220a60b5",
    port: 3306,
    password: "Enter CLEARDB Password here",
    database: "heroku_f9724ab1dde3e41"
  });

/* Combined Settings: Heroku (CLEARDB) + Local Settings
let networkOne;

if (process.env.CLEARDB_DATABASE_URL) {

  networkOne = mysql.createConnection({
    host: "us-cdbr-east-03.cleardb.com",
    user: "bd5538220a60b5",
    port: 3306,
    password: "Enter CLEARDB Password here",
    database: "heroku_f9724ab1dde3e41"
  });

} else {

  networkOne = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Enter local db password here",
    database: "bigFernand_db"
  });
*/

  // Make connection.
  networkOne.connect();

  // Export connection (networkOne) for our ORM to use.
  module.exports = networkOne;

// 1. Inside your `burger` directory, create a folder named `config`.
// 2. Create a `connection.js` file inside `config` directory.
//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.
//    * Export the connection.