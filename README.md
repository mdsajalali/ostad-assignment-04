# Shopping Cart Assignment

This is a shopping cart application that allows users to add products to a cart, view the cart items, and perform various actions like clearing the cart, adjusting quantities, removing items, and applying discounts.

## Live Website Link

[Shopping Cart Website Live Preview]()

## Requirements

To run the application, you need to create an HTML page with the following elements:

- container to display the products and the shopping cart.
- product list section containing multiple products with their names, prices, and "Add to Cart" buttons.
- shopping cart section displaying the added items, quantities, prices, and the total amount.
- button to clear the cart.
  Styling using CSS and Bootstrap is encouraged to enhance the appearance.
  The functionality should be implemented using JavaScript ES6 and should include the following features:

a) **Products:** Create an array of objects representing different products. Each product object should have properties such as name, price, and an ID.

b) **Adding Products to Cart:** Attach event listeners to the "Add to Cart" buttons to capture user clicks. Implement a function to add the selected product to the shopping cart, along with the quantity. Use rest parameters to handle variable quantities.

c) **Displaying Cart Items:** Create a function to display the added items in the shopping cart section. Display the product name, quantity, individual price, and the total amount for each item. Calculate and display the overall total amount for all items in the cart.

d) **Clearing the Cart:** Implement a function to clear the shopping cart when the "Clear Cart" button is clicked. Remove all the items from the cart and update the display accordingly.

e) **Additional Features:** Implement additional features such as increasing or decreasing the quantity of items in the cart, removing individual items, or applying discounts.

To organize your code, use ES6 modules and separate your code into multiple modules, such as `product.js`, `cart.js`, and `app.js`, and import/export the required functionality.
