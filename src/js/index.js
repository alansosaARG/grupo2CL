// $( function() {
//     $( "#datepicker" ).datepicker();
//   } );

let d = new Date();
let t = d.getTime();
let datareg = t+1;
var database = firebase.database()


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
  
  function firebasePaciente(){

    console.log(datareg);
    datareg= datareg+1;
    console.log(datareg);

    const obj = {
    id: datareg,
    Apellido: apPaciente,
    Nombre: nomPaciente,
    Edad: edPaciente,
    Documento: dniPaciente,
    FechaNacimiento: nacPaciente,
    Genero: genPaciente,
    Dirección: dirPaciente,
    TelFijo: telFijoPaciente,
    TelMovil: telMovilPaciente,
    email: emailPaciente,
    ciudad: ciudadPaciente,
    Provincia: provinciaPaciente,
    CodPostal: cpPaciente,
  }
  console.log(obj)
  let db = firebase.database().ref("obj/"+datareg);
  db.set(obj);
}

// function firebasePaciente(apPaciente,nomPaciente,edPaciente,dniPaciente,nacPaciente,genPaciente,dirPaciente,telFijoPaciente,telMovilPaciente,emailPaciente,ciudadPaciente,provinciaPaciente,cpPaciente) {
//   firebase.database().ref('paciente/' + datareg).set({
//     Apellido: apPaciente,
//     Nombre: nomPaciente,
//     Edad: edPaciente,
//     Documento: dniPaciente,
//     FechaNacimiento: nacPaciente,
//     Genero: genPaciente,
//     Dirección: dirPaciente,
//     TelFijo: telFijoPaciente,
//     TelMovil: telMovilPaciente,
//     email: emailPaciente,
//     ciudad: ciudadPaciente,
//     Provincia: provinciaPaciente,
//     CodPostal: cpPaciente,
// });
// }
firebasePaciente()


// createUsuarioPaciente(apPaciente,nomPaciente,edPaciente,dniPaciente,nacPaciente,genPaciente,dirPaciente,telFijoPaciente,telMovilPaciente,emailPaciente,ciudadPaciente,provinciaPaciente,cpPaciente){};
  formPaciente.reset();

});

// function createUsuarioPaciente (Apellido,Nombre,Edad,Documento,FechaNacimiento,Genero,Dirección,TelFijo,TelMovil,email,ciudad,Provincia,CodPostal){
//  datareg+=1;
//  const Paciente = {

//  }
//  console.log(Paciente)
// }