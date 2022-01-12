/*  ### Sistema de gastos familiar

 Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
Agora crie uma função que irá calcular o total de receitas e despesas e irá mostras um a mensagem se a a família está com o saldo POSITIVO ou NEGATIVO, seguindo do valor do saldo.
 */

let family = {
    incomes: [2000, 4999.884, 4622.3, 5000],
    expenses: [311, 3113, 4242, 5555],
}

function sumNumbers(numbers) {
    let sum = 0
    for (let value of numbers) {
        sum += value
    }
    return sum
}

function showBalance(family) {
    let totalExpense = sumNumbers(family.expenses)
    let totalIncome = sumNumbers(family.incomes)
    let balance = totalIncome - totalExpense

    if (balance >= 0) {
        console.log(`O saldo da família está POSITIVO com R$ ${balance.toFixed(2)}`)
    } else {
        console.log(`O saldo da família está NEGATIVO com R$ ${balance.toFixed(2)}`)
    }
}

showBalance(family) 