
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
firebasePaciente()
  formPaciente.reset();
});

// function createUsuarioPaciente (Apellido,Nombre,Edad,Documento,FechaNacimiento,Genero,Dirección,TelFijo,TelMovil,email,ciudad,Provincia,CodPostal){
function provLocalidad (){
  const provincias = ["Buenos Aires ",  "Ciudad Autónoma de Buenos Aires",  "Catamarca",  "Chaco",  "Chubut",  "Córdoba",  "Corrientes",  "Entre Ríos",  "Formosa",  "Jujuy",  "La Pampa",  "La Rioja",  "Mendoza",  "Misiones",  "Neuquén",
  "Río Negro",  "Salta",  "Santa Cruz",  "Santa Fé",  "Santiago Del Estero",  "San Juan",  "San Luis",  "Tierra Del Fuego",
  "Tucumán",]
  let select = document.getElementById("selProvinciaTest");

  for (let i=0; i<provincias.length; i++){
    let option = document.createElement("option");
    option.innerHTML = provincias[i];
    select.appendChild(option);
  }
}
provLocalidad() 

function localidadProv (){
  const localidad = [
    tucuman = ["Burruyacu", "Capital", "Chicligasta", 
  "Cruz Alta", "Famailla", "Graneros", "Juan B. Alberdi", 
  "La Cocha", "Leales", "Lules", "Monteros", "Rio Chico", "Simoca", "Tafi del Valle", "Tafi Viejo", "Trancas", "Yerba Buena"],
]
  console.log(localidad)
  
  let select = document.getElementById("seleccionLocalidad");
  for (let i=0; i<localidad.length ; i++){
    let option = document.createElement("option");
    option.innerHTML = localidad[i];
    select.appendChild(option);
    console.log(localidad[i])
      }
}
localidadProv()