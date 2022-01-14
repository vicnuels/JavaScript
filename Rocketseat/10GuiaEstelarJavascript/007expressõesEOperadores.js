/* Expressões e Operadores 
    - expressões
    - operadores
        Binary
        Unary
        Ternary
*/
// Expressões
//new
let name = new String("Victor")
name.surName = "Lima"
let age = new Number(25)
console.log(name, age)

let date = new Date('2021-12-27')
console.log(date)

//operadores unários (unary)
//typeof
console.log(typeof name)
console.log(typeof age)

// delete
const person = {
    name: "Mayk",
    age: 25,
}
delete person.age
console.log(person)

// Operadores Aritiméticos
// operadores unários
// incremento
let number = 1
console.log("incremento")
number++
console.log(number++) // depois
console.log(++number) // antes
// decremento
console.log("decremento")
number--
console.log(number--) // depois
console.log(--number) // antes

/* Operadores binários (binary)
    + - * / % **
 */

// Grouping operator (); ex.: (3+2)*2

// Operadores de comparação
let one = 1
let two = 2
// == igual a 
console.log(two == 1)
console.log(one == "1")
// === igual e do mesmo tipo
console.log(one === "1")
// != diferente de
console.log(one != two)
console.log(two != "2")
// !== diferente e de tipos diferentes
console.log(one !== "1")

// Operadores lógicos > < >= <= 

// operadores de atribuição (assignment)
// assignment
let x = 1
// addition assignment
x += 2 // equivale a x = x + 2
// subtraction assignment
x -= 2 // equivale a x = x - 2
// multiplication assignment
x *= 2 // equivale a x = x * 2
// division assignment
x /= 2 // equivale a x = x / 2

// operadores lógicos
console.log("operadores lógicos")
// && (and)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
// || (or)
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
// ! (not)
console.log(!true)
console.log(!false)

// Operador ternário
// condição ? verdadeiro : falso
let idade = 16
let status = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(status)

// Operador de String (String operator)
// Concatenação 
let nome = "Victor"
let sobrenome = "Lima"
let nomeCompleto = nome + " " + sobrenome
console.log(nomeCompleto)
// Interpolação
let nomeCompleto2 = `${nome} ${sobrenome}`
console.log(nomeCompleto2)
// comparação
console.log(nomeCompleto === nomeCompleto2)


// --------------------------------------------------
/** FALSY
 * Quando um valor é considerado false em contexto onde um booleano é obrigatório ( Condicionais e loops)
 * 
 * false
 * 0
 * -0
 * ""
 * null
 * undefined
 * NaN
 */

console.log(0 ? "verdadeiro" : "falso")

/** Truthy
 * Quando um valor é considerado true em contexto onde um booleano é obrigatório ( Condicionais e loops)
 * true
 * 1
 * 3.23
 * "0"
* {}
* []
* infinity
* -infinity
* " "
* "Victor"
 */

console.log({} ? "verdadeiro" : "falso")