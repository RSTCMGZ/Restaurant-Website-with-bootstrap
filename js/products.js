


function productsFunc() {
  const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
  const productsContainer = document.getElementById("product-list")
  let results = ""
  products.forEach((item) => {
    results += `
        <div class="col-md-4 col-sm-6">
        <div class="shop-info">
          <div class="shop-img">
            <img src="${item.img.singleImage}" alt="" />
          </div>
          <h4 class="text-center">
            <a href="#">${item.name}</a>
          </h4>
          <div class="sp-ratings text-center">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <div class="d-flex align-items-center justify-content-center gap-2">
          <div class="shop-oldprice">
          <small class="text-decoration-line-through">
            $${item.price.oldPrice.toFixed(2)}
            </small>
          </div>
          <div class="shop-price">$${item.price.newPrice.toFixed(2)}</div>
          </div>
          <div class="shop-meta d-flex justify-content-around">
            <button  class="add-to-cart " data-id="${item.id}">
              <i class="bi bi-cart"></i> Add to cart
            </button>
            <a href="#"> <i class="bi bi-heart"></i> Wishlist </a>
          </div>
        </div>
        
      </div>
      
      


        `;
  })

  productsContainer.innerHTML = results
}

export default productsFunc()