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
    menuCo.className= ("menuCo dropdown-menu col-12 text-center d-none", "menuCo dropdown-menu col-12 text-center d-block")
    if (menuCo.className == "menuCo dropdown-menu col-12 text-center d-block") {
        connect.addEventListener('click', () => {
            menuCo.className= ("menuCo dropdown-menu col-12 text-center d-block", "menuCo dropdown-menu col-12 text-center d-none")
            if (menuCo.className == "menuCo dropdown-menu col-12 text-center d-none") {
                connect.addEventListener('click', () => {
                    menuCo.className= ("menuCo dropdown-menu col-12 text-center d-none", "menuCo dropdown-menu col-12 text-center d-block")
                })
            }
        })
    }
})


