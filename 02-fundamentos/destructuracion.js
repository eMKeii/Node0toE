let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
}

// let nombre = deadpool.nombre;
// let nombre = deadpool.apellido;
// let nombre = deadpool.poder;
// Estas lines pueden ser reemplazadas por destructuracion

let = { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);