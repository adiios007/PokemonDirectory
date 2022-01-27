// Importing mysql and csvtojson packages
// Requiring module
const csvtojson = require('csvtojson');
const mysql = require("mysql");
  
// Database credentials
const hostname = '127.0.0.1',
    username = "root",
    password = "Adiios007",
    port = "3306",
    databsename = "Assignment"
  
  
// Establish connection to the database
let con = mysql.createConnection({
    host: hostname,
    user: username,
    port: port,
    password: password,
    database: databsename,
});
  
con.connect((err) => {
    if (err) return console.error(
            'error while creating connection: ' + err.message);
  
    con.query("DROP TABLE pokemon", 
        (err, drop) => {
  
        // Query to create table "sample"
        var createStatament = 
        "CREATE TABLE pokemon(Name char(50), " +
        "Type1 char(50), Type2 char(50),  Total int ,HP int, Attack int, Defense int, Sp_Attack int, Sp_defense int, Speed int, Generation int, Legendary char(5))"
  
        // Creating table "sample"
        con.query(createStatament, (err, drop) => {
            if (err)
                console.log("ERROR: ", err);
        });
    });
});

console.log("created database successfully");
//con.destroy();

// CSV file name
const fileName = "Pokemon.csv";

csvtojson().fromFile(fileName).then(source => {
  
    // Fetching the data from each row 
    // and inserting to the table "sample"
    for (var i = 0; i < source.length; i++) {
        var Name = source[i]["Name"],
            Type1 = source[i]["Type 1"],
            Type2 = source[i]["Type 2"],
            Total = source[i]["Total"],
            HP = source[i]["HP"],
            Attack = source[i]["Attack"],
            Defense = source[i]["Defense"],
            Sp_attack = source[i]["SpAtk"],
            Sp_defense = source[i]["SpDef"],
            Speed = source[i]["Speed"],
            Generation = source[i]["Generation"],
            Legendary = source[i]["Legendary"]
  
        var insertStatement = 
        "INSERT INTO pokemon values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        var items = [Name, Type1, Type2, Total, HP, Attack, Defense, Sp_attack, Sp_defense, Speed, Generation, Legendary];
  
        // Inserting data of current row
        // into database
        con.query(insertStatement, items, 
            (err, results, fields) => {
            if (err) {
                console.log(
    "Unable to insert item at row ",Name);
    console.log('Connected Id:- ' + con.threadId);
                return console.log(err.stack);
            }
        });
    }
    console.log(
"All items stored into database successfully");
});