//! review start 

let openBtn = document.querySelector(".open")
let openBtn1 = document.querySelector(".open1")
let tabPanel = document.querySelector(".tab-panel-review")
let content = document.querySelector(".tab-content")

openBtn.onclick = function () {
    tabPanel.style.display = "block"
    content.style.display = "none"
    openBtn.style.color = "#000"
    openBtn1.style.color = "#b9b9b9"
}
openBtn1.onclick = function () {
    tabPanel.style.display = "none"
    content.style.display = "block"
    openBtn1.style.color = "#000"
    openBtn.style.color = "#b9b9b9"
}
//! review end 


