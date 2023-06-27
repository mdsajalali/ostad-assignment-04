import products from "./product.js";
import { addToCart, getCartItems, clearCart } from "./cart.js";

const productContainer = document.getElementById("product-container");
const cartContainer = document.getElementById("cart-container");
const clearCartBtn = document.getElementById("clear-cart-btn");

function renderProducts() {
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const item = document.createElement("div");
    item.innerHTML = `
      <div class="cartItem">
      <p>${product.name}</p>
      <p>Price: $${product.price}</p>
      <button class="add-to-cart-btn cartBtn clearCartBtn" data-id="${product.id}">Add to Cart</button>
      </div>
    `;
    productContainer.appendChild(item);
  });
}

function renderCart() {
  cartContainer.innerHTML = "";

  const cartItems = getCartItems();

  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    const totalPrice = item.product.price * item.quantity;
    cartItem.innerHTML = `
     <div class="cartContent">
     <p>${item.product.name}</p>
     <p>Quantity: ${item.quantity}</p>
     <p>Price: $${item.product.price}</p>
     <p>Total: $${totalPrice}</p>
     </div>
    `;
    cartContainer.appendChild(cartItem);
  });

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
  const total = document.createElement("div");
  total.innerHTML = `<p class="cartContent totalCart">Total Amount: $${totalAmount}</p>`;
  cartContainer.appendChild(total);
}

function handleAddToCart(event) {
  const productId = parseInt(event.target.dataset.id);
  const product = products.find((item) => item.id === productId);
  addToCart(product);
  renderCart();
}

function handleClearCart() {
  clearCart();
  renderCart();
}

function attachEventListeners() {
  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", handleAddToCart);
  });

  clearCartBtn.addEventListener("click", handleClearCart);
}

function initializeApp() {
  renderProducts();
  attachEventListeners();
}

initializeApp();
