let nombre = 'Deadpool'
let real = 'Wade Wilson'

// Concatenacion de datos para rimprimirlos usando injecciones con ``
// console.log(`${nombre} ${real}`);

// let nombreCompleto = nombre + ' ' + real;
// let nombreTemplate = `${nombre} ${real}` 

// console.log( nombreCompleto === nombreTemplate);

// Los template strings permiten agregar resultados de funciones directamente

function getNombre(){
    return `${ nombre } ${ real }`
}

console.log(`El nombre de: ${ getNombre() }`)