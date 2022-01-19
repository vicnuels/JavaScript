//Eventos via HTMl
// (P.S) olhar o parâmetro onclick no h1 do index.html
function print() {
    console.log('Hello World');
}

// eventos de teclado e mouse
/*
const input = document.querySelector('input')
input.onkeydown = function () { // quando apertar uma tecla
    console.log('apertei...')
}
input.onkeyup = function () { // quando soltar a tecla
    console.log('soltou...')
}
*/
// Eventos via JavaScript
/*
const p = document.querySelector('p')

p.addEventListener('mouseover', function () {
    console.log('mouse está sobre o p')
})
p.addEventListener('mouseover', function () {
    console.log('mouse está sobre o p 2')
})
// ou
p.onmouseover = function () { // vai ser desconsiderado. 
    console.log('mouse está sobre o p 3')
}
p.onmouseover = function () {
    console.log('mouse está sobre o p 4')
}
*/
// Argumento event
const input = document.querySelector('input')

input.onkeydown = function (event) {
    console.log(event)
}
