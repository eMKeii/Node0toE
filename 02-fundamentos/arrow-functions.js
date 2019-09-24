
// Funciones declaradas normalmente
// function sumar (a, b){
//     return a+b;
// }

// console.log(sumar(10,20));

//Funciones de flecha, arrow functions
// let sumar = (a, b) => {
//     return a + b;
// }

// console.log(suma (10, 20));

//Si la funci]on solo ocupa una linea para el return esta puede ser escrita de la siguiente forma.
// let sumar = (a, b) => a + b;

// console.log(sumar (10, 20));


// let saludar = () => "Hola mundo";
// function saludar(nombre){
//     return `Hola ${ nombre }`
// }

// let saludar = (nombre) => `Hola ${ nombre }`

// console.log(saludar(`Fernando`));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
}

console.log(deadpool.getNombre());