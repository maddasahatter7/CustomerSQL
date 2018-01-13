// Initializes the npm packages used
var mysql = require("mysql");
var inquirer = require('inquirer');
var table = require("console.table");

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon_DB"
});

// Creates the connection with the server and loads the product data upon a successful connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    loadProducts();
});

// Function to load the products table from the database and print results to the console
function loadProducts() {
    // Selects all of the data from the MySQL products table
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        // Draw the table in the terminal using the response
        console.table(res);

        // Then prompt the customer for their choice of product, pass all the products to promptCustomerForItem
        promptCustomerForItem(res);
    });
}

// Prompt the customer for a product ID
function promptCustomerForItem(inventory) {
    // Prompts user for what they would like to purchase
    inquirer
        .prompt({
            name: "choice",
            type: "item",
            message: "Enter the id of the item you would like to purchase? Or enter Q to Quit",
    validate: function (val) {
                return !NaN(val) || (val).toLowerCase() === "q";
            }
        }
)
  .then(function (val) {
      // Check if the user wants to quit the program
      exitBamazon(val.choice);
        // If there is a product with the id the user chose, prompt the customer for a desired quantity
        
    inquirer
      .prompt({
          name: "value",
          type: "input",
          message: "How many of these items would you like to purchase?",
          validate: function (val) {
            return !NaN(val) || (val).toLowerCase() === "q";
        }
    }
)
    .then(function (val) {
    // Check if the user wants to quit the program
    exitBamazon(val.choice);
    
    
   
      // If there is a product with the id the user chose, prompt the customer for a desired quantity


// Prompt the customer for a product quantity

      // Check if the user wants to quit the program


      // If there isn’t enough of the chosen product and quantity, let the user know and re-run loadProducts


// Purchase the desired quanity of the desired item

      // Let the user know the purchase was successful, re-run loadProducts


// Check to see if the product the user chose exists in the inventory

  // Otherwise return null


// Check to see if the user wants to quit the program. 
function exitBamazon(choice){
 if (choice.toLowerCase() === "q"){
    console.log("Thanks for stopping by!");
    process.exit(0);
 }
}