const hamburgerIcon = document.querySelector(".hamburger-icon")
const headerContent = document.querySelector(".header-container")
const closeIcon = document.querySelector(".close-icon")
const goToTop = document.querySelector(".Top")
const mainContent = document.querySelector(".main-content")
const navbar = document.querySelector("nav")

hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    headerContent.classList.add("menu-open")
})

closeIcon.addEventListener('click' , () => {
    headerContent.classList.remove("menu-open")
})

navbar.addEventListener('click' , (e) => {
    e.stopPropagation()
})

goToTop.addEventListener('click' , () => {
    mainContent.scrollTo(0,0)
})

window.addEventListener('click' , (e) => {
    headerContent.classList.remove("menu-open")
})

