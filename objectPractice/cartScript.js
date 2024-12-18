
// const cartItems = document.querySelector('#cartItemsList')


function loadFromLocalStorage() {
    storedProducts = localStorage.getItem("Products");
    cart = localStorage.getItem("cart");

    console.log(storedProducts)
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    }
    console.log(products)
    if (cart) {
        cartItems = JSON.parse(cart);
        console.log(cartItems)
      }
  }
    
  loadFromLocalStorage();
document.getElementById('lengthCart').innerHTML = cartItems.length;
  function addToCart(ID){
    let cartItem = products.filter(p=> p.id == ID)
    console.log(cartItem[0]);
    cartItems.push(cartItem[0]);
    saveToLocalStorage();
    document.getElementById('lengthCart').innerHTML = cartItems.length;

  }

  function saveToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

// console.log(storedProducts)

let productList =  document.getElementById("prodList");
function renderProducts() {
    
    productList.innerHTML = products
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
                  <button class='btn btn-primary' onclick='addToCart(${product.id})'>Add To Cart</button>
                 </div>
              </div>
            </div>
          `
      )
      .join('')
     ;
  }

  renderProducts()


