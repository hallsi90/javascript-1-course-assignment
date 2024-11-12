// Retrieve the product data from local storage
const productData = JSON.parse(localStorage.getItem("selectedProduct"));

// Check if productData exists
if (productData) {
  // Set the product information in the respective elements
  document.getElementById("product-title").innerText = productData.title;
  document.getElementById("product-image").src = productData.image.url;
  document.getElementById("product-description").innerText =
    productData.description;
  document.getElementById("product-sizes").innerText = productData.sizes;
  document.getElementById(
    "product-price"
  ).innerText = `Price: ${productData.price} USD`;

  // Display sizes if available
  if (productData.sizes && productData.sizes.length > 0) {
    document.getElementById(
      "product-sizes"
    ).innerText = `Sizes: ${productData.sizes.join(", ")}`;
  } else {
    document.getElementById("product-sizes").innerText = "Sizes: Not available";
  }
} else {
  alert("Product data not found!");
}

// Cart functions frome her on out

// Function to add product to cart
function addToCart(product) {
  // Get current cart from local storage or initialize an empty array
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the product to the cart array
  cart.push(product);

  // Store the updated cart back to local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.title} has been added to your cart!`); // Alert user
}

// Event listener for Add to Cart button
document.getElementById("add-to-cart-button").addEventListener("click", () => {
  const product = {
    title: document.getElementById("product-title").innerText,
    price: document.getElementById("product-price").innerText,
    imageUrl: document.getElementById("product-image").src,
    sizes: document.getElementById("product-sizes").innerText,
  };
  addToCart(product);
});
