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
  let telFijoPaciente = document.getElementById("telefonoFijoCliente").value;
  let telMovilPaciente = document.getElementById("telefonoMovilCliente").value;
  let emailPaciente = document.getElementById("emailPaciente").value;
  let ciudadPaciente = document.getElementById("localidadPaciente").value;
  let provinciaPaciente = document.getElementById("seleccionProvincia").value;
  let cpPaciente = document.getElementById("postalCliente").value;

  e.preventDefault();
  formPaciente.reset();

  // console.log(  apPaciente+' ')
  // console.log(  nomPaciente+' ')
  // console.log(  edPaciente+' ')
  // console.log(  dniPaciente+' ')
  // console.log(  nacPaciente+' ')
  // console.log(  genPaciente+' ')
  // console.log(  dirPaciente+' ')
  // console.log(  telFijoPaciente+' ')
  // console.log(  telMovilPaciente+' ')
  // console.log(  emailPaciente+' ')
  // console.log(  ciudadPaciente+' ')
  // console.log(  provinciaPaciente+' ')
  // console.log(  cpPaciente+' ')
  
});

