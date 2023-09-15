let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

function displayCartProduct() {
  const cartWrapper = document.querySelector(".cart-wrapper")
  let result = ""

  cart.forEach((item) => {
    result += `
        <tr class="cart-item">
        <td>
          <button  class="remove btn "
            ><i class="bi bi-x delete-cart" data-id =${item.id}></i
          ></button>
        </td>
        <td>
          <a href="#">
            <img src="${item.img.singleImage}" width="90" alt="" />
          </a>
        </td>
        <td><a href="#">${item.name}</a></td>
        <td><span class="amount">$${item.price.newPrice.toFixed(2)}</span></td>
        <td>
          <span class="quantity">${item.quantity}</span>
        </td>
        <td><span class="amount">$${(item.price.newPrice * item.quantity).toFixed(2)}</span></td>
      </tr>
        `
  })
  cartWrapper.innerHTML = result
  removeCartItem()

}
displayCartProduct()

function removeCartItem() {

  const btnDelete = document.querySelectorAll(".delete-cart")
  let cartItems = document.querySelector(".header-cart-count")
  btnDelete.forEach((button) => {
    button.addEventListener("click", (e) => {
      let cartItem = document.querySelectorAll(".cart-item")
      const id = e.target.dataset.id;
      cart = cart.filter((item) => item.id !== Number(id))
      cartItem
      displayCartProduct()
      localStorage.setItem("cart", JSON.stringify(cart))
      cartItems.innerHTML = cart.length
      saveCartValues()
    })
  })
}


function saveCartValues() {
  const cartTotal = document.getElementById("cart-total")
  const subTotal = document.getElementById("sub-total")
  const fastCargo = document.getElementById("fast-cargo")

  let itemsTotal = 0;
  cart.length > 0 && cart.map((item) => (itemsTotal += item.price.newPrice * item.quantity))
  console.log(itemsTotal);
  subTotal.innerHTML = `$${itemsTotal.toFixed(2)}`
  cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`
  const fastCargoPrice = 15;
  fastCargo.addEventListener("change", function (e) {
    if (e.target.checked) {
      cartTotal.innerHTML = `$${(itemsTotal + fastCargoPrice).toFixed(2)}`
    } else {
      cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`

    }
  })

}

saveCartValues()
