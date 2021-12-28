// Declaração (Declaration)
var name

// Assignments (Atribuição)
name = "Victor"

// Que tipo de variável é?
console.log(typeof name)

// Agrupamento de declarações
let age, isHuman

age = 16
isHuman = true

// Multiplos argumentos na função
console.log(name, age, isHuman)

// Escrita de texto + variáveis
// concatenar valores
console.log("Meu nome é " + name + " e tenho " + age + " anos")

// interpolando valores
console.log(`Meu nome é ${name} e tenho ${age} anos`)

// Object

const person = {
    name: "Victor",
    age: 16,
    weight: 70.6,
    isHuman: true
}

console.log(person)
console.log(`${person.name} tem ${person.age} anos`)

// Array

const animals = [
    'Lion',
    'Tiger',
    'Dog',
    'Cat'
]

console.log(animals[0]) // primeira posição

console.log(animals.length) // tamanho do array