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