

//! add to cart start
let products = []
let cart = []
cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
function addToCart() {
    const cartItems = document.querySelector(".header-cart-count")
    const buttons = [...document.getElementsByClassName("add-to-cart")]
    buttons.forEach((button) => {
        const inCart = cart.find((item) => item.id === Number(button.dataset.id))
        if (inCart) {
            button.setAttribute("disabled", "disabled")
        } else {
            button.addEventListener("click", function (e) {
                e.preventDefault()
                const id = e.target.dataset.id
                const findProduct = products.filter(product => product.id === Number(id));
                cart.push({ ...findProduct, quantity: 1 })
                localStorage.setItem("cart", JSON.stringify(cart))
                button.setAttribute("disabled", "disabled")
                cartItems.innerHTML = cart.length

            })
        }
    })
}


export default addToCart()

//! add to cart end