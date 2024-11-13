// Function to display cart items
function displayCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("total-price").textContent = ""; // Clear total if empty
    return;
  }

  cartItemsContainer.innerHTML = ""; // Clear container first
  let totalPrice = 0;

  cart.forEach((item, index) => {
    const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    totalPrice += itemPrice * item.quantity;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <div class="cart-item-left">
        <img src="${item.imageUrl}" alt="${item.title}" class="cart-item-image">
        <h2 class="cart-item-title">${item.title}</h2>
      </div>
      <div class="cart-item-quantity">
        <button class="quantity-button" data-index="${index}" data-delta="-1">-</button>
        <span class="quantity-number">${item.quantity}</span>
        <button class="quantity-button" data-index="${index}" data-delta="1">+</button>
      </div>
      <p class="cart-item-price">${(itemPrice * item.quantity).toFixed(
        2
      )} USD</p>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  // Display the total price
  document.getElementById(
    "total-price"
  ).textContent = `Total: $${totalPrice.toFixed(2)} USD`;

  // Add event listeners for quantity buttons
  document.querySelectorAll(".quantity-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = parseInt(event.target.getAttribute("data-index"));
      const delta = parseInt(event.target.getAttribute("data-delta"));
      updateCartQuantity(index, delta); // Update quantity in cart
      displayCartItems(); // Re-render cart items with updated quantities
    });
  });
}

// Function to handle checkout process
function handleCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the cart is empty
  if (cart.length === 0) {
    displayMessage(
      "Your cart is empty. Please add items to proceed to checkout.",
      "error"
    );
    return;
  }

  // Clear the cart and redirect to confirmation page
  localStorage.removeItem("cart");
  window.location.href = "../checkout/confirmation/index.html";
}

// Add event listener for the checkout button
document
  .getElementById("checkout-button")
  .addEventListener("click", handleCheckout);

// Call displayCartItems when the page loads
document.addEventListener("DOMContentLoaded", displayCartItems);
