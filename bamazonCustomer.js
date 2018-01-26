var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Mar4249Bak!",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  
  connection.query("SELECT * FROM products", function(err, result, fields){
    if(err) throw err;
    console.log(result);  
 
});
//==================================================================
// Constructor function for creating order objects.
function Order (item_id, quantity) {
    this.item_id = item_id;
    this.quantity = quantity;
    this.printInfo = function() {
      console.log("Item ID: " + this.item_id + "\nQuantity: " + this.quantity);
    };
  }
  
  // orderList array contains all of order objects
  var orderList = [];
  
  
  function createOrderList() {
    // Prompt the user for desired item ID and quantity.
                
      inquirer.prompt([
        {
          name: "item_id",
          message: "Please enter a product ID: "
        }, {
          name: "quantity",
          message: "Please enter the quantity you would like to purchase: "
        },
  
      ]).then(function(answers) {
        // Runs the constructor and places the new Order object into the variable order.
    
        var order = new Order(answers.item_id, answers.quantity);
        // Adds the current order to the list of order history.
        
        connection.query("SELECT this.item_id FROM products", function(err, result, fields){
            if(err) throw err;
            console.log(result);
        });

        if (answers.quantity < stock_quantity) {
            
            orderList.push(order);
            console.log("Your order has been fulfilled.  Thank you!");
          
        }
        order.printInfo();
        console.log(order.quantity + " quantity ordered.");
      
      });
  };
  
  // Call the createOrderList() function to start the code.
  createOrderList();
//============================================================
connection.end();
});