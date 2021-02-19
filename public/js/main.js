// CIBLAGE DES ELEMENTS HTML
let buttonNoir = document.querySelector("#butNoir")
let buttonBlanc = document.querySelector("#butBlanc")
let para = document.querySelectorAll("p")
let nav = document.querySelector(".nav")
let hCacher = document.querySelector(".hcacher")
let hPrincip = document.querySelector(".hprinc")
let psect1 = document.querySelector(".psect1")
let psect6 = document.querySelectorAll(".psect6")
let h3s3 = document.querySelector(".h3s3")
let h2s5 = document.querySelector(".h2s5")
let linav = document.querySelectorAll(".linav")
// FONCTIONNALITE JS BUTON BLANC ET NOIR 
console.log(buttonNoir);

// NOIR 
buttonNoir.addEventListener('click', (bN) => {
    document.body.style.backgroundColor= "black"
    hPrincip.className=("hprinc d-block mb-0", "hprinc d-block mb-0 bg-dark text-light")
    psect1.classList.add("text-dark")
    hCacher.classList.add("text-light")
    nav.className=("nav", "nav bg-dark")
    h3s3.classList.add("text-light")
    h2s5.classList.add("text-light")
    
    let linav2 = Array.from(linav)
    linav2.forEach(el => {
    el.classList.add("text-light")
});
    let psect62 = Array.from(psect6)
    psect62.forEach(el => {
    el.classList.add("text-dark")
});

    let para2 = Array.from(para)
    para2.forEach(el => {
        el.style.color= "white"
});
})

// BLANC 
buttonBlanc.addEventListener('click', () => {
    document.body.style.backgroundColor= "white"
    hPrincip.className=("hprinc d-block mb-0", "hprinc d-block mb-0 bg-white")
    nav.className=("nav", "nav bg-white")
    hCacher.classList.add("text-dark")
    h3s3.classList.add("text-dark")
    h2s5.classList.add("text-dark")
    
    let linav2 = Array.from(linav)
    linav2.forEach(el => {
    el.classList.add("text-dark")
});
    
    let para2 = Array.from(para)
    para2.forEach(el => {
        el.style.color= "black"
});
})

// FONCTIONNALITE JS BUTTON CONNEXION

let connect = document.querySelector("#connexion")
let granDiv = document.querySelector(".granDiv")
let menuCo = document.querySelector(".menuCo")
let butX = document.querySelector(".butX")


// connect.addEventListener('click', () => {
//     menuCo.className= ("menuCo  bg-light d-none", "menuCo  bg-light d-block")
//     // document.body.style.opacity="0.5"
//     granDiv.className=("granDiv d-none", "granDiv d-block")
//     document.body.style.overflow="hidden"
//     if (menuCo.className == "menuCo  bg-light d-block") {
//         butX.addEventListener('click', () => {
//             menuCo.className= ("menuCo  bg-light d-none")
//             document.body.style.overflow="auto"
//             granDiv.className=("granDiv d-block", "granDiv d-none")
//         })
//         connect.addEventListener('click', () => {
//             menuCo.className= ("menuCo  bg-light d-block", "menuCo  bg-light d-none")
//             if (menuCo.className == "menuCo  bg-light d-none") {
//                 connect.addEventListener('click', () => {
//                     menuCo.className= ("menuCo  bg-light d-none", "menuCo  bg-light d-block")
//                     granDiv.className=("granDiv d-none", "granDiv d-block")
//                 })
//             }
//         })
//     }
// })
let i = 0
connect.addEventListener('click' , () => {
    if (i%2 == 0) {
        menuCo.classList.add('d-block')
        menuCo.classList.remove('d-none')
        granDiv.classList.add('d-block')
        granDiv.classList.remove('d-none')
        i++
    } 
})
butX.addEventListener('click', () => {
    menuCo.classList.remove('d-block')
    menuCo.classList.add('d-none')
    granDiv.classList.remove('d-block')
    granDiv.classList.add('d-none')
    i++
})
// granDiv.addEventListener('click', () => {
//     menuCo.classList.remove('d-block')
//     menuCo.classList.add('d-none')
//     granDiv.classList.remove('d-block')
//     granDiv.classList.add('d-none')
//     i++
// })
console.log(i);
// butX.addEventListener('click', () => {
//     // menuCo.className=("menuCo mt-7 col-12 text-center dropdown-menu d-block")
//     if ( menuCo.className == "menuCo mt-7 col-12 text-center dropdown-menu d-block" ) {
//         menuCo.className= ("menuCo mt-7 dropdown-menu col-12 text-center d-none"
//     }
// })

// FONCTIONNALITE BUTTON SCROLL QUI CHANGE LA PLACE DU TITRE 


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        hPrincip.className= ("hprinc d-block mb-0", "hprinc d-none mb-0")
        hCacher.className= ("hcacher d-none", "hcacher d-block")
        if (document.body.style.backgroundColor == "black") {
            hPrincip.className="hprinc d-none mb-0 bg-dark text-light"
            let linav2 = Array.from(linav)
            linav2.forEach(el => {
            el.classList.add("text-light")
            hCacher.classList.add("text-light")
        });
        }
    } else if (window.scrollY < 99) {
        hPrincip.className= ("hprinc d-none mb-0", "hprinc d-block mb-0")
        hCacher.className= ("hcacher d-block", "hcacher d-none")
        if ( document.body.style.backgroundColor == "black") {
            hPrincip.className="hprinc d-block mb-0 bg-dark text-light"
            let linav2 = Array.from(linav)
            linav2.forEach(el => {
            el.classList.add("text-light")
            hCacher.classList.add("text-light")
        });
        }
    }
})


let imgCarou = document.querySelector('.ptitCarou')
console.log(imgCarou);
let btnCarou = document.querySelectorAll(".btnCarou");

btnCarou[0].addEventListener('click', ()=> {
    imgCarou.style = "transform:translateX(-300px); transition:2s"    
})

btnCarou[1].addEventListener('click', ()=> {
    imgCarou.style = "transform:translateX(-900px); transition:2s"    
})
btnCarou[2].addEventListener('click', ()=> {
    imgCarou.style = "transform:translateX(-1500px); transition:2s"
    
})
btnCarou[3].addEventListener('click', ()=> {
    imgCarou.style = "transform:translateX(0%); transition:2s"
})