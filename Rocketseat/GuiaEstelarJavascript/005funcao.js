// Criar aplicativo de frases motivationais 

// declaração da função
// function declaration
function createPhrases() {
    const phrases = [
        'Seja o que for, seja o que for',
        'Tudo o que você precisa para ser feliz é um plano de vida',
        'Não importa o que você faz, você sempre vai ter sucesso',
        'A vida é uma coisa que se pode descobrir',
        'Não importa o que você faz, você sempre vai ter sucesso',
        'Seja o que for, seja o que for',
        'Tudo o que você precisa para ser feliz é um plano de vida',
        'Não importa o que você faz, você sempre vai ter sucesso',
        'A vida é uma coisa que se pode descobrir',
        'Não importa o que você faz, você sempre vai ter sucesso',
        'Seja o que for, seja o que for',
        'Tudo o que você precisa para ser feliz é um plano de vida',
        'Não importa o que você faz, você sempre vai ter sucesso',
        'A vida é uma coisa que se pode descobrir',
        'Não importa o que você faz, você sempre vai ter sucesso',
        'Seja o que for, seja o que for',
        'Tudo o que você precisa para ser feliz é um plano de vida',
        'Não importa o que você faz, você sempre vai ter sucesso',
        'A vida é uma coisa que se pode descobrir',
        'Não importa o que você faz, você sempre vai ter sucesso',
        'Seja o que for, seja o que for',
        'Tudo o que você precisa para ser feliz é um plano de vida',
        'Não importa o que você faz, você sempre vai ter sucesso',
        'A vida é uma coisa que se pode descobrir'
    ]
    console.log(phrases[Math.floor(Math.random() * phrases.length)])
}

// executar/rodar/chamar/invocar a função
// execute/ run / call / invoke função
createPhrases()

//----------------------------------------------------------------------------------------------------------------------

// function expression
// function anonymous 

const sum = function (number1, number2) { // paramentos/parameters (number1, number2)
    var total = number1 + number2 // em funções var é local
    return total
}

console.log(sum(1, 2))// argumentos/arguments (1, 2)

let number1 = 45
let number2 = 10

console.log(sum(number1, number2))

// function hoisting

sayMyName()

function sayMyName() {
    console.log('Victor')
}

// Arrow function

const sayName = (name) => {
    console.log('Hello ' + name)
}

sayName('Victor')

// callback function

function sayYourName(name) {
    console.log(name)
    name()
}

//sayYourName('Mayk')
sayYourName(
    () => {
        console.log('Estou em uma callback function')
    }
)

/* Function constructor
    * expressão new
    * cria um novo objeto
    * this keyword
*/

function Person(name) {// primeira letra maiúscula
    this.name = name
    this.walk = function () {
        return this.name + ' está andando.'
    }
}
const mayk = new Person('Mayk')
console.log(mayk)
console.log(mayk.walk())

const joao = new Person('João')
console.log(joao)
console.log(joao.walk())