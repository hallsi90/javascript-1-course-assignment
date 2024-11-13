// Retrieve the product data from local storage
const productData = JSON.parse(localStorage.getItem("selectedProduct"));

// Check if productData exists
if (productData) {
  // Set the product information in the respective elements
  document.getElementById("product-title").innerText = productData.title;
  document.getElementById("product-image").src = productData.image.url;
  document.getElementById("product-image").alt =
    productData.image.alt || productData.title;
  document.getElementById("product-description").innerText =
    productData.description;
  // Format the price using formatPrice function from common.js
  const formattedPrice = formatPrice(productData.price);
  document.getElementById(
    "product-price"
  ).innerText = `Price: ${formattedPrice}`;

  // Display sizes if available
  if (productData.sizes && productData.sizes.length > 0) {
    document.getElementById(
      "product-sizes"
    ).innerText = `Sizes: ${productData.sizes.join(", ")}`;
  } else {
    document.getElementById("product-sizes").innerText = "Sizes: Not available";
  }
} else {
  // Redirect back to homepage if no product is found
  window.location.href = "index.html";
}

// Event listener for Add to Cart button
const addToCartButton = document.getElementById("add-to-cart-button");
if (addToCartButton) {
  addToCartButton.addEventListener("click", () => {
    const product = {
      title: document.getElementById("product-title").innerText,
      price: document.getElementById("product-price").innerText,
      imageUrl: document.getElementById("product-image").src,
      sizes: document.getElementById("product-sizes").innerText,
    };
    addToCart(product); // Calls addToCart function from cart.js
  });
}
