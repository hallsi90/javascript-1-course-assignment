const apiUrl = "https://v2.api.noroff.dev/rainy-days";

// Function to fetch products from the API
async function fetchProducts() {
  const productList = document.getElementById("product-list");
  const loadingMessage = document.createElement("div");
  loadingMessage.className = "loading";
  loadingMessage.innerHTML = `
        <div class="spinner"></div>
    `;
  productList.appendChild(loadingMessage); // Show loading indicator

  try {
    const response = await fetch(apiUrl);

    // Handle any HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json(); // Get the JSON data
    const products = result.data; // Store the product data

    displayProducts(products); // Pass the data array to displayProducts
  } catch (error) {
    displayMessage("Error fetching products: " + error.message); // Display error message
  } finally {
    if (productList.contains(loadingMessage)) {
      productList.removeChild(loadingMessage); // Remove loading indicator
      loadingMessage = null; // Clear reference
    }
  }
}

// Function to display products
function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear the product list before displaying new products

  // Check if products is valid
  if (!products || !Array.isArray(products) || products.length === 0) {
    displayMessage("No products available to display."); // Alert the user if no products are found
    return;
  }

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    // Format the price and check if product is on sale
    const formattedPrice = formatPrice(product.price);
    const formattedDiscountedPrice = product.onSale
      ? formatPrice(product.discountedPrice)
      : formattedPrice;

    // Build the HTML for the product display
    productDiv.innerHTML = `
    <h3>${product.title}</h3>
    <div class="image-container">
      <img src="${product.image.url}" alt="${product.image.alt}">
    </div>
    ${
      product.onSale
        ? `<div class="price-wrapper">
             <p class="discounted-price">${formattedDiscountedPrice}</p>
             <p class="original-price">${formattedPrice}</p>
               <span class="on-sale-badge">On Sale</span>
           </div>`
        : `<p class="price">${formattedPrice}</p>`
    }
  `;

    // Functionality to navigate to the product page
    productDiv.onclick = () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "product/index.html";
    };

    productList.appendChild(productDiv);
  });
}

// Function to filter products based on selected gender
function filterProducts(gender) {
  const allProducts = JSON.parse(localStorage.getItem("allProducts")) || [];

  // If gender filter is 'all', display all products
  if (gender === "all") {
    return displayProducts(allProducts);
  }

  const filteredProducts = allProducts.filter((product) => {
    // Ensure the product has a gender property
    return product.gender && product.gender.toLowerCase() === gender;
  });

  displayProducts(filteredProducts);
}

// Event listener for gender filter change
document.getElementById("gender-filter").addEventListener("change", (event) => {
  const selectedGender = event.target.value; // Get selected gender
  filterProducts(selectedGender); // Call the filter function with selected gender
});

// Call the function to fetch and display products when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});
