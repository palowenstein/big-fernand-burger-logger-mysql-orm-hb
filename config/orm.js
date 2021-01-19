// Import MySQL connection.
const network = require('./network');
const mysql = require ('mysql');

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

// Object for all our SQL statement functions.
const orm = {
    selectAll: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        network.query(queryString, function(err, result) {
          if (err) { throw err; }
          cb(result);
        });
      },
      insertOne: function(table, burger, eaten, cb) {
        const sql = "INSERT INTO ?? (??, ??) VALUES (?, ?);";
        const inserts = [table, 'burger_name', 'eaten_burger', burger, eaten];
        sql = mysql.format(sql, inserts);
    
        network.query(sql, function(err, result) {
          if (err) { throw err; }
          cb(result);
  
        });
      },
  
      // An example of objColVals would be {name: panther, sleepy: true}      
      updateOne: function(table, objColVals, cb) {
        const sql = "UPDATE ?? SET ?? = ? WHERE id = ?;";
        const inserts = [table, 'eaten_burger', 1, objColVals];
        sql = mysql.format(sql, inserts);
  
        network.query(sql, function(err, result) {
          if (err) { throw err; }
          cb(result);
        });
      }

};

// Export the orm object for the model (burger.js).
module.exports = orm;

// 3. Create an `orm.js` file inside `config` directory.
//    * Import (require) `connection.js` into `orm.js`
//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`
//    * Export the ORM object in `module.exports`.