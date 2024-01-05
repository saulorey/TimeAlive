flatpickr("#birthdateInput", {
    dateFormat: "Y-m-d",
});

function formatearConPuntos(numero) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calcularTiempo() {
    var fechaNacimiento = new Date(document.getElementById("birthdateInput").value);
    var fechaActual = new Date();

    var segundosVividos = (fechaActual - fechaNacimiento) / 1000;
    var resultadoFormateado = formatearConPuntos(segundosVividos);

    var resultado = document.getElementById("result");
    resultado.innerHTML = "¡Has vivido " + resultadoFormateado + " segundos! 🎉";
}


