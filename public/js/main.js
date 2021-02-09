// FONCTIONNALITE JS BUTON BLANC ET NOIR 
let buttonNoir = document.querySelector("#butNoir")
let buttonBlanc = document.querySelector("#butBlanc")
let para = document.querySelectorAll("p")

console.log(buttonNoir);
buttonNoir.addEventListener('click', () => {
    document.body.style.backgroundColor= "black"
    // para.style.color="white"
    let para2 = Array.from(para)
    para2.forEach(el => {
        el.style.color= "white"
});
})

buttonBlanc.addEventListener('click', () => {
    document.body.style.backgroundColor= "white"
    let para2 = Array.from(para)
    para2.forEach(el => {
        el.style.color= "black"
});
})

// FONCTIONNALITE JS BUTTON CONNEXION

let connect = document.querySelector("#connexion")
let menuCo = document.querySelector(".menuCo")

connect.addEventListener('click', () => {
    menuCo.className= ("menuCo dropdown-menu col-12 text-center  px-17 d-none", "menuCo dropdown-menu col-12 text-center  px-17 d-block")
    if (menuCo.className == "menuCo dropdown-menu col-12 text-center  px-17 d-block") {
        connect.addEventListener('click', () => {
            menuCo.className= ("menuCo dropdown-menu col-12 text-center  px-17 d-block", "menuCo dropdown-menu col-12 text-center  px-17 d-none")
            if (menuCo.className == "menuCo dropdown-menu col-12 text-center  px-17 d-none") {
                connect.addEventListener('click', () => {
                    menuCo.className= ("menuCo dropdown-menu col-12 text-center  px-17 d-none", "menuCo dropdown-menu col-12 text-center  px-17 d-block")
                })
            }
        })
    }
})

// FONCTIONNALITE BUTTON SCROLL QUI CHANGE LA PLACE DU TITRE 
let hCacher = document.querySelector(".hcacher")
let hPrincip = document.querySelector(".hprinc")

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        hCacher.className= ("hcacher d-none", "hcacher d-block")
    } else if (window.scrollY < 100){
        hCacher.className= ("hcacher d-block", "hcacher d-none")
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        hPrincip.className= ("hprinc d-block", "hprinc d-none")
    } else if (window.scrollY < 100) {
        hPrincip.className= ("hprinc d-none", "hprinc d-block")
    }
})


// FONCTIONNALITE CAROUSEL JS 


