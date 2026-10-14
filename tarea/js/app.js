// Laboratorio 09 - JavaScript Moderno ES6+
// Desarrollo individual: Refactorización de ES5 a ES6+ con módulos

// Importamos los datos
import estudiantes, { curso } from "./datos.js";

// Importamos la función reporte
import reporte from "./calculos.js";

// Creamos una copia de Ana cambiando su nombre
const nuevo = { ...estudiantes[0], nombre: "Ana María" };

// Agregamos a Ana María sin modificar el arreglo original
const todos = [...estudiantes, nuevo];

// Mostramos el curso en la consola
console.log(`Curso: ${curso}`);

// Seleccionamos la lista del HTML
const listaReportes = document.querySelector("#reportes");

// Mostramos el curso en la página
listaReportes.innerHTML += `<li><strong>Curso: ${curso}</strong></li>`;

// Recorremos todos los estudiantes
todos.forEach(estudiante => {
    const resultado = reporte(estudiante);

    console.log(resultado);

    listaReportes.innerHTML += `<li>${resultado}</li>`;
});