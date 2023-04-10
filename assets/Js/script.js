document.addEventListener("DOMContentLoaded", function(){
    reportwIndowSize()
})

//Function

function reportwIndowSize(){
    let w = window.innerWidth

    if (w > 750) {
        openMenu.classList.add('hidden')
        closeMenu.classList.add('hidden')
        navbar.classList.remove('hidden')
    }

    else {
        openMenu.classList.remove('hidden')
        closeMenu.classList.remove('hidden')
        navbar.classList.add('hidden')
    }
}

//Variables

const navbar = document.querySelector(".menu")
const openMenu = document.getElementById("menu-open")
const closeMenu = document.getElementById("menu-close")

//Control Nav Bar
openMenu.addEventListener('click', () =>{
    navbar.classList.remove("hidden")
})

closeMenu.addEventListener('click', () =>{
    navbar.classList.add('hidden')
})
