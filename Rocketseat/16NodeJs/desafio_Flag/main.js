getFlagValue = require('./getFlag.js')
//console.log(getFlag)
//console.log(getFlag('--name'))

let message
let name = getFlagValue('--name')
let greeting = getFlagValue('--greeting')
if (name) {
    message = name
    if (greeting) {
        message += ", " + greeting
    }
} else {
    message = "no arguments"
}
console.log(message)