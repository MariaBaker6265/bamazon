# bamazon
This app is a MySQL Database called bamazon.
It has a Table called products with each of the following columns:

item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)

Running this app will first display product details all of the items available for sale. 
The app then first prompts users to enter the ID of the product they would like to buy.
The app's second message asks how many units of the product the user would like to buy.

Once the user has placed an order, the application checks if the store has enough product to meet the request.

If not, the app logs the phrase "Insufficient quantity available!", and then prevents the order from executing.

However, if quantities are sufficient, the order is fulfilled and the customer is shown the total cost of their purchase.

Please see images folder for screen shots of working application.