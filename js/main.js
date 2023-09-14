import productsFunc from "./products.js"

// //! review start
// let openBtn = document.querySelector(".open")
// let openBtn1 = document.querySelector(".open1")
// let tabPanel = document.querySelector(".tab-panel-review")
// let content = document.querySelector(".tab-content")
// openBtn.addEventListener("click", () => {
//     tabPanel.style.display = "block"
//     content.style.display = "none"
//     openBtn.style.color = "#000"
//     openBtn1.style.color = "#b9b9b9"
// })
// openBtn1.addEventListener("click", () => {
//     tabPanel.style.display = "none"
//     content.style.display = "block"
//     openBtn1.style.color = "#000"
//     openBtn.style.color = "#b9b9b9"
// })
// // //! review end
//! add product to localStorage start
async function getData() {
    const photos = await fetch("../js/data.json")
    const data = await photos.json()
    data ? localStorage.setItem("products", JSON.stringify(data)) : []
    productsFunc()
}
getData()

const products = localStorage.getItem("products")
console.log(JSON.parse(products));

//! add product to localStorage end



// //! add to cart start
// let products = []
// let cart = []
// function addToCart() {
//     const buttons = [...document.getElementsByClassName("add-to-cart")]
//     buttons.forEach((button) => {
//         button.addEventListener("click", function (e) {
//             e.preventDefault()
//             const id = e.target.dataset.id
//             const findProduct = products.filter(product => product.id === Number(id));
//             cart.push({ ...findProduct, quantity: 1 })
//             localStorage.setItem("cart", JSON.stringify(cart))
//             button.setAttribute("disabled", "disabled")
//         })

//     })
// }
// addToCart()
// //! add to cart end