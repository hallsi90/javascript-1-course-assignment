const apiUrl = "https://v2.api.noroff.dev/rainy-days";

async function fetchMensJackets() {
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

    // Filter only men's jackets
    const mensJackets = products.filter(
      (product) => product.gender && product.gender.toLowerCase() === "male"
    );

    displayProducts(mensJackets);
  } catch (error) {
    displayMessage("Error fetching products: " + error.message);
  } finally {
    if (productList.contains(loadingMessage)) {
      productList.removeChild(loadingMessage);
    }
  }
}

function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  if (!products || products.length === 0) {
    displayMessage("No men's jackets found.");
    return;
  }

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <h3>${product.title}</h3>
      <div class="image-container">
        <img src="${product.image.url}" alt="${product.title}">
      </div>
      <p>Price: ${product.price} USD</p>
    `;

    // Optionally, add functionality to navigate to the product page
    productDiv.onclick = () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "/product/index.html";
    };

    productList.appendChild(productDiv);
  });
}

// Call the function to fetch and display men's jackets
fetchMensJackets();
