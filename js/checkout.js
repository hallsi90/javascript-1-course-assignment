// Function to display cart items
function displayCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
          <h2>${item.title}</h2>
          <img src="${item.imageUrl}" alt="${item.title}">
          <p>${item.price}</p>
         
      `;
    cartItemsContainer.appendChild(itemDiv);
  });
}

// Call the function to display cart items when the page loads
displayCartItems();
