console.log("Empieza el ejercicio");

let buttonSubmit = document.getElementById("buttonSubmit");
let buttonReset = document.getElementById("buttonReset");
let primerForm = document.forms[0]; // Accede al primer formulario del documento


buttonSubmit.addEventListener("click", function(event) {
  event.preventDefault(); // Evita comportamiento por defecto del botón
  console.log("Boton de enviar pulsado");
});

buttonReset.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Boton de reset pulsado");
  primerForm.reset(); // Resetea el formulario
});