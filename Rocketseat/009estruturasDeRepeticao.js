// estruturas de repetição
// for
console.log('for')
for (let i = 0; i < 10; i++) {
    console.log(i)
}
// continue - pula a execução do 
console.log('for com continue')
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i)
}
// break - interrompe a execução do 
console.log('for com break')
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break
    }
    console.log(i)
}

// while
console.log('while')
let i = 0
while (i < 10) {
    console.log(i)
    i++
}

// for...of

let name = 'Victor'
let names = ['Victor', 'João', 'Maria']

console.log('for...of')
for (let char of name) {
    console.log(char)
}

for (let name of names) {
    console.log(name)
}

// for...in
let person = {
    name: 'Victor',
    age: 17,
    weight: 70
}

console.log('for...in')
for (let property in person) {
    console.log(property)
    console.log(person[property])
}