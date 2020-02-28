let menuDesplegado = document.querySelector("#menuDesplegado")
let menuBusqueda = document.querySelector("#menuBusqueda")
let botonLogueo = document.querySelector("#botonLogueo")
let desplegado = false

menuDesplegado.addEventListener("click", menuStatusHandler);
function menuStatusHandler() {
    if (desplegado == false) {
        desplegado = !desplegado
        menuBusqueda.classList.add("d-none")
        botonLogueo.classList.add("d-none")

    } else if (desplegado == true) {
        desplegado = !desplegado
        menuBusqueda.classList.remove("d-none")
        botonLogueo.classList.remove("d-none")
    }
}

menuBusqueda.addEventListener("click", menuStatusHandler2);
function menuStatusHandler2() {
    if (desplegado == false) {
        desplegado = !desplegado
        menuDesplegado.classList.add("d-none")
        botonLogueo.classList.add("d-none")

    } else if (desplegado == true) {
        desplegado = !desplegado
        menuDesplegado.classList.remove("d-none")
        botonLogueo.classList.remove("d-none")
    }
}
