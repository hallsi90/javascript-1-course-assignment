const apiUrl = "https://v2.api.noroff.dev/rainy-days";

async function fetchWomensJackets() {
  const productList = document.getElementById("product-list");
  const loadingMessage = document.createElement("div");
  loadingMessage.className = "loading";
  loadingMessage.innerHTML = `<div class="spinner"></div>`;
  productList.appendChild(loadingMessage);

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const products = result.data;

    // Filter only women's jackets
    const womensJackets = products.filter(
      (product) => product.gender && product.gender.toLowerCase() === "female"
    );

    displayProducts(womensJackets);
  } catch (error) {
    displayMessage("Error fetching women's jackets: " + error.message);
  } finally {
    if (productList.contains(loadingMessage)) {
      productList.removeChild(loadingMessage); // Remove loading indicator
      loadingMessage = null; // Clears the reference to free up memory
    }
  }
}

function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  if (!products || products.length === 0) {
    displayMessage("No women's jackets found.");
    return;
  }

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    // Format the price
    const formattedPrice = formatPrice(product.price);

    productDiv.innerHTML = `
    <h3>${product.title}</h3>
    <div class="image-container">
      <img src="${product.image.url}" alt="${product.image.alt}">
    </div>
    <p>Price: ${formattedPrice}</p>
  `;

    // Functionality to navigate to the product page
    productDiv.onclick = () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "product/index.html";
    };

    productList.appendChild(productDiv);
  });
}

// Call the function to fetch and display women's jackets
fetchWomensJackets();
