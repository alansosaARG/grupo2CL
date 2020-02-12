// $( function() {
//     $( "#datepicker" ).datepicker();
//   } );


document.getElementById("formPaciente").addEventListener("submit",(e)=>{

  let apPaciente = document.getElementById("apellidoPaciente").value;
  let nomPaciente = document.getElementById("nombrePaciente").value;
  let edPaciente = document.getElementById("edadPaciente").value;
  let dniPaciente = document.getElementById("documentoDNI").value;
  let nacPaciente = document.getElementById("nacimientoPaciente").value;  
  let genPaciente = document.getElementById("idSexoCliente").value;
  let dirPaciente = document.getElementById("domicilioPaciente").value;
  let telefCliente = document.getElementById("telefonoCliente").value;
  
  e.preventDefault();
  formPaciente.reset();

  
// console.log(document.getElementById("inlineFijo").value);
// console.log(document.getElementById("inlineCelular").value);
console.log(telefCliente);
console.log(dirPaciente);


//  console.log(apPaciente+' '+nomPaciente+' '+edPaciente+' '+dniPaciente+' '+nacPaciente+' '+genPaciente+' '+dirPaciente+' '+telCliente)
});
