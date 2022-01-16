// Criando e adicionado elementos

// createElement
const div = document.createElement('div')
const div2 = document.createElement('div')
const div3 = document.createElement('div')
const div4 = document.createElement('div')
div.innerText = 'I\'m a div'
div2.innerText = 'I\'m a div 2'
div3.innerText = 'I\'m a div 3'
div4.innerText = 'I\'m a div 4'
// append prepend
const body = document.querySelector('body')

body.append(div) // Adiciona o elemento no final
body.prepend(div2) // Adiciona o elemento no inicio

// insertBefore
const script = document.querySelector('script')
body.insertBefore(div3, script) // Adiciona o elemento antes do script

const header = document.querySelector('header')
body.insertBefore(div4, header.nextSibling) // Adiciona o elemento depois do header 