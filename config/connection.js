// Set up MySQL connection (networkOne).
const mysql = require("mysql");

/* Combined Settings: Heroku (JAWSDB) + Local Settings*/
let networkOne;

if (process.env.JAWSDB_URL) {
  networkOne = mysql.createConnection({
    host: "klbcedmmqp7w17ik.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "Enter JAWSDB username here",
    port: 3306,
    password: "enter JAWSDB password here",
    database: "enter JAWSDB database name here"
  });
}
else {
  networkOne = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Enter local database password here",
    database: "bigFernand_db"
  });
}

// Make connection.
networkOne.connect();

// Export connection (networkOne) for our ORM to use.
module.exports = networkOne;

// 1. Inside your `burger` directory, create a folder named `config`.
// 2. Create a `connection.js` file inside `config` directory.
//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.
//    * Export the connection.