/* This file is to be linked to every html file --> the cart count will be updated on every page and potential error or success messages will display on every page. Also the price will be correctly formatted on every page with product prices */

// Function to update the cart count in the header
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}

// Listen for the custom cartUpdated event
document.addEventListener("cartUpdated", updateCartCount);
// Call this function on all pages initially to set the count on load
document.addEventListener("DOMContentLoaded", updateCartCount);

// Function to display a message (success or error)
function displayMessage(message, type = "error") {
  const messageContainer = document.getElementById("error-message");
  if (messageContainer) {
    messageContainer.textContent = message;
    messageContainer.style.display = "block";
    messageContainer.className = type === "success" ? "success" : "error";
    setTimeout(() => {
      messageContainer.style.display = "none";
    }, 3000);
  }
}

// Function to format price to USD
function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

// Function to show spinner when loading products
function showSpinner() {
  const spinner = document.getElementById("spinner");
  if (spinner) {
    spinner.style.display = "block";
  }
}

// Function to hide spinner
function hideSpinner() {
  const spinner = document.getElementById("spinner");
  if (spinner) {
    spinner.style.display = "none";
  }
}
