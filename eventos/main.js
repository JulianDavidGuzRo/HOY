
function notaPromedio() {
    promedio();
};

//mediante propiedad
const btnPropiedad = document.getElementById ("btn2");
btnPropiedad.onclick = function () {
    promedio();
};

//metodo .addEvenlister

const btnAdd = document.getElementById("btn3");
btnAdd.addEventListener ("click", function () {
    promedio();
});



// Metodo para el calculo del promedio 




const  promedio = () => {
    let cantNotas = prompt("introduzca la cantidad de notas");
    if (!isNaN(parseInt(cantNotas))){
        let nota = 0;
        let sumaNotas = 0;
        for ( let i = 1; i <= cantNotas; i++) {
            nota = prompt("introduzca la nota No:" +i);
            sumaNotas += (parseFloat(nota));
        }
            let promedio = sumaNotas / cantNotas;
            alert ("el promedio es:" + promedio.toFixed(1));
    } else{
        alert ("el valor es invalido");
    }
}
