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
saveToLocalStorage()

// DOM Elements
const productList = document.getElementById("productList");
const productForm = document.getElementById("productForm");
const searchBar = document.getElementById("searchBar");

function renderProducts(){
document.getElementById("prodList").innerHTML = products
  .map(
    (product) =>
      `
                <div class="card" style="width: 18rem;">
                <img src='${product.imgPath}' class="card-img-top" alt='${product.productName}'>
                <div class="card-body">
                  <h5 class="card-title">${product.productName}</h5>
                  <p class="card-text text-success">${product.discription}</p>
                  <p>Price: ₹${product.price}</p>
                  <button  class="btn btn-primary">Edit</button>
                  <button  class="btn btn-danger">Delete</button>


                </div>
              </div>

`
  )
  .join("");
}
renderProducts();

function addNewProduct(){
    const newProduct = {
        id: Date.now(),
        productName: document.getElementById("productName").value,
        price: Number(document.getElementById("productPrice").value),
        discription: document.getElementById("productDiscription").value,
        quantity: Number(document.getElementById("productStock").value),
        imgPath:"https://picsum.photos/200"
      };
      console.log(document.getElementById("productName").value)
    console.log(newProduct)
      products.push(newProduct);
      saveToLocalStorage();
      renderProducts();
}
