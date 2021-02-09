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

