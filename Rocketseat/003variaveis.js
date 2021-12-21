/*
Variáveis
    * Atalhos de códigos
    * Identificadores
    * Nome simbólico para receber algum valor
    * 3 palavras reservadas para criar uma variável
        - var
        - let
        - const
    declaração de qualquer tipo de variável
    var nome
    ou
    let nome
    ou
    const nome
*/

// var
var tempo = "Quente"
tempo = "Frio"
console.log(typeof (tempo)) // imprime o tipo da variável
console.log(tempo)
// let (mais moderna)
let temperatura = "Alta"
temperatura = "Baixa"
console.log(temperatura)
// const (Não pode ser alterada)
const cidade = "São Paulo"
console.log(cidade)

// var é global e também local
// hoisting
console.log('> existe x entes do bloco? ', x)

{ // cria um novo escopo
    var x = 10
}

console.log('> existe x depois do bloco? ', x)

// let e const são locais e só funcionam no escopo onde foram declaradas
//console.log('> existe y entes do bloco? ', y) // erro

{ // cria um novo escopo
    let y = 10
    console.log('> existe y dentro do bloco? ', y)
}

//console.log('> existe y depois do bloco? ', y) // erro

/* 
    * JavaScript é uma linguagem de tipagem fraca
    * JS é case-sensitive
    * aceita a cadeia de caracteres Unicode
    
    - Posso (ao criar nomes de variáveis):
        - Iniciar com letra
        - Iniciar com _ e $
        - Colocar acentos
        - Letras maiúsculas e minúsculas fazem diferença
    - Não posso (ao criar nomes de variáveis):
        - Não pode começar com número
        - Não pode conter espaço
    - ideal:
        - Criar nomes que fazem sentido
        - camelCase
        - snake_case
        - Escrever em 


*/