// Import MySQL connection.
const networkTwo = require('./connection');
const mysql = require ('mysql');

// Object for all our SQL statement functions.
const orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        networkTwo.query(queryString, function(err, result) {
          console.log(err)
          if (err) { throw err; }
          cb(result);
        });
      },
      insertOne: function(table, burger, devoured, cb) {
        let sql = "INSERT INTO ?? (??, ??) VALUES (?, ?);";
        const inserts = [table, 'burger_name', 'devoured', burger, devoured];
        sql = mysql.format(sql, inserts);
    
        networkTwo.query(sql, function(err, result) {
          if (err) { throw err; }
          cb(result);
  
        });
      },
      // An example of objColVals would be {name: panther, sleepy: true}      
      updateOne: function(table, objColVals, cb) {
        let sql = "UPDATE ?? SET ?? = ? WHERE id = ?;";
        const inserts = [table, 'devoured', 1, objColVals];
        sql = mysql.format(sql, inserts);
  
        networkTwo.query(sql, function(err, result) {
          if (err) { throw err; }
          cb(result);
        });
      }
};

// Export the orm object for the model (burger.js).
module.exports = orm;

// 3. Create an `orm.js` file inside `config` directory.
//    * Import (require) `connection.js` into `orm.js`
//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers.
//      These are the methods you will need to use in order to retrieve and store data in your database.
//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`
//    * Export the ORM object in `module.exports`.