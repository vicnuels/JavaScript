// getElementById
//document.getElementById('id')
//console.log(document.getElementById('blog-title'))

//getElementsByClassName (retorna um HtmlCollection)
//document.getElementsByClassName('class')
//console.log(document.getElementsByClassName('blog-item'))

//getElementsByTagName
//document.getElementsByTagName('tag')
//console.log(document.getElementsByTagName('p'))

//querySelector() - retorna o primeiro elemento que atende ao seu argumento
//document.querySelector('selector')
//console.log(document.querySelector('#blog-title'))
//console.log(document.querySelector('.blog-item'))
//console.log(document.querySelector('p'))
//console.log(document.querySelector('[src]')) // retorna o primeiro elemento com o argumento src

//querySelectorAll() - retorna todos os elementos que atendem ao seu argumento (retorna uma Nodelist)
//document.querySelectorAll('selector')
//console.log(document.querySelectorAll('p'))
//console.log(document.querySelectorAll('meta'))
/* Vantagem do retorno em node list:
    let elements = document.querySelectorAll('p')
    elements.forEach(element => { console.log(element) })
 */

