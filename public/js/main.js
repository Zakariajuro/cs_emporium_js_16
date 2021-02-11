// const { Carousel } = require("bootstrap")

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
let menuCo = document.querySelector(".menuCo")
let butX = document.querySelector(".butX")

connect.addEventListener('click', () => {
    menuCo.className= ("menuCo mt-7 dropdown-menu col-12 text-center d-none", "menuCo mt-7 dropdown-menu col-12 text-center d-block")
    // document.body.style.opacity="0.5"
    document.body.style.overflow="hidden"
    if (menuCo.className == "menuCo mt-7 dropdown-menu col-12 text-center d-block") {
        butX.addEventListener('click', () => {
            menuCo.className= ("menuCo mt-7 dropdown-menu col-12 text-center d-none")
            document.body.style.overflow="auto"
            document.body.style.opacity="1"
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


// FONCTIONNALITE CAROUSEL JS 
// class Carousel {
//     constructor(element, option= {}){
//         this.element = element
//         this.option = Object.assign({}, {
//             slideToScroll: 1,
//             sildVisible: 1
//         }, option)
//     }
// }
// document.addEventListener('DOMEContentLoaded', () => {
//     new Carousel(document.querySelector(".carou"),{
//         slideToScroll: 3,
//         sildVisible: 3
//     })
// })
function Carousel() {
    let Carou = document.querySelector('.carou');
    let btnCarou = document.querySelectorAll(".btnCarou");
    let compt = 1;
    let pose = ['0px','-300px','-580px','-850px'];
    btnCarou[0].addEventListener('click', () => {
        Carou.style.scrollLeft = "0px";
        btnCarou.forEach(e => {
            e.classList.replace("bg-secondary", "bg-light");
        });
        btnCarou[0].classList.replace("bg-light", "bg-secondary");
    });
    btnCarou[1].addEventListener('click', () => {
        Carou.style.scrollLeft = "-300px";
        btnCarou.forEach(e => {
            e.classList.replace("bg-secondary", "bg-light");
        });
        btnCarou[1].classList.replace("bg-light", "bg-secondary");
    });
    btnCarou[2].addEventListener('click', () => {
        Carou.style.scrollLeft = "-580px";
        btnCarou.forEach(e => {
            e.classList.replace("bg-secondary", "bg-light");
        });
        btnCarou[2].classList.replace("bg-light", "bg-secondary");
    })

    btnCarou[3].addEventListener('click', () => {
        Carou.style.scrollLeft = '-850px';
        btnCarou.forEach(e => {
            e.classList.replace('bg-secondary', 'bg-light')
        })
        btnCarou[3].classList.replace('bg-light', 'bg-secondary');
    });
    btnCarou.forEach(e => {
        e.addEventListener('mouseover', () => {
            e.style.backgroundColor = '#bebebe';
        });
        e.addEventListener('mouseout', () => {
            e.style.backgroundColor = '';
        })
    });
    setInterval(() => {
        compt = (compt + 1) % 4;
        Carou.style.left = pose[compt];
        btnCarou.forEach(e => {
            e.classList.replace('bg-secondary', 'bg-light');
        });
        btnCarou[compt].classList.replace('bg-light', 'bg-secondary');

    }, 5000);
    window.addEventListener('keydown', event => {
        if (event.which == '39') {
            compt = (compt + 1) % 4;
            Carou.style.left = pose[compt];
        } else if (event.which == '37') {
            
            compt = (compt - 1) % 4;
            if (compt < 0) {
                compt = 3;
            }
            Carou.style.left = pose[compt];
        }
        btnCarou.forEach(e => {
            e.classList.replace('bg-secondary', 'bg-light');
        });
        btnCarou[compt].classList.replace('bg-light', 'bg-secondary');

    });
}
Carousel()





