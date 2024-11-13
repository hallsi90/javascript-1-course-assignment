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
    // Simulate a delay for testing purposes (remove this in production)
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay for 2 seconds

    const response = await fetch(apiUrl);

    // Handle any HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json(); // Get the JSON data
    const products = result.data; // Store the product data

    // Store the fetched products in local storage
    localStorage.setItem("allProducts", JSON.stringify(products));
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
    displayMessage("No products available to display."); // Alert the user if no products are found with in-page error message
    return; // Exit if products is undefined or empty
  }

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    // Format the price for display
    const formattedPrice = formatPrice(product.price);

    // Display product information
    productDiv.innerHTML = `
     <h3>${product.title}</h3>
        <div class="image-container">
            <img src="${product.image.url}" alt="${product.image.alt}">
        </div>
        <p>Price: ${formattedPrice}</p>
        `;

    // Store the product data in the click event for later use
    productDiv.onclick = () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "product/index.html"; // Redirect to product page
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

// Call the function to fetch and display products
fetchProducts();
