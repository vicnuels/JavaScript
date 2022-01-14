//Manipulação de dados
/* Prototype
    - prototype-based language
    - prototype chain
    - __proto__
 */

/**
    Type conversion (typecasting) vs type coersion 
    - alteração de um tipo de dado para outro tipo
 */
console.log("9" + 5) // Type coersion 
console.log(Number('9') + 5) // Type conversion

// Manipulando Strings e números

// Transformando uma string em número e um número em uma string
let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = 'Paralelepipedo'
console.log(word.length)
let number1 = 12345
console.log(number.toString().length)

// transformar um número quebrado com 2 casas decimais e trocar ponto por virgula
let number2 = 184.34548943083
console.log(Number(number2.toFixed(2)))
console.log(number2.toFixed(2).replace('.', ','))

// transformar letras minúsculas em maiúsculas e vice-versa
let word1 = 'Programar é muito bacana!'
console.log(word1.toUpperCase())
console.log(word1.toLowerCase())

// Transformar um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = 'É preciso imaginar Sisifo feliz!'
let myArray = phrase.split(' ')
console.log(myArray)
let newPhrase = myArray.join('_')
console.log(newPhrase)

// verificar se um texto contém uma palavra especifica.
let word2 = 'O sentido da vida é qualquer coisa que não faça você querer se matar!'
console.log(word2.includes('vida'))

//Criando array com construtor 
let array = new Array(10)
console.log(array)

// contar quantos elementos tem um array
let array1 = [1, 2, 3, {}, 'teste']
console.log(array1.length)

// transformar uma cadeia de caracteres em elementos de um array
let string1 = 'O rato roeu a roupa do rei de roma'
let array2 = Array.from(string1)
console.log(array2)

let techs = ["html", "css", "javascript"]

// adicionar um elemento ao final do array
techs.push('Node.js')
console.log(techs)
// adicionar um elemento no início do array
techs.unshift('ReactJS')
console.log(techs)
// remover um elemento do final do array
techs.pop()
console.log(techs)
// remover um elemento do início do array
techs.shift()
console.log(techs)
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// remover 1 ou mais elementos em qualquer posição do array
techs.splice(1, 2)
console.log(techs)
// encontrar a posição de um elemento no array
console.log(techs.indexOf('html'))