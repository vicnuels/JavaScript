// Manipulando Conteúdo 
// textContent
const element = document.querySelector('h1')
console.log(element.textContent)
element.textContent = "Olá, Devs!"

// innerText
const element2 = document.querySelector('h1')
console.log(element.innerText)
element2.innerText = "Hello, Devs!"

// innerHTML
const element3 = document.querySelector('h1')
console.log(element.innerHTML)
element3.innerHTML = "Hello, <small>Devs!</small>"

// value
const element4 = document.querySelector('input')
console.log(element4.value)
element4.value = "Valor qualquer"
console.log(element4.value)

// atributos
const element5 = document.querySelector('input')
element5.setAttribute('id', 'input-text')
console.log(element5)

//element5.removeAttribute('id')
//console.log(element5)