import productsFunc from "./products.js"
import addToCart from "./add-to-cart.js"

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
(async function getData() {
    const photos = await fetch("../js/data.json")
    const data = await photos.json()
    data ? localStorage.setItem("products", JSON.stringify(data)) : []

})()



//! add product to localStorage end


const cartItems = document.querySelector(".header-cart-count")

cartItems.innerHTML = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).length
    : "0"