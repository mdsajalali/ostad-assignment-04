let cart = [];

export function addToCart(product, quantity = 1) {
  const existingItem = cart.find(item => item.product.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
}

export function getCartItems() {
  return cart;
}

export function clearCart() {
  cart = [];
}
