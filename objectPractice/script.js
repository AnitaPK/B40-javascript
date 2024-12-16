products = [
  {
    id: 1,
    productName: "Loreal Paris",
    discription: "Because we worth it",
    price: 1000,
    quantity: 5,
    imgPath:
      "https://m.media-amazon.com/images/I/61jKOXhEfnL.jpg",
  },
  {
    id: 2,
    productName: "Jonsons",
    discription: "No more tears",
    price: 5000,
    quantity: 15,
    imgPath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmKFxV6-iTOoFQL2-K0UdAO454Nn3eA31Dg&s"
  },
  {
    id: 3,
    productName: "Patanjali",
    discription: "Prakruti ka Ashirwaad",
    price: 1000,
    quantity: 25,
    imgPath:"https://cdn.tootoo.in/pub/media/catalog/product/cache/e77e25b80557b9123426bcb4a98fce67/p/a/patanjali-shikakai-kesh-kanti-shampoo.jpg"
  },
];

function saveToLocalStorage() {
  localStorage.setItem("Products", JSON.stringify(products));
}
saveToLocalStorage();

// DOM Elements
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

function renderProducts(filteredProducts = products) {
  document.getElementById("prodList").innerHTML = filteredProducts
    .map(
      (product) =>
        `
          <div class="col-md-6 col-lg-4  mb-4">
            <div class="card">
              <img src='${product.imgPath}' class="card-img-top" alt='${product.productName}'>
              <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text text-success">${product.discription}</p>
                <p>Price: ₹${product.price}</p>
                <p>Stock: ${product.quantity}</p>
                <button onclick="editProduct(${product.id})" class="btn btn-primary">Edit</button>
                <button onclick="deleteProduct(${product.id})" class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        `
    )
    .join("");
}
renderProducts();

function addNewProduct() {
  const newProduct = {
    id: Date.now(),
    productName: document.getElementById("productName").value,
    price: Number(document.getElementById("productPrice").value),
    discription: document.getElementById("productDiscription").value,
    quantity: Number(document.getElementById("productStock").value),
    imgPath: "https://picsum.photos/200"
  };

  products.push(newProduct);
  saveToLocalStorage();
  renderProducts();
  clearFormFields();
}

function clearFormFields() {
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productDiscription").value = "";
  document.getElementById("productStock").value = "";
}

function editProduct(id) {
  const product = products.find((p) => p.id === id);
  if (product) {
    document.getElementById("productName").value = product.productName;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productDiscription").value = product.discription;
    document.getElementById("productStock").value = product.quantity;

    // Update the Add button to Save
    const addButton = document.querySelector("form button");
    addButton.textContent = "Save";
    addButton.onclick = function () {
      updateProduct(id);
      addButton.textContent = "Add";
      addButton.onclick = function () {
        addNewProduct();
      };
    };
  }
}

function updateProduct(id) {
  const product = products.find((p) => p.id === id);
  if (product) {
    product.productName = document.getElementById("productName").value;
    product.price = Number(document.getElementById("productPrice").value);
    product.discription = document.getElementById("productDiscription").value;
    product.quantity = Number(document.getElementById("productStock").value);

    saveToLocalStorage();
    renderProducts();
    clearFormFields();
  }
}

// function deleteProduct(id) {
//   products = products.filter((p) => p.id !== id);
//   saveToLocalStorage();
//   renderProducts();
// }

function deleteProduct(ID){
  console.log(ID);
  products = products.filter((prod)=> ID !== prod.id);
  saveToLocalStorage();
  renderProducts();
}


// Search functionality
// searchInput.addEventListener("input", (event) => {
//   const searchText = event.target.value.toLowerCase();
//   const filteredProducts = products.filter((product) =>
//     product.productName.toLowerCase().includes(searchText)
//   );
//   renderProducts(filteredProducts);
// });

searchInput.addEventListener('input', ()=>{
  searchKey = event.target.value.toLowerCase();
  console.log(searchKey)
  filteredNewProducts = products.filter((prod)=>prod.productName.toLowerCase().includes(searchKey))
  renderProducts(filteredNewProducts);
})


// //updated for word Search functionality
// document.getElementById("searchInput").addEventListener("input", (e) => {
//   const searchTerm = e.target.value.trim();
//   const regex = new RegExp(
//     `^${searchTerm.split(" ").map((word) => `(?=.*\\b${word})`).join("")}`,
//     "i"
//   );

//   const filteredProducts = products.filter((product) =>
//     regex.test(product.productName)
//   );

//   renderProducts(filteredProducts);
// });