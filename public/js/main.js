// FONCTIONNALITE JS BUTON BLANC ET NOIR 
let buttonNoir = document.querySelector("#butNoir")
let buttonBlanc = document.querySelector("#butBlanc")
let para = document.querySelectorAll("p")
let nav = document.querySelector(".nav")
let hCacher = document.querySelector(".hcacher")
let hPrincip = document.querySelector(".hprinc")

console.log(buttonNoir);
buttonNoir.addEventListener('click', () => {
    document.body.style.backgroundColor= "black"
    hPrincip.className=("hprinc d-block mb-0", "hprinc d-block mb-0 bg-dark")
    nav.className=("nav", "nav bg-dark")
    let para2 = Array.from(para)
    para2.forEach(el => {
        el.style.color= "white"
});
})

buttonBlanc.addEventListener('click', () => {
    document.body.style.backgroundColor= "white"
    hPrincip.className=("hprinc d-block mb-0", "hprinc d-block mb-0 bg-white")
    nav.className=("nav", "nav bg-white")
    let para2 = Array.from(para)
    para2.forEach(el => {
        el.style.color= "black"
});
})

// FONCTIONNALITE JS BUTTON CONNEXION

let connect = document.querySelector("#connexion")
let menuCo = document.querySelector(".menuCo")
let butX = document.querySelector(".butX")

connect.addEventListener('click', () => {
    menuCo.className= ("menuCo mt-7 dropdown-menu col-12 text-center d-none", "menuCo mt-7 dropdown-menu col-12 text-center d-block")
    document.body.style.opacity="3"
    if (menuCo.className == "menuCo mt-7 dropdown-menu col-12 text-center d-block") {
        butX.addEventListener('click', () => {
            menuCo.className= ("menuCo mt-7 dropdown-menu col-12 text-center d-none")
        })
        connect.addEventListener('click', () => {
            menuCo.className= ("menuCo mt-7 dropdown-menu col-12 text-center d-block", "menuCo mt-7 dropdown-menu col-12 text-center d-none")
            if (menuCo.className == "menuCo mt-7 dropdown-menu col-12 text-center d-none") {
                connect.addEventListener('click', () => {
                    menuCo.className= ("menuCo mt-7 dropdown-menu col-12 text-center d-none", "menuCo mt-7 dropdown-menu col-12 text-center d-block")
                })
            }
        })
    }
})
// butX.addEventListener('click', () => {
//     // menuCo.className=("menuCo mt-7 col-12 text-center dropdown-menu d-block")
//     if ( menuCo.className == "menuCo mt-7 col-12 text-center dropdown-menu d-block" ) {
//         menuCo.className= ("menuCo mt-7 dropdown-menu col-12 text-center d-none"
//     }
// })

// FONCTIONNALITE BUTTON SCROLL QUI CHANGE LA PLACE DU TITRE 


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        hCacher.className= ("hcacher d-none", "hcacher d-block")
    } else if (window.scrollY < 100){
        hCacher.className= ("hcacher d-block", "hcacher d-none")
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        hPrincip.className= ("hprinc d-block mb-0", "hprinc d-none mb-0")
    } else if (window.scrollY < 100) {
        hPrincip.className= ("hprinc d-none mb-0", "hprinc d-block mb-0")
    }
})


// FONCTIONNALITE CAROUSEL JS 


