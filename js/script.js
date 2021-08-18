class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrar() {
        console.log(`${this.nombre} tiene ${this.edad} anios`);
    }
}

const ordenarPersonasNombre = []

let persona1 = new Persona('David', 34);
let persona2 = new Persona('Jorge', 15);
let persona3 = new Persona('Pablo', 10);
let persona4 = new Persona('Aara', 25)

ordenarPersonasNombre.push(persona1, persona2, persona3, persona4)

ordenarPersonasNombre.sort((a, b) => {
    if (a.nombre < b.nombre) {
        return -1;
    }
    if (a.nombre > b.nombre) {
        return 1;
    } else {
        return 0;
    }
})

console.log(ordenarPersonasNombre);


const ordenarPersonasEdad = [];
ordenarPersonasEdad.push(persona1, persona2, persona3, persona4);


//Ordenar personas por edad, de menor a mayor
ordenarPersonasEdad.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1;
    }
    if (a.edad > b.edad) {
        return 1;
    } else {
        return 0;
    }
})

console.log(ordenarPersonasEdad);