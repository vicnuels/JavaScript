/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para o sistema de notas em caracteres, como A, B, C, etc.

* de 90 para cima       - A
* de 80 - 89            - B
* de 70 - 79            - C
* de 60 - 69            - D
* menor que 60          - F
*/

function transformaNota(nota) {
    if (nota >= 90 && nota <= 100) {
        return 'A';
    } else if (nota >= 80 && nota <= 89) {
        return 'B';
    } else if (nota >= 70 && nota <= 79) {
        return 'C';
    } else if (nota >= 60 && nota <= 69) {
        return 'D';
    } else if (nota < 60 && nota >= 0) {
        return 'F';
    } else {
        return 'Nota inválida'
    }
}

function transformaNotas(notas) {
    for (let i = 0; i < notas.length; i++) {
        notas[i] = transformaNota(notas[i]);
    }
    return notas;
}

let nota = 90
let notas = [90, 80, 70, 60, 150, 70, 30, 20, 10, 0, -5]

console.log(transformaNota(nota))
console.log(transformaNotas(notas))