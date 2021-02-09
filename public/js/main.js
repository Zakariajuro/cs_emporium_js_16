// FONCTIONNALITE JS BUTON BLANC ET NOIR 
let buttonNoir = document.querySelector("#butNoir")
let buttonBlanc = document.querySelector("#butBlanc")
let para = document.querySelectorAll("p")

console.log(buttonNoir);
buttonNoir.addEventListener('click', () => {
    document.body.style.backgroundColor= "black"
})

buttonBlanc.addEventListener('click', () => {
    document.body.style.backgroundColor= "white"
})