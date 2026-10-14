// ===== Funciones de cálculo =====

// Arrow function con operador rest
export const promedio = (...notas) => {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
};

// Arrow function con parámetro por defecto
export const estado = (nota, minima = 13) =>
    nota >= minima ? "Aprobado" : "Desaprobado";

// Desestructuración en el parámetro
const reporte = ({ nombre, notas }) => {
    // Spread para enviar las notas
    const prom = promedio(...notas);

    // Template literal
    return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

// Exportación por defecto
export default reporte;