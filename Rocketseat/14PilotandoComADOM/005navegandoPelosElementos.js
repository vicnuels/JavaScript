// Navegando pelos elementos
const body = document.querySelector("body")
// parentNode parentElement
console.log(body.parentNode) // retorna o elemento pai
console.log(body.parentElement) // retorna o elemento pai

// ChildNodes children
console.log(body.childNodes) // retorna todos os elementos filhos (nodeList)
console.log(body.children) // retorna todos os elementos filhos (HTMLCollection)

// firstChild firstElementChild
console.log(body.firstChild) // retorna o primeiro elemento filho (considera espaços vazios)
console.log(body.firstElementChild) // retorna o primeiro elemento filho (não considera espaços vazios)

// lastChild lastElementChild
console.log(body.lastChild) // retorna o último elemento filho (considera espaços vazios)
console.log(body.lastElementChild) // retorna o último elemento filho (não considera espaços vazios)

// nextSibling nextElementSibling
const head = document.querySelector("head")
console.log(head.nextSibling) // retorna o próximo elemento (considera espaços vazios)
console.log(head.nextElementSibling) // retorna o próximo elemento (não considera espaços vazios)
