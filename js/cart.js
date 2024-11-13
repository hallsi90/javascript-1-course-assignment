// Function to add product to cart
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.title === product.title);

  if (existingProduct) {
    // Increment quantity if item is already in cart
    existingProduct.quantity += 1;
  } else {
    // Add product with quantity if new
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayMessage(`${product.title} has been added to your cart!`, "success");
  updateCartCount();
}

// Function to update the quantity of a cart item
function updateCartQuantity(index, delta) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart[index];

  if (item) {
    item.quantity += delta;

    // Remove item if quantity is zero or less
    if (item.quantity <= 0) {
      cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }
}

// Function to update cart count in the header
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}

// Call updateCartCount when the page loads
document.addEventListener("DOMContentLoaded", updateCartCount);
