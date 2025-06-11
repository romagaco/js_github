console.log("Empieza el ejercicio");

let buttonSubmit = document.getElementById("buttonSubmit");
let buttonReset = document.getElementById("buttonReset");
let primerForm = document.forms[0]; // Accede al primer formulario del documento


buttonSubmit.addEventListener("click", function(event) {
  event.preventDefault(); // Evita comportamiento por defecto del botón
  console.log("Boton de enviar pulsado");
  // comprobamos que el email contiene un "@"
  if (primerForm.elements[0].value.includes("@")) {
    primerForm.submit();
  } else { alert("Debe de añadir un @ al email"); }
});

buttonReset.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Boton de reset pulsado");
  primerForm.reset(); // Resetea el formulario
});

