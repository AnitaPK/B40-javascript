// Initial Product Array
let products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", stock: 5 },
    { id: 2, name: "Headphones", price: 200, category: "Electronics", stock: 15 },
    { id: 3, name: "T-shirt", price: 20, category: "Apparel", stock: 50 },
    { id: 4, name: "Mobile", price: 100, category: "Electronics", stock: 10 },
  ];
  
  // DOM Elements
  const productList = document.getElementById("productList");
  const productForm = document.getElementById("productForm");
  const searchBar = document.getElementById("searchBar");
  
  // Function to Render Products
  function renderProducts(filter = "") {
    productList.innerHTML = ""; 
  
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(filter.toLowerCase()) ||
        product.category.toLowerCase().includes(filter.toLowerCase())
    );
  
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Category: ${product.category}</p>
        <p>Stock: ${product.stock}</p>
        <button onclick="deleteProduct(${product.id})">Delete</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Function to Add a Product
  productForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const newProduct = {
      id: Date.now(),
      name: document.getElementById("productName").value,
      price: Number(document.getElementById("productPrice").value),
      category: document.getElementById("productCategory").value,
      stock: Number(document.getElementById("productStock").value),
    };
  
    products.push(newProduct);
    saveToLocalStorage();
    renderProducts();
  
    productForm.reset();
  });
  
  // Function to Delete a Product
  function deleteProduct(id) {
    products = products.filter((product) => product.id !== id);
    saveToLocalStorage();
    renderProducts();
  }
  
  // Search Products
  searchBar.addEventListener("input", (e) => {
    renderProducts(e.target.value);
  });
  
  // Save to Local Storage
  function saveToLocalStorage() {
    localStorage.setItem("products", JSON.stringify(products));
  }
  
  // Load from Local Storage
  function loadFromLocalStorage() {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      products = JSON.parse(storedProducts);
    }
  }
  
  
  // Initialize App
  loadFromLocalStorage();
  renderProducts();
  