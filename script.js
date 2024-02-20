//alert("Hola este es mi Javascript");
//let nombre = "Nicolás"
//console.log(nombre)

let cont_tit = "Acerca de mí";

let tit = document.querySelector('.tit');
tit.innerHTML = cont_tit;

let texttit = tit.innerHTML;
console.log(texttit);
console.log(tit.innerHTML);

if (texttit == "Acerca de mí") {
    tit.innerHTML = "lo que se me canta";
    console.log(tit.innerHTML);
};
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});