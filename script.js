//alert("Hola este es mi Javascript");
//let nombre = "Nicolás"
//console.log(nombre)

let cont_tit = "Acerca de mí";

let tit = document.querySelectorAll('.tit');
tit.innerHTML = cont_tit;

let texttit = tit.innerHTML;
console.log(texttit);
console.log(tit.innerHTML);

if (texttit == "Acerca de mí") {
    tit.innerHTML = "lo que se me canta";
    console.log(tit.innerHTML);
};