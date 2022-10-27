const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false
    }
})

window.addEventListener('load', () => hideLoader())

function hideLoader() {
    document.querySelector('.loader-screen').classList.add('hidden')
}
