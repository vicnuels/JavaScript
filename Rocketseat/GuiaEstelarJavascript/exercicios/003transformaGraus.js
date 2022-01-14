/*Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function transformDegree(degree) {
    let celsiusExist = degree.toUpperCase().includes('C');
    let fahrenheitExist = degree.toUpperCase().includes('F');
    if (!celsiusExist && !fahrenheitExist) {
        throw new Error('The unidentified degree')
    }
    if (celsiusExist) {
        let celsius = Number(degree.toUpperCase().replace('C', ''))
        let fahrenheit = celsius * 9 / 5 + 32
        return `${fahrenheit.toFixed(1)}F`
    } else {
        let fahrenheit = Number(degree.toUpperCase().replace('F', ''))
        let celsius = (fahrenheit - 32) * 5 / 9
        return `${celsius.toFixed(1)}C`
    }
}

console.log(transformDegree('19c'))
console.log(transformDegree('-10F'))
//console.log(transformDegree('-10'))
//console.log(transformDegree('-10G'))