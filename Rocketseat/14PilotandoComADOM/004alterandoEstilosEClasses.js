// Alterando estilos e classes
const element = document.querySelector('body')

//element.style.backgroundColor = '#F9F3D2'
//console.log(element.style.backgroundColor)

//classList

element.classList.add('active', 'green')
console.log(element.classList)
//element.classList.remove('active') //remove a classe
element.classList.toggle('active') //adiciona (se não existir) ou remove a classe (se existir)
